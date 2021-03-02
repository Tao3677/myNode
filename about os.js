const os = require('os');
// console.log(os.EOL);  // 换行符(不同系统)
// console.log(os.arch());  // 当前操作系统的位数
// console.log(os.cpus());  // 返回每个cup内核的具体信息
console.log(os.freemem() / 2 ** 30);  // 以整数形式返回可用系统内存量(以字节为单位) 2的10次方为1024 字节 -> KB -> MB -> GB
console.log(os.homedir());  // 当前用户的主目录的字符串路径
console.log(os.hostname()); // 计算机名
console.log(os.tmpdir());   // 以字符串形式返回操作系统临时文件的默认目录

