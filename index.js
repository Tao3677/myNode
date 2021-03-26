// server端
const net = require('net');
const server = net.createServer();
const fs = require('fs');
const path = require('path');

// 服务器监听88端口
server.listen(88)

server.on('listening', () => {
    console.log('server listening 88');
})

server.on('connection', socket => {
    console.log('有客户端连接到了服务器');
    // 给客户端发送数据
    socket.on('data', async chunk => {
        // 数据
        const filename = path.resolve(__dirname, './myfiles/test.jpg');
        const bodyBuffer = await fs.promises.readFile(filename);
        const headeBuffer = Buffer.from(`HTTP/1.1 200 OK
Content-Type: image/jpeg

`,
        'utf-8')
        const result = Buffer.concat([headeBuffer, bodyBuffer])
        socket.write(result)
        socket.end();
    })
    socket.on('end', () => {
        console.log('连接关闭了');
    })
})








