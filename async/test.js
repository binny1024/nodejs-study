function test(callback) {
    callback("异步调试");
}

var implement = function (value) {
    console.log("value = "+value);
};
test(implement);