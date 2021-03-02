const path = require('path');

// 返回路径的最后一部分(文件名)
// const basename = path.basename('a/b/c/d/e.js', '.js')
// console.log(basename); // e
// const basename = path.basename('a/b/c/d/e.js', '.html')
// console.log(basename); // e.js

// console.log(path.sep); // 系统路径分隔符  windows \\ POSIX /

// console.log(path.delimiter);  // 路径分隔符

// console.log(process.env.PATH.split(path.delimiter));    // 将公共变量中的path分割

const dir = path.dirname('a/b/c/c');    // 返回路径的目录名
console.log(dir);

const ext = path.extname('a/b/c/d.js'); // 文件名后缀
console.log(ext);

// 使用特定于平台的分隔符将所有给定的路径段连接在一起   拼接路径
const basePath = 'a/b/e/f';
const fullPath = path.join(basePath, '../', 'c/d.js');
console.log(fullPath);

// 感觉是规范路径
const nor = path.normalize('C://Tao/a/bb\c\d/e//f');
console.log(nor);

const rel = path.relative('/data/orandea/test/aaa', '/data/orandea/temp/a');
console.log(rel); // ..\..\temp\a

// 将一系列的路径解析成绝对路径
// __dirname 当前执行js的文件的绝对路径
const absPath = path.resolve(__dirname, 'a/b/c/d.js');
console.log(absPath);



