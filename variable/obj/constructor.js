/**
 * 工厂模式解决了重复实例化多个对象的问题，但没有解决对象识别的问题;
 * 但是工厂模式却无从识别对象的类型，因为全部都是Object，不像Date、Array等，
 * 对象的类型都是Object，因此出现了构造函数模式）。
 * @constructor
 */

function Constructor() {
    this.name = 'lolly';
    this.age = 13;
    this.height = 180;
    this.show = function () {
        console.log("age = " + this.age + "; name = " + this.name + "; height = " + this.height);
    };

}

module.exports = Constructor;