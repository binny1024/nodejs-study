var a = [];
var map = new Map();
map.set("name", "biter");
map.set("age", 18);

var showMap = function () {

    var len = map.size;
    console.log("len = " + len);
    /**
     * 使用 for ... of
     */
    for (var [key, value] of map) {
        console.log("key = " + key + ", value = " + value);
    }

    /**
     * 参数为一个函数对象,类似高阶函数,闭包
     */
    map.forEach(function (v, k, m) {
            console.log("k = " + k + ", v = " + v);
            m.set(k, "new data")
        }
    )
    map.forEach(function (v, k, m) {
            console.log("k = " + k + ", v = " + v);
            // m.set(k, "new data")
        }
    )

};
showMap();