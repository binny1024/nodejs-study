// //基本数据类型
// var variable = require("./variable/variable.js");
// variable.show_age();
//
// //单个对象
// var person = require("./obj/obj");
// console.log(person.age);
// person.age = 18;
// console.log(person.age);
//
// //通过函数创建多个对象,解决个数问题
// var ani = require("./obj/fun-obj");
// var a = ani();
// a.show();

//通过构造函数,解决具体类型的问题
var construct_obj = require("./variable/obj/constructor");
var c_obj = new construct_obj();
c_obj.name = "biter";
c_obj.age = 20;
c_obj.height = 200;
c_obj.show();
var c_obj2 = new construct_obj();
c_obj2.name = "biter";
c_obj2.age = 26;
c_obj2.height = 130;
c_obj2.show();
