'use client'

import { useState } from 'react'
import { Navbar } from '@/components/docs/navbar'
import { Sidebar } from '@/components/docs/sidebar'
import { Footer } from '@/components/docs/footer'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1" style={{ marginTop: 'var(--navbar-height)' }}>
        <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}
