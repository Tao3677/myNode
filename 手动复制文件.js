const fs = require("fs");
const path = require('path');
console.log(path.dirname(path.resolve(__dirname, './myfiles/test.jpg')));
// 手动复制文件
async function test() {
    const originFilePath = path.resolve(__dirname, './myfiles/test.jpg');
    const targetFilePath = path.resolve(__dirname, './myfiles/test.copy.jpg');
    const originBuffer = await fs.promises.readFile(originFilePath);
    await fs.promises.writeFile(targetFilePath, originBuffer);
    console.log('复制成功');
}
test()