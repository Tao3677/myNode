console.log('当前模块路径', __dirname);
console.log('当前模块文件', __filename);
exports.a = 'a'
exports = {
    e: 'ee'
}
module.exports = {
    // b: 'b'
    c: 'cc'
}
module.exports.d = 'dd'
this.m = 'mmm'
console.log(this, 'this');
console.log(exports, 'exports');
console.log(this === exports, this === module.exports);