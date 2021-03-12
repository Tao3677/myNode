const fs = require('fs');
const path = require('path');
const filename = path.resolve(__dirname, './abc.txt');
const rs = fs.createReadStream(filename, {
    encoding: 'utf-8',      // 编码格式
    highWaterMark: 2,       // 每次读取最多字节
    autoClose: true,        // 读取完成之后是否默认关闭(默认关闭)
});
rs.on('open', () => {
    console.log('文件被打开了');
})
rs.on('error', () => {
    // 修改文件路径就会导致出错
    console.log('出错了');
})
rs.on('data', chunk => {
    console.log(chunk, '拿到的只是部分数据');
    rs.pause();     // 暂停
})
rs.on('pause', () => {
    console.log('暂停读取数据');
    setTimeout(() => {
        rs.resume();    // 继续
    }, 1000)
})
rs.on('resume', () => {
    console.log('恢复读取');
})
rs.on('end', () => {
    console.log('所有文件读取完毕');
})
rs.on('close', () => {
    console.log('文件关闭了');
})




