const fs = require('fs');
fs.readFile('./myfiles/aaa/abc/index.js', () => {
    setTimeout(()=> {
        console.log('setTimeout');
    }, 0)
    setImmediate(() => {
        console.log('setImmediate');
    })
})

// 感觉是 setImmediate 比 setTimeout 先出来