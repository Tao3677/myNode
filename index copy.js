const start = Date.now();
setTimeout(function f1() {
    // 时间不会是200毫秒，反而是多于200毫秒的，
    // 因为timer队列过了之后会到poll队列进行文件读取
    console.log('setTimeout', Date.now() - start);
}, 200)
setImmediate(function f3() {
    console.log('setImmediate');
})
const fs = require('fs');
fs.readFile('./myfiles/aaa/abc/index.js', 'utf-8', function f2() {
    console.log('readFile');
    const start = Date.now();
    while(Date.now() - start < 300) {}
})


// 会先执行f3,然后f2,然后f1
