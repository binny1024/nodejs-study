var variableTest = {
    /**
     * 全局变量, 字符串,biter
     *
     * @type {string}
     */
    "name": "biter",
    /**
     * 全局常量,初始值为 man
     *
     * @type {string}
     */
    "sex": 'man', /**
     * 全局变量,初始值为 26
     *
     * @type {number}
     */
    age: 26,

    /**
     * 高度
     *
     * @type {number}
     */
    "height": 180,


// console.log("noddjs test");


    "add": function () {
        console.log("noddjs test" + age);
        this.age = 100;
    },

    /**
     * 输出年龄信息
     */
    "show_age": function () {
        console.log("年龄：" + this.age);
    },

    /**
     * 输出名字信息
     */
    "show_name": function () {
        console.log("名字：" + this.name);
        this.name = "binny";
    },

    /**
     * 输出高度信息
     */
    "show_height": function () {
        console.log("height = " + this.height);
        this.height = 190;
    },

    /**
     *
     * @param precision 精度
     */
    "round": function (num_var, precision) {
        num_var = num_var.toFixed(precision);
        console.log(num_var);
    },
    "split": function split(str, start, end) {
        console.log(str.slice(start, end));
    }

};

var sum = new Function("num1", "num2", "return num1 + num2");

module.exports = variableTest;