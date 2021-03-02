// this 和 exports 指向相同

// function require(modulePath) {
//     // 1.将 modulePath 转换为绝对路径  C:\Tao\other\mine\Node\Tao\myNode\myModule.js
    
//     // 2.判断是否该模块已经缓存，如果有缓存的话返回缓存结果
//     // if(require.cache('C:\Tao\other\mine\Node\Tao\myNode\myModule.js')) {
//     //      return require.cache('C:\Tao\other\mine\Node\Tao\myNode\myModule.js').result;
//     // }
    
//     // 3.读取文件内容

//     // 4.包裹到一个函数中
//     function _temp(module, exports, require, __dirname, __filename) {
//         // myModule.js中的内容
//         // console.log('当前模块路径', __dirname);
//         // console.log('当前模块文件', __filename);
//         // exports.a = 'a'
//         // // module.exports = {
//         // //     // b: 'b'
//         // //     c: 'cc'
//         // // }
//         // module.exports.d = 'dd'
//         // this.m = 'mmm'
//         // console.log(this, 'this');
//         // console.log(exports, 'exports');
//         // console.log(this === exports, this === module.exports);
//     }

//     // 5.创建module对象
//     module.exports = {};
//     const exports = module.exports;
//     _temp.call(module.exports, module, exports, require, module.path, module.filename )
//     return module.exports
// }





const result = require('./myModule');
console.log(result);