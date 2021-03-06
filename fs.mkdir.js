const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname, './myfiles/aaa');

// 创建目录，不是创建文件
async function test() {
    const result = await fs.promises.mkdir(filename);
    console.log('目录创建成功');
}

test()