const path = require('path')
const resolve = (dir) => path.resolve(__dirname,dir)
module.exports = {
  webpack:{
    // 类型别名
    alias:{
      '@':resolve('src'),
      'components':resolve('src/components')
    }
  }
}