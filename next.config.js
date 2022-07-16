const withSvgr = require('@newhighsco/next-plugin-svgr')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withSvgr({
  ...nextConfig,
  svgrOptions: {
    typescript: true,
    dimensions: false,
    svgo: false
  }
})
