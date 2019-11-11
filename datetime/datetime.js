// var date = new Date();
// // 年
// console.log("年 = " + date.getFullYear());
// console.log("年 = " + date.getUTCFullYear());
// //月
// console.log("月 = " + date.getMonth());
// console.log("月 = " + date.getUTCMonth());
// //日
// console.log("日 = " + date.getDay());
// console.log("日 = " + date.getUTCDay());
// //时
// console.log("时 = " + date.getHours());
// console.log("时 = " + date.getUTCHours());
// //分
// console.log("分 = " + date.getMinutes());
// console.log("分 = " + date.getUTCMinutes());
// //秒
// console.log("秒 = " + date.getSeconds());
// console.log("秒 = " + date.getUTCSeconds());
// console.log("系统时间 = " + date.toLocaleDateString());
// console.log("系统时间 = " + date.toLocaleString());
// console.log("系统时间 = " + date.toLocaleTimeString());


 require("./utils/date_utils");

var dt = new Date();
// console.log(dt.format('yyyy/MM/dd HH:mm:ss'));
// console.log(dt.format('yyy/MM/dd HH:mm:ss'));
// console.log(dt.formatDate('yy/MM/dd HH:mm:ss'));
// console.log(dt.formatDate('/MM/dd HH:mm:ss'));
console.log(dt.toDate("1573103146000"));
