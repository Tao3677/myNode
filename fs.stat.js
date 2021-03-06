const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname, './myfiles/2.txt');

// 读取文件活目录详细信息
async function test() {
    const result = await fs.promises.stat(filename);
    console.log(result);
    // Stats {
    //     dev: 2855334019,      
    //     mode: 33206,
    //     nlink: 1,
    //     uid: 0,
    //     gid: 0,
    //     rdev: 0,
    //     blksize: 4096,        
    //     ino: 3096224744559652,
    //     size: 30,                            // 文件大小-占用字节
    //     blocks: 0,
    //     atimeMs: 1614782308440.7942,
    //     mtimeMs: 1614782308334.3003,
    //     ctimeMs: 1614782308334.3003,
    //     birthtimeMs: 1614782097483.9016,
    //     atime: 2021-03-03T14:38:28.441Z,     // 上次访问的时间
    //     mtime: 2021-03-03T14:38:28.334Z,     // 上次文件被访问的时间
    //     ctime: 2021-03-03T14:38:28.334Z,     // 上次文件状态被修改的时间
    //     birthtime: 2021-03-03T14:34:57.484Z  // 文件创建时间
    //   }
    console.log(result.isDirectory(), '是否为文件夹目录');
    console.log(result.isFile(), '是否为文件');
}
test()