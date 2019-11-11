/**
 * 使用系统函数获取相应的时间属性,然后格式化替换 format 中的字符
 * @param format 格式化字符串
 * @returns {string} 格式化时间
 */
Date.prototype.formatDate = function (format) {
    const o = {
        "M+": this.getMonth() + 1,//
        "d+": this.getDate(),
        "H+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        string: function (name) {
            console.log("当前时间:" + this["M+"] + this["d+"] + this["H+"] + this["m+"] + this["s+"]);
        }
    };
    //使用正则表达式
    console.log("format = " + format);
    if (/(y+)/.test(format)) {
        //RegExp.$1,存放了匹配字符串,如 yy ,将捕获组1 中的字符串替换为年份,然后按照,原始字符串的位数获取子串
        // console.log("RegExp.$1 = " + RegExp.$1);
        var len = RegExp.$1;//年份格式的长度
        var year = this.getFullYear() + "";//年份
        format = format.replace(RegExp.$1, year).substr(year.length - len);
        o.string("biter");
    }


    /**
     * 属性遍历
     */
    for (let k in o) {

        var re = new RegExp("(" + k + ")");
        // console.log("source = " + re.source);

        /**
         * 属性检查
         * in　　检测对象的自有属性和继承属性中是否有该属性。
         * 有则返回true， 否则返回false
         */
        if (re.test(format)) {
            var f = RegExp.$1;//格式化字符串中满足匹配模式的字符串,如 MM

            console.log("f = " + f);
            /**
             * 是否加前缀 0
             * 如果是两位数字,
             *
             */
            format = format.replace(f, (f.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    console.log("format = " + format);
    return format;
};

//字符串转日期格式，strDate要转为日期格式的字符串
Date.prototype.toDate = function getDate(strDate) {
    if (strDate === (strDate + "")) {
        strDate = parseInt(strDate, 10);
    }
    return new Date(strDate);
};
