/**
 * 字符串
 字符串需要完成初始化和定义的功能，同时需要完成以下基本操作
 获取字符串的长度
 字符串截取，从第几个字符开始截取的第几个
 在字符串中寻找特定格式字符串第一次出现的位置
 */
//1.字符串的定义
var str = "an  artist of the period ";
//2.输出字符串的长度
console.log("str.length = " + str.length);
//3. 字符串截取 [2,5)
console.log(str + " 的 第3 个到第5个 " + str.slice(2, 5));//slice();左闭右开区间,索引基于 0
//4.在字符串中寻找特定格式字符串第一次出现的位置,采用正则匹配.
// var pattern = /ti/gim;
var pattern = /ti/g;
str = "an artast artist of the period artist";
var matches = pattern.exec(str);
console.log("字符串ti第1次出现的位置 = " + matches.index);//index 属性表明匹配项在原始字符串中的位置

matches = pattern.exec(str);
console.log("字符串ti第2次出现的位置 = " + matches.index);//index 属性表明匹配项在原始字符串中的位置



