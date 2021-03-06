const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname, './myfiles/aaa/abc/index1.js');

// 判断目录是否存在，如无目录，重新创建

async function exists() {
    try {
        await fs.promises.stat(filename);
        return true;
    }catch(error) {
        if(error.code === 'ENOENT') {
            return false;
        }
        throw(error)
    }
}

async function test() {
    const result = await exists();
    if(result) {
        console.log('目录/文件存在,无需操作');
    }else {
        await fs.promises.mkdir(filename)
        console.log('目录/文件创建成功');
    }
}

test()
