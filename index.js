// 复制文件
const path = require('path');
const fs = require('fs');

// pipe方式
async function method2() {
    const origin = path.resolve(__dirname, './myfiles/test10M.txt');
    const target = path.resolve(__dirname, './myfiles/test10M.copy.txt');
    console.time('方式3');
    const rs = fs.createReadStream(origin);
    const ws = fs.createWriteStream(target);
    rs.pipe(ws);
    rs.on('close', () => {
        ws.end();
        console.timeEnd('方式3')
    })
}
method2();
