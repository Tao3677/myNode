setImmediate(() => {
    console.log('setImmediate');
})
setTimeout(() => {
    console.log('setTimeout');
}, 0)


// 不一定每次setImmediate都会在setTimeout前面