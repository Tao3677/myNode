// 绝对路径
require('C:\\Tao\\other\\mine\\Node\\Tao\\myNode\\a.js')

// 相对路径
const result = require('./ab');
console.log(result);

// 加载模块
require('abc') // node_modules/abc/index.js

// src/index.js  index.js可以省略
// 如果仅提供目录，不提供文件名，则自动寻找该目录中的index.js  

/**
 * 加载顺序
 * ./src
 * ./src.js
 * ./src.json
 * ./src.node
 * ./src.mjs
 * ./src/index.js
 */
require('./src')

// 也可以设置package.json中main的字段  package.json中的main字段
// src/test.js
require('./src')



