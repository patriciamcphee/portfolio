import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH || '',
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.PAGES_BASE_PATH || '',
  },
  trailingSlash: true,
  images: { unoptimized: true },
  webpack: (config) => {
    config.resolve.alias['@'] = resolve(__dirname)
    return config
  },
}

export default nextConfig
