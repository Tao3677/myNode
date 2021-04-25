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

    // 写入数据
    socket.on('data', chunk => {
        console.log(chunk.toString('utf-8'), 'chunk')
        socket.write(`HTTP/1.1 200 OK
Content-Type: text/plain

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>你好！</h1>
</body>
</html>       
        `)
        socket.end();
    })
//     socket.on('data', async chunk => {
//         // 数据
//         const filename = path.resolve(__dirname, './myfiles/test.jpg');
//         const bodyBuffer = await fs.promises.readFile(filename);
//         const headeBuffer = Buffer.from(`HTTP/1.1 200 OK
// Content-Type: image/jpeg

// `,
//         'utf-8')
//         const result = Buffer.concat([headeBuffer, bodyBuffer])
//         socket.write(result)
//         socket.end();
//     })
    socket.on('end', () => {
        console.log('连接关闭了');
    })
})








