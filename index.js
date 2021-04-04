const OSS = require('ali-oss');
let oss = new OSS({
    bucket: 'wwkankan',
    // region以杭州为例（oss-cn-hangzhou），其他region按实际情况填写。
    region: 'oss-cn-chengdu.aliyuncs.com',
    // 阿里云主账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM账号进行API访问或日常运维，请登录RAM控制台创建RAM账号。
    accessKeyId: 'Gt5QLza8eF5ixRV2smAf1wvAbVjKhoKXQzgyMe1oDJWi',
    accessKeySecret: 'STS.NV48NReNNXEn2SxanYRx39Q1X',
});
console.log(oss)