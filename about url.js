const URL = require('url');
/**
    ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
    │                                              href                                              │
    ├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
    │ protocol │  │        auth         │          host          │           path            │ hash  │
    │          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
    │          │  │                     │    hostname     │ port │ pathname │     search     │       │
    │          │  │                     │                 │      │          ├─┬──────────────┤       │
    │          │  │                     │                 │      │          │ │    query     │       │
    "  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
    │          │  │          │          │    hostname     │ port │          │                │       │
    │          │  │          │          ├─────────────────┴──────┤          │                │       │
    │ protocol │  │ username │ password │          host          │          │                │       │
    ├──────────┴──┼──────────┴──────────┼────────────────────────┤          │                │       │
    │   origin    │                     │         origin         │ pathname │     search     │ hash  │
    ├─────────────┴─────────────────────┴────────────────────────┴──────────┴────────────────┴───────┤
    │                                              href                                              │
    └────────────────────────────────────────────────────────────────────────────────────────────────┘
 */
/**
 * {
        href: 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash',
        origin: 'https://sub.example.com:8080',
        protocol: 'https:',     // 协议
        username: 'user',       // 用户名
        password: 'pass',       // 密码
        host: 'sub.example.com:8080',       // 主机
        hostname: 'sub.example.com',        // 主机名
        port: '8080',                       // 端口
        pathname: '/p/a/t/h',               // 路径
        search: '?query=string',            // 搜索字段
        searchParams: URLSearchParams { 'query' => 'string' },
        hash: '#hash'
    }
 */
// const urlObj = new URL.URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
// const url = URL.parse('https://user:pass@sub.example.com:8080/p/a/t/h?a=1&b=2&c=3#hash'); // 会报错--
// console.log(urlObj);
// console.log(url);


// const url = new URL.URL("https://www.nodejs.org:80/a/b/c?t=3&u=5#abc");
// console.log(url);
// console.log(url.searchParams.has("a"));
// console.log(url.searchParams.has("t"));
// console.log(url.searchParams.get("t"));

const obj = {
    href: 'https://www.test.com:8082/a/c/d?search=123456abc7890&query=00#back',
    origin: 'https://www.test.com:8082',
    protocol: 'https',
    username: '',
    password: '',
    host: 'www.test.com:8082',
    hostname: 'www.test.com',
    port: '8082',
    pathname: '/a/c/d',
    search: '?search=123456abc7890&query=00',
    hash: '#back'
}
console.log(URL.format(obj)); // https://www.test.com:8082/a/c/d?search=123456abc7890&query=00#back


