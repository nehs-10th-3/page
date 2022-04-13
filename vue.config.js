const { defineConfig } = require('@vue/cli-service')
const publicPath = process.env.NODE_ENV === 'production' ? '/page/' : '/'

module.exports = defineConfig({
  publicPath,
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
  }
})
