// 复制文件
const path = require('path');
const fs = require('fs');

// 方式1
// async function method1() {
//     const origin = path.resolve(__dirname, './myfiles/test10M.txt');
//     const target = path.resolve(__dirname, './myfiles/test10M.copy.txt');
//     console.time('方式1');
//     const content = await fs.promises.readFile(origin);
//     await fs.promises.writeFile(target, content);
//     console.timeEnd('方式1');
// }
// method1();

// 方式2
async function method2() {
    const origin = path.resolve(__dirname, './myfiles/test10M.txt');
    const target = path.resolve(__dirname, './myfiles/test10M.copy.txt');
    console.time('方式2');
    const rs = fs.createReadStream(origin);
    const ws = fs.createWriteStream(target);
    rs.on('data', chunk => {
        const flag = ws.write(chunk);
        if(!flag) {
            rs.pause();
        }
    })
    ws.on('drain', () => {
        rs.resume();
    })
    rs.on('close', () => {
        ws.end();
        console.timeEnd('方式2')
    })
}
method2();
