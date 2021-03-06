const fs = require('fs');
const path = require('path');

// 写入的文件
const filename = path.resolve(__dirname, './myfiles/2.txt');

async function test() {
    const buffer = Buffer.from('the text');
    const result = await fs.promises.writeFile(filename, buffer);
    // 再次追加内容
    console.log(result);
    console.log('导入成功');
    await fs.promises.writeFile(filename, '\n这是追加的内容', {
        flag: 'a'
    })
    console.log('追加成功');
}

test()
