const fs = require('fs');
const path = require('path');
const filename = path.resolve(__dirname, './myfiles/test10M.txt');

const ws = fs.createWriteStream(filename, {
    encoding: 'utf-8',
    // highWaterMark: 3,  // 每次写入多少字节
    highWaterMark: 1024 * 20,  // 每次写入多少字节
})
// 写入10M的内容
// for (let i = 0; i < 1024 * 1024 * 10; i++) {
//     let flag = ws.write('a');
// }


// 只会输出3个b，因为highWaterMark设置了3个字节
// let i = 0;
// function write() {
//     let flag = true;
//     while(i < 1024 * 1024 * 10 && flag) {
//         console.log(i);
//         flag = ws.write('b');
//         i++;
//         console.log(flag);
//     }
//     console.log(flag);
// }

// write();



// 这种方式，不会占用内存，当每次队列为空时，再次写入设置好的字节数
let i = 0;
function write() {
    let flag = true;
    while(i < 1024 * 1024 * 10 && flag) {
        flag = ws.write('b');
        i++;
    }
}

write();
// 当队列为空时，触发drain事件
ws.on('drain', () => {
    console.log('可');
    write();
})




