//加载express
const express = require('express');

//1.创建一个app对象（类似于server的对象）
var app = express();

//注册路由（这里只能监听get方法和根目录）
app.get('/', function (req, res) {

    // res.json({"a":"b"});
    res.send("三生是是是三世");
});

//启动服务
app.listen(8080, function () {
    console.log('http://localhost:8080');
});
