// await 关键字后的函数
var Delay_Time = function(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, 1000)
    } )
};
// async 函数
var Delay_Print = async function(ms) {
    await Delay_Time(ms)
    return new Promise(function(resolve, reject) {
        resolve("End");
    })
};
// 执行async函数后
Delay_Print(1000).then(function(resolve) {
    console.log(resolve);
});