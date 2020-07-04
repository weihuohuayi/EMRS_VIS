// 配置文件：对src目录下的文件夹配置别名，方便调用
module.exports = {
  configureWebpack: {
    resolve: {
      // extensions: ['.js', '.vue', '.json'],
      alias: {
        // 'vue$': 'vue/dist/vue.esm.js',
        // '@': 'src',
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        // 'router': '@/router',
        // 'store': '@/store',
        'views': '@/views',
      }
    }
  }
}