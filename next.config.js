/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const withPWA = require('next-pwa')

module.exports = withPWA({
  dest: 'public',
  disable: !isProd,
})

