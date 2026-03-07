#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..')
const API_DIR = path.join(ROOT, 'api')

const VALID_DBS = ['mongodb', 'cosmos', 'postgresql', 'firebase']

// ---------------------------------------------------------------------------
// Database definitions
// ---------------------------------------------------------------------------

const DATABASES = {
  mongodb: {
    label: 'MongoDB',
    dependencies: { express: '^4.21.0', cors: '^2.8.5', mongodb: '^6.12.0' },
    envVars: [
      { key: 'MONGODB_URI', value: 'mongodb://localhost:27017', description: 'MongoDB connection string (e.g. mongodb://localhost:27017 or your Atlas URI)' },
      { key: 'PORT', value: '3002', description: 'Server port (default: 3002)' },
    ],
    serverCode: () => `const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')

const app = express()
const port = process.env.PORT || 3002

app.use(express.json())
app.use(cors({
  origin: ['http://localhost:3000', 'https://docs.example.com'],
}))

const client = new MongoClient(process.env.MONGODB_URI || 'mongodb://localhost:27017')
const db = client.db('trellis')
const feedback = db.collection('feedback')

// --- POST /api/feedback/submit ---
app.post('/api/feedback/submit', async (req, res) => {
  try {
    const { page, type, options, comment } = req.body

    if (!page || !type) {
      return res.status(400).json({ error: 'Missing required fields: page, type' })
    }
    if (type !== 'like' && type !== 'dislike') {
      return res.status(400).json({ error: 'type must be "like" or "dislike"' })
    }

    await feedback.insertOne({
      page, type,
      options: options || [],
      comment: comment || '',
      createdAt: new Date(),
    })

    res.json({ success: true })
  } catch (err) {
    console.error('Submit error:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// --- GET /api/feedback/summary ---
app.get('/api/feedback/summary', async (req, res) => {
  try {
    const { period } = req.query
    const filter = {}

    if (period === '7d') {
      filter.createdAt = { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }
    } else if (period === '30d') {
      filter.createdAt = { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
    }

    const docs = await feedback.find(filter).sort({ createdAt: -1 }).toArray()

    const likes = docs.filter(d => d.type === 'like').length
    const dislikes = docs.filter(d => d.type === 'dislike').length
    const total = docs.length
    const satisfactionRate = total > 0 ? (likes / total) * 100 : 0

    const pageMap = new Map()
    for (const doc of docs) {
      const entry = pageMap.get(doc.page) || { page: doc.page, likes: 0, dislikes: 0, total: 0 }
      entry[doc.type === 'like' ? 'likes' : 'dislikes']++
      entry.total++
      pageMap.set(doc.page, entry)
    }
    const byPage = Array.from(pageMap.values()).map(p => ({
      ...p,
      satisfactionRate: p.total > 0 ? (p.likes / p.total) * 100 : 0,
    }))

    const optionMap = new Map()
    for (const doc of docs) {
      for (const opt of doc.options || []) {
        const key = \`\${opt}:\${doc.type}\`
        const entry = optionMap.get(key) || { option: opt, count: 0, type: doc.type }
        entry.count++
        optionMap.set(key, entry)
      }
    }
    const byOption = Array.from(optionMap.values())

    const recentEntries = docs.slice(0, 100).map(d => ({
      id: d._id.toString(),
      page: d.page,
      type: d.type,
      options: d.options || [],
      comment: d.comment || '',
      createdAt: d.createdAt.toISOString(),
    }))

    res.json({ totals: { total, likes, dislikes, satisfactionRate }, byPage, byOption, recentEntries })
  } catch (err) {
    console.error('Summary error:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

client.connect().then(() => {
  app.listen(port, () => console.log(\`Feedback API running on port \${port}\`))
})
`,
  },

  cosmos: {
    label: 'Azure Cosmos DB',
    dependencies: { express: '^4.21.0', cors: '^2.8.5', '@azure/cosmos': '^4.2.0' },
    envVars: [
      { key: 'COSMOS_ENDPOINT', value: 'https://your-account.documents.azure.com:443/', description: 'Cosmos DB account URI' },
      { key: 'COSMOS_KEY', value: 'your-primary-key', description: 'Cosmos DB primary or secondary key' },
      { key: 'PORT', value: '3002', description: 'Server port (default: 3002)' },
    ],
    serverCode: () => `const express = require('express')
const cors = require('cors')
const { CosmosClient } = require('@azure/cosmos')

const app = express()
const port = process.env.PORT || 3002

app.use(express.json())
app.use(cors({
  origin: ['http://localhost:3000', 'https://docs.example.com'],
}))

const client = new CosmosClient({
  endpoint: process.env.COSMOS_ENDPOINT,
  key: process.env.COSMOS_KEY,
})
const container = client.database('trellis').container('feedback')

// --- POST /api/feedback/submit ---
app.post('/api/feedback/submit', async (req, res) => {
  try {
    const { page, type, options, comment } = req.body

    if (!page || !type) {
      return res.status(400).json({ error: 'Missing required fields: page, type' })
    }
    if (type !== 'like' && type !== 'dislike') {
      return res.status(400).json({ error: 'type must be "like" or "dislike"' })
    }

    await container.items.create({
      page, type,
      options: options || [],
      comment: comment || '',
      createdAt: new Date().toISOString(),
    })

    res.json({ success: true })
  } catch (err) {
    console.error('Submit error:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// --- GET /api/feedback/summary ---
app.get('/api/feedback/summary', async (req, res) => {
  try {
    const { period } = req.query

    // Build date filter
    let dateFilter = ''
    if (period === '7d') {
      dateFilter = \`AND c.createdAt >= "\${new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()}"\`
    } else if (period === '30d') {
      dateFilter = \`AND c.createdAt >= "\${new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()}"\`
    }

    const { resources: docs } = await container.items
      .query(\`SELECT * FROM c WHERE 1=1 \${dateFilter} ORDER BY c.createdAt DESC\`)
      .fetchAll()

    const likes = docs.filter(d => d.type === 'like').length
    const dislikes = docs.filter(d => d.type === 'dislike').length
    const total = docs.length
    const satisfactionRate = total > 0 ? (likes / total) * 100 : 0

    const pageMap = new Map()
    for (const doc of docs) {
      const entry = pageMap.get(doc.page) || { page: doc.page, likes: 0, dislikes: 0, total: 0 }
      entry[doc.type === 'like' ? 'likes' : 'dislikes']++
      entry.total++
      pageMap.set(doc.page, entry)
    }
    const byPage = Array.from(pageMap.values()).map(p => ({
      ...p,
      satisfactionRate: p.total > 0 ? (p.likes / p.total) * 100 : 0,
    }))

    const optionMap = new Map()
    for (const doc of docs) {
      for (const opt of doc.options || []) {
        const key = \`\${opt}:\${doc.type}\`
        const entry = optionMap.get(key) || { option: opt, count: 0, type: doc.type }
        entry.count++
        optionMap.set(key, entry)
      }
    }
    const byOption = Array.from(optionMap.values())

    const recentEntries = docs.slice(0, 100).map(d => ({
      id: d.id,
      page: d.page,
      type: d.type,
      options: d.options || [],
      comment: d.comment || '',
      createdAt: d.createdAt,
    }))

    res.json({ totals: { total, likes, dislikes, satisfactionRate }, byPage, byOption, recentEntries })
  } catch (err) {
    console.error('Summary error:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.listen(port, () => console.log(\`Feedback API running on port \${port}\`))
`,
  },

  postgresql: {
    label: 'PostgreSQL',
    dependencies: { express: '^4.21.0', cors: '^2.8.5', pg: '^8.13.0' },
    envVars: [
      { key: 'DATABASE_URL', value: 'postgresql://user:password@localhost:5432/trellis', description: 'PostgreSQL connection string' },
      { key: 'PORT', value: '3002', description: 'Server port (default: 3002)' },
    ],
    schemaSQL: `CREATE TABLE feedback (
  id SERIAL PRIMARY KEY,
  page TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('like', 'dislike')),
  options TEXT[] DEFAULT '{}',
  comment TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
`,
    serverCode: () => `const express = require('express')
const cors = require('cors')
const { Pool } = require('pg')

const app = express()
const port = process.env.PORT || 3002

app.use(express.json())
app.use(cors({
  origin: ['http://localhost:3000', 'https://docs.example.com'],
}))

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

// --- POST /api/feedback/submit ---
app.post('/api/feedback/submit', async (req, res) => {
  try {
    const { page, type, options, comment } = req.body

    if (!page || !type) {
      return res.status(400).json({ error: 'Missing required fields: page, type' })
    }
    if (type !== 'like' && type !== 'dislike') {
      return res.status(400).json({ error: 'type must be "like" or "dislike"' })
    }

    await pool.query(
      'INSERT INTO feedback (page, type, options, comment) VALUES ($1, $2, $3, $4)',
      [page, type, options || [], comment || '']
    )

    res.json({ success: true })
  } catch (err) {
    console.error('Submit error:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// --- GET /api/feedback/summary ---
app.get('/api/feedback/summary', async (req, res) => {
  try {
    const { period } = req.query

    let dateClause = ''
    const params = []
    if (period === '7d') {
      dateClause = "WHERE created_at >= NOW() - INTERVAL '7 days'"
    } else if (period === '30d') {
      dateClause = "WHERE created_at >= NOW() - INTERVAL '30 days'"
    }

    const { rows: docs } = await pool.query(
      \`SELECT id, page, type, options, comment, created_at FROM feedback \${dateClause} ORDER BY created_at DESC\`,
      params
    )

    const likes = docs.filter(d => d.type === 'like').length
    const dislikes = docs.filter(d => d.type === 'dislike').length
    const total = docs.length
    const satisfactionRate = total > 0 ? (likes / total) * 100 : 0

    const pageMap = new Map()
    for (const doc of docs) {
      const entry = pageMap.get(doc.page) || { page: doc.page, likes: 0, dislikes: 0, total: 0 }
      entry[doc.type === 'like' ? 'likes' : 'dislikes']++
      entry.total++
      pageMap.set(doc.page, entry)
    }
    const byPage = Array.from(pageMap.values()).map(p => ({
      ...p,
      satisfactionRate: p.total > 0 ? (p.likes / p.total) * 100 : 0,
    }))

    const optionMap = new Map()
    for (const doc of docs) {
      for (const opt of doc.options || []) {
        const key = \`\${opt}:\${doc.type}\`
        const entry = optionMap.get(key) || { option: opt, count: 0, type: doc.type }
        entry.count++
        optionMap.set(key, entry)
      }
    }
    const byOption = Array.from(optionMap.values())

    const recentEntries = docs.slice(0, 100).map(d => ({
      id: d.id.toString(),
      page: d.page,
      type: d.type,
      options: d.options || [],
      comment: d.comment || '',
      createdAt: d.created_at.toISOString(),
    }))

    res.json({ totals: { total, likes, dislikes, satisfactionRate }, byPage, byOption, recentEntries })
  } catch (err) {
    console.error('Summary error:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.listen(port, () => console.log(\`Feedback API running on port \${port}\`))
`,
  },

  firebase: {
    label: 'Firebase Firestore',
    dependencies: { express: '^4.21.0', cors: '^2.8.5', 'firebase-admin': '^13.0.0' },
    envVars: [
      { key: 'FIREBASE_CREDENTIALS', value: '{"type":"service_account",...}', description: 'Full JSON contents of your Firebase service account key file' },
      { key: 'PORT', value: '3002', description: 'Server port (default: 3002)' },
    ],
    serverCode: () => `const express = require('express')
const cors = require('cors')
const { initializeApp, cert } = require('firebase-admin/app')
const { getFirestore, Timestamp } = require('firebase-admin/firestore')

const app = express()
const port = process.env.PORT || 3002

app.use(express.json())
app.use(cors({
  origin: ['http://localhost:3000', 'https://docs.example.com'],
}))

initializeApp({ credential: cert(JSON.parse(process.env.FIREBASE_CREDENTIALS)) })
const db = getFirestore()
const feedbackRef = db.collection('feedback')

// --- POST /api/feedback/submit ---
app.post('/api/feedback/submit', async (req, res) => {
  try {
    const { page, type, options, comment } = req.body

    if (!page || !type) {
      return res.status(400).json({ error: 'Missing required fields: page, type' })
    }
    if (type !== 'like' && type !== 'dislike') {
      return res.status(400).json({ error: 'type must be "like" or "dislike"' })
    }

    await feedbackRef.add({
      page, type,
      options: options || [],
      comment: comment || '',
      createdAt: Timestamp.now(),
    })

    res.json({ success: true })
  } catch (err) {
    console.error('Submit error:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// --- GET /api/feedback/summary ---
app.get('/api/feedback/summary', async (req, res) => {
  try {
    const { period } = req.query

    let query = feedbackRef.orderBy('createdAt', 'desc')
    if (period === '7d') {
      query = query.where('createdAt', '>=', Timestamp.fromDate(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)))
    } else if (period === '30d') {
      query = query.where('createdAt', '>=', Timestamp.fromDate(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)))
    }

    const snapshot = await query.get()
    const docs = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))

    const likes = docs.filter(d => d.type === 'like').length
    const dislikes = docs.filter(d => d.type === 'dislike').length
    const total = docs.length
    const satisfactionRate = total > 0 ? (likes / total) * 100 : 0

    const pageMap = new Map()
    for (const doc of docs) {
      const entry = pageMap.get(doc.page) || { page: doc.page, likes: 0, dislikes: 0, total: 0 }
      entry[doc.type === 'like' ? 'likes' : 'dislikes']++
      entry.total++
      pageMap.set(doc.page, entry)
    }
    const byPage = Array.from(pageMap.values()).map(p => ({
      ...p,
      satisfactionRate: p.total > 0 ? (p.likes / p.total) * 100 : 0,
    }))

    const optionMap = new Map()
    for (const doc of docs) {
      for (const opt of doc.options || []) {
        const key = \`\${opt}:\${doc.type}\`
        const entry = optionMap.get(key) || { option: opt, count: 0, type: doc.type }
        entry.count++
        optionMap.set(key, entry)
      }
    }
    const byOption = Array.from(optionMap.values())

    const recentEntries = docs.slice(0, 100).map(d => ({
      id: d.id,
      page: d.page,
      type: d.type,
      options: d.options || [],
      comment: d.comment || '',
      createdAt: d.createdAt.toDate().toISOString(),
    }))

    res.json({ totals: { total, likes, dislikes, satisfactionRate }, byPage, byOption, recentEntries })
  } catch (err) {
    console.error('Summary error:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.listen(port, () => console.log(\`Feedback API running on port \${port}\`))
`,
  },
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function buildPackageJson(db) {
  return JSON.stringify({
    name: 'trellis-feedback-api',
    version: '1.0.0',
    private: true,
    scripts: {
      start: 'node server.js',
    },
    dependencies: db.dependencies,
  }, null, 2) + '\n'
}

function buildEnvExample(db) {
  const lines = ['# Feedback API environment variables', '# Copy this file to .env and fill in your values', '']
  for (const v of db.envVars) {
    lines.push(`# ${v.description}`)
    lines.push(`${v.key}=${v.value}`)
    lines.push('')
  }
  return lines.join('\n')
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const dbArg = process.argv[2]

if (!dbArg || !VALID_DBS.includes(dbArg)) {
  console.error('Usage: node scripts/setup-feedback-api.js <database>')
  console.error('')
  console.error('Databases:')
  console.error('  mongodb      MongoDB (via mongodb driver)')
  console.error('  cosmos       Azure Cosmos DB (via @azure/cosmos, native SQL API)')
  console.error('  postgresql   PostgreSQL (via pg driver)')
  console.error('  firebase     Firebase Firestore (via firebase-admin)')
  console.error('')
  console.error('Example:')
  console.error('  node scripts/setup-feedback-api.js mongodb')
  console.error('  node scripts/setup-feedback-api.js cosmos')
  process.exit(1)
}

const db = DATABASES[dbArg]

// Overwrite protection
if (fs.existsSync(API_DIR)) {
  console.error(`Error: api/ directory already exists at ${API_DIR}`)
  console.error('Remove it first if you want to re-scaffold.')
  process.exit(1)
}

// Create api/ and write files
fs.mkdirSync(API_DIR, { recursive: true })

fs.writeFileSync(path.join(API_DIR, 'server.js'), db.serverCode())
fs.writeFileSync(path.join(API_DIR, 'package.json'), buildPackageJson(db))
fs.writeFileSync(path.join(API_DIR, '.env.example'), buildEnvExample(db))

const created = [
  '  api/server.js        Express server with both feedback endpoints',
  '  api/package.json      Dependencies: ' + Object.keys(db.dependencies).join(', '),
  '  api/.env.example      Required environment variables',
]

// PostgreSQL: write schema.sql
if (db.schemaSQL) {
  fs.writeFileSync(path.join(API_DIR, 'schema.sql'), db.schemaSQL)
  created.push('  api/schema.sql        CREATE TABLE statement for the feedback table')
}

// Success output
console.log('')
console.log(`Feedback API scaffolded with ${db.label}.`)
console.log('')
console.log('Created:')
for (const line of created) {
  console.log(line)
}
console.log('')
console.log('Next steps:')
console.log('')
console.log('  cd api')
console.log('  npm install')
console.log('  cp .env.example .env        # then edit .env with your values')
console.log('  node server.js              # starts on port 3002')
console.log('')
console.log('Your docs site (npm run dev) will connect to http://localhost:3002 automatically.')

if (db.schemaSQL) {
  console.log('')
  console.log('Note: Run the SQL in api/schema.sql against your database before starting the server.')
}

console.log('')
