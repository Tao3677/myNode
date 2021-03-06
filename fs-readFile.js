const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname, './myfiles/1.txt');
fs.readFile(filename, 'utf-8', (err, content) => {
    // console.log(content);
})
// 会阻塞后面的程序
// const content = fs.readFileSync(filename, 'utf-8');
// console.log(content);
// console.log('file read success !!');

// fs.promises 异步返回promise
const content1 = fs.promises.readFile(filename, 'utf-8');
async function readFileContent() {
    const contents = await content1;
    console.log(contents);
}
readFileContent();
console.log('我会先执行，不会受异步读取文件的影响');
