/* eslint-disable @typescript-eslint/no-var-requires */
const withImages = require('next-images')
const withPWA = require('next-pwa')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withImages({
  esModule: true
})

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
