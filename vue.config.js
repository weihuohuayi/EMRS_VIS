// 配置文件：对src目录下的文件夹配置别名，方便调用
// 使用module.exports，会将这里的配置和公共配置进行合并
module.exports = {
  configureWebpack: {
    resolve: {
      // resolve配置路径相关
      // extensions: ['.js', '.vue', '.json'],
      // extensions配置，使得一些文件的后缀别名可以不用写了
      alias: {
        // 'vue$': 'vue/dist/vue.esm.js',
        // '@': 'src',  这个内部已经配置过！
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        // 'router': '@/router',  一般不需要，项目里只引用一次，在所有文件里也可以用this.$router拿到对象
        // 'store': '@/store',     一般不需要，在所有文件里也可以用this.$store拿到对象
        'views': '@/views',
      }
    }
  }
}