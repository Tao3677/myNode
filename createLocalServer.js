const http = require('http');
const URL = require('url');
const path = require('path');
const fs = require('fs');

async function getStat(filename) {
    try {
        return await fs.promises.stat(filename) 
    }catch(err) {
        console.log(err)
        return null;
    }
}

async function getFileContent(url) {
    const urlObj = URL.parse(url)
    let filePath = path.resolve(__dirname, 'public', urlObj.pathname.substr(1));
    let stat = await getStat(filePath);
    if(!stat) {
        // 文件不存在
        return null
    }else if(stat.isDirectory()) {
        // 考虑是文件夹的情况
        filePath = path.resolve(__dirname, 'public', urlObj.pathname.substr(1), 'index.html');
        stat = await getStat(filePath)
        if(stat) {
            return await fs.promises.readFile(filePath)
        }else {
            return null
        }
    }else {
        return await fs.promises.readFile(filePath)
    }
}

async function handler(req, res) {
    const info = await getFileContent(req.url)
    if(info) {
        res.statusCode = 200;  // 状态码要在write前面
        res.write(info);
    }else {
        res.statusCode = 404;  // 状态码要在write前面
        res.write('not found');
    }
    res.end();
}

const server = http.createServer(handler)
server.listen('88')

