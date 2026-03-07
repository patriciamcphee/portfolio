/**
 * Variables available in all MDX files via the `vars` object.
 *
 * Usage in MDX:
 *   Welcome to {vars.productName} version {vars.version}.
 *
 * Add any key/value pairs here — they are passed to every page
 * through the MDXRemote `scope` prop at build time.
 */
export const docVariables: Record<string, string> = {
  productName: 'Trellis',
  companyName: "Pixl'n Grid",
  version: '1.0.0',
  frameworkName: 'Next.js',
}
