const util = require('util');

// async function delay(duration = 1000) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(duration)
//         }, duration)
//     })
// }
// const delayCallback = util.callbackify(delay);
// delayCallback(500, (err, d) => {
//     console.log(d);
// })

function delayCallback(duration, callback) {
    setTimeout(() => {
        callback(null, duration)
    }, duration)
}
const delay = util.promisify(delayCallback);
(async () => {
    const r = await delay(500);
    console.log(r);
})()




// const obj1 = {
//     a: 1,
//     b: {
//       c: 3,
//       d: {
//         e: 5
//       }
//     }
//   };
  
//   const obj2 = {
//     a: 1,
//     b: {
//       c: 3,
//       d: {
//         e: 5,
//         // g: 6
//       }
//     }
//   };
// 如果val1和val2之间严格相等，则返回true。否则,返回false。
// console.log(util.isDeepStrictEqual(obj1, obj2));