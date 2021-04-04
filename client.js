const http = require('http');
const request = http.request(
    'http://yuanjin.tech:5005/api/movie',
    {
        method: 'GET'
    },
    resp => {
        // resp 为 IncomingMessage 对象
        console.log('服务器响应状态码：', resp.statusCode);
        console.log('服务器响应头：', resp.headers)
        console.log('服务器响应头-content-type：', resp.headers['content-type'])
        resp.on('data', chunk => {
            console.log(JSON.parse(chunk.toString('utf-8')));
        })
        resp.on('end', chunk => {
            console.log('end');
        })
    }
)
// 返回来的 request 是 ClientRequest对象
request.end();
