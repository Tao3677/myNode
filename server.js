const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
    // req IncomingMessage
    // res ServerResponse
    handle(req)
    res.setHeader('c', 1212)
    res.setHeader('d', '3434')
    res.statusCode = 403;
    res.write('hello 你好！！')
    res.end();
});
function handle(req) {
    console.log('有请求来了')
    console.log('请求路径', req.url)
    const urlObj = url.parse(req.url);
    console.log('请求路径', urlObj)
    console.log('请求方法', req.method);
    console.log('请求头', req.headers);
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString('utf-8');
    })
    req.on('end', () => {
        console.log('请求体', body);
    })
}
// 返回的 server 是一个 Server对象
server.on('listening', () => {
    console.log('server listening 88');
})
server.on('connection', () => {
    console.log('有连接到服务器');
})
server.listen(88)