module.exports = {
  //runtimeCompiler: true,
  chainWebpack: config => {        // 修复HMR
    config.resolve.symlinks(true)
  }
  // devServer: {
  //   disableHostCheck: true
  // }
}