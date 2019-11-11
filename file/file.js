const fs = require("fs");//获取文件系统对象
var path = "test";
var file_encoding = "utf8";
/**
 * 同步读取文件
 * @type {string} 文件内容
 */
let buffer = fs.readFileSync(path, file_encoding);
console.log("同步读取问文件内容:\n" + buffer);
/**
 * 第一个参数:文件路径
 * 第二个参数:文件编码
 * 第三个参数:回调函数
 *
 */
fs.readFile(path, file_encoding, function (error, data) {
    console.log("error:" + (error === null) ? "读取成功!" : error);
    console.log("异步读取数据:" + data);
});
console.log("异步读取文件内容");

var path_write = "w_test";
/**
 * 第一个参数为写入文件的路径或文件描述符；
 *
 * 第二个参数为写入的数据，类型为 String 或 Buffer；
 *
 * 第三个参数为 options，默认值为 null，
 * 其中有 encoding（编码，默认为 utf8）、 flag（标识位，默认为 w）和 mode（权限位，默认为 0o666），
 * 也可直接传入 encoding。
 *
 */
if (fs.existsSync(path_write)) {
    console.log("file exists");
} else {
    fs.writeFileSync(path_write, '同步写入数据', file_encoding);
    let s = fs.readFileSync(path_write, file_encoding);
    console.log("读取写入的文件内容;" + s);
}

path_write = "w_test_async";
var content = ["异步写入数据", "三生三世"];

fs.writeFile(path_write, content, function (error) {
    if (!error) {
        console.log("文件写入成功!");
        let buffer1 = fs.readFileSync(path_write);
        console.log("异步写入读取 : " + buffer1);
    }
});
console.log("异步写入正在执行");