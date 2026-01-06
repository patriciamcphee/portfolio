// scripts/build-tokens.js
const fs = require('fs');
const path = require('path');

// Read your design tokens JSON
const tokens = require('../design-tokens.json');

// Function to convert nested JSON to CSS variables
function jsonToCss(obj, prefix = '--') {
  let css = '';
  
  for (const [key, value] of Object.entries(obj)) {
    const varName = prefix + key.replace(/([A-Z])/g, '-$1').toLowerCase();
    
    if (typeof value === 'object' && !Array.isArray(value)) {
      css += jsonToCss(value, varName + '-');
    } else {
      css += `  ${varName}: ${value};\n`;
    }
  }
  
  return css;
}

// Generate CSS
const cssContent = `:root {\n${jsonToCss(tokens)}}\n`;

// Write to custom.css or a separate tokens.css file
fs.writeFileSync(
  path.join(__dirname, '../src/css/tokens.css'),
  cssContent
);

console.log('✅ Design tokens converted to CSS');