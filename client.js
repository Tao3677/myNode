const net = require('net');
// 客户端
const socket = net.createConnection(
    {
        host: 'ke.qq.com',
        port: 80
    },
    () => {
        console.log('连接成功');
    }
)

/**
GET / HTTP/1.1          // 请求行
Host: duyi.ke.qq.com    // 请求头

                        // 换行之后的请求体
 */

socket.write(`GET / HTTP/1.1
Host: ke.qq.com
Connection: keep-alive


`)

socket.on('data', chunk => {
    console.log(chunk.toString('utf-8'))
    socket.end()
})

socket.on('close', () => {
    console.log('结束了~~')
})



