const fs = require('fs');
const path = require('path');
const filename = path.resolve(__dirname, './myfiles/testWrite.txt');

const ws = fs.createWriteStream(filename, {
    encoding: 'utf-8',
    highWaterMark: 3,  // 每次写入多少字节
})
// const flag = ws.write('一');  中文占四个字节
let flag = ws.write('a');   // 返回值代表着下次还能不能直接写入，注意背压问题
/**
 * flag 如果是true的话，代表写入通道还没有被填满，接下来的数据可以直接写入，无须排队
 * flag 如果是false的话，代表写入通道已经被填满，接下来的数据将进入写入队列
 * 
 * 
 * 写入队列是内存中的数据，是有限的
 * 
 * 
 */
console.log(flag);
flag = ws.write('a');
console.log(flag);
flag = ws.write('1');
console.log(flag);
flag = ws.write('2');
console.log(flag);
flag = ws.write('aa');
console.log(flag);
flag = ws.write('aa');
console.log(flag);





