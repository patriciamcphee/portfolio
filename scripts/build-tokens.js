// scripts/build-tokens.js
const fs = require('fs');
const path = require('path');

const tokens = require('../design-tokens.json');

function extractTokens(obj, prefix = '') {
  const result = [];

  for (const [key, value] of Object.entries(obj)) {
    const name = prefix ? `${prefix}-${key}` : key;

    if (value && typeof value === 'object' && !Array.isArray(value)) {
      if ('value' in value && typeof value.value !== 'object') {
        result.push({ name, value: value.value });
      } else {
        result.push(...extractTokens(value, name));
      }
    }
  }

  return result;
}

const allTokens = extractTokens(tokens);

const lines = allTokens.map(({ name, value }) => {
  if (name.startsWith('neutral-')) return `  --color-${name}: ${value};`;
  if (name.startsWith('brand-')) return `  --color-${name}: ${value};`;
  if (name.startsWith('utility-')) return `  --color-${name}: ${value};`;
  if (name.startsWith('accent-')) return `  --color-${name}: ${value};`;
  if (name.startsWith('spacing-')) return `  --spacing-${name.replace('spacing-', '')}: ${value};`;
  if (name.startsWith('border-radius-')) return `  --radius-${name.replace('border-radius-border-radius-', '')}: ${value};`;
  if (name.startsWith('border-width-')) return `  --border-width-${name.replace('border-width-border-width-', '')}: ${value};`;
  if (name.startsWith('typography-')) return `  --font-sans: ${value};`;
  return `  --${name}: ${value};`;
});

const css = `/* Auto-generated from design-tokens.json — do not edit */
@theme {
${lines.join('\n')}
}
`;

const outPath = path.join(__dirname, '../app/tokens.css');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, css);

console.log('Design tokens converted to Tailwind v4 @theme CSS');
