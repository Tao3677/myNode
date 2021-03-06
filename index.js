const fs = require("fs");
const path = require('path');

// 获取一个目录中的所有子目录以及文件
class File {
    constructor(filename, name, ext, isFile, size, createTime, updateTime) {
        this.filename = filename;
        this.name = name;
        this.ext = ext;
        this.isFile = isFile;
        this.size = size;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }

    async getContent(isBuffer = false) {
        if(!this.isFile) return null;
        if(isBuffer) {
            return await fs.promises.readFile(this.filename);
        }else {
            return await fs.promises.readFile(this.filename, 'utf-8');
        }
    }

    async getChildren() {
        // 如果是文件的话，就不会有子目录
        if(this.isFile) return [];
        let children = await fs.promises.readdir(this.filename);
        children = children.map(item => {
            const pathResult = path.resolve(this.filename, item);
            return File.getFile(pathResult)
        })
        return Promise.all(children);
    }

    static async getFile(filename) {
        const stat = await fs.promises.stat(filename);
        const name = path.basename(filename);
        const ext = path.extname(filename);
        const isFile = stat.isFile();
        const size = stat.size;
        const createTime = stat.brithtime;
        const updateTime = stat.ctime;
        return new File(filename, name, ext, isFile, size, createTime, updateTime)
    }
}

async function readDir(dirname) {
    const file = await File.getFile(dirname);
    return await file.getChildren()
}

async function test() {
    const dirname = path.resolve(__dirname, "./myfiles");
    const result = await readDir(dirname);
    const datas = await result[2].getChildren();
    const textContent = await result[0].getContent();
    console.log(textContent);
    console.log(datas);
  }

test();