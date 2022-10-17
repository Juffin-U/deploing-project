const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  base: '/Juffin-U.github.io./',
  publicPath: process.env.NODE_ENV === 'production'
      ? '/Juffin-U.github.io./'
      : '/',
  transpileDependencies: true
})
