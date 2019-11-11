try {
    devide(2, 0);
} catch (e) {
    console.log("e:" + e);
}

console.log("异常捕获,并处理");
var devide = function (num1, num2) {
    return (num1 / num2);
};
try {
    let devide1 = devide(2, 0);
    console.log("devide1:" + devide1);
} catch (e) {
    console.log("e:" + e);
}
console.log("ssss");