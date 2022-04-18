module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/tovyversion2/" : "/",
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    disableHostCheck: true
  }
}
