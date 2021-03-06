const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname, './myfiles/');

// 获取路径下的文件以及子目录
async function test() {
    const result = await fs.promises.readdir(filename);
    console.log(result);
}
test()