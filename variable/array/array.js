/**
 定义一个数组，遍历该数组
 在数组的开头、结尾或者指定位置添加元素
 删除数组中某个具体位置的元素
 */

var arr = ['red', 'green', 'blue'];
console.log("原数组原数组 : " + arr);//输出形式还是一个数组
// console.log(arr.valueOf());//输出形式还是一个数组
// console.log(arr.toString());//输出以逗号间隔的数组中相应索引的值
//1.在数组的开头添加元素
arr.unshift('header');
console.log("开头添加元素 : " + arr);
//2.结尾添加元素
arr.push("tail");
console.log("结尾添加元素 : " + arr);
//3.指定位置添加元素
arr[10] = '33';
console.log("指定点添加元素 : " + arr);
//4.移除数字开头的元素
arr.shift();
console.log(arr);
console.log("===================\n");
/**
 * 5.移除指定位置的元素
 *
 * @param array 原始数组
 * @param index 要移除的位置的元数据,位置基于 0
 */
var rm_pos_element = function (array, index) {

    // console.log("原数组原数组 : " + array);
    // console.log("原数组原数组长 : " + array.length);
    if (!Array.isArray(array)) {
        console.log("请输入一个数组!");
        return
    }
    if (Number.isNaN(index)) {
        console.log("请输入一个 >0 的整数!");
        return
    }
    if (index < 0) {
        console.log("请输入一个 >0 的整数!");
        return
    }
    if (index === 0) {
        array.shift();
        console.log("移除首元素" + array);
        return;
    }
    if (index > array.length - 1) {
        console.log("array = " + array);
        return
    }
    array.push("");//避免数组越界,好像 js 没有数组越界的说法
    // console.log("原数组原数组长 : " + array.length);
    var index_element = array.slice(index, index + 1);
    // console.log("index = " + index + " : " + index_element);
    var s1 = array.slice(0, index);
    var s2 = array.slice(index + 1, array.length);
    // console.log("s1 = " + s1);
    // console.log("s2 = " + s2);
    s1 = s1.concat(s2);
    console.log("s1 = " + s1);

};
//移除指定位置的元素,从输出日志可以看出来,这里的对象传递的按引用传递的,直接改变原始对象的数据
var a = ['0', '1', '2', '3', '4', '5', '6'];
console.log("原始数组" + a);
rm_pos_element(a, 0);//移除索引为 0 的元素
// a = ['0', '1', '2', '3', '4', '5', '6'];
rm_pos_element(a, 5);//移除索引为 5 的元素
// a = ['0', '1', '2', '3', '4', '5', '6'];
rm_pos_element(a, 8);//移除索引为 8 的元素
// a = ['0', '1', '2', '3', '4', '5', '6'];
rm_pos_element(a, -2);//移除索引为 -20 的元素

//
// var values = [0, 6, 5, 10, 15];
// values.sort(function (a, b) {
//     return a - b;
// });
// console.log(values);
//遍历数组
var a1 = [1, 2, 3, 4, 5];
/**
 * 判断
 *
 * 遍历数组,判断是否完全大于指定数
 * @param array
 * @param num
 */
var traverse_array_every_gt = function (array, num) {
    if (Array.isArray(array)) {
        return array.every(function (item) {
            return (item > num);
        });
    }
};

console.log("traverse_array_every_gt = " + traverse_array_every_gt(a1, 3));
console.log("traverse_array_every_gt = " + traverse_array_every_gt(a1, 1));
console.log("traverse_array_every_gt = " + traverse_array_every_gt(a1, 0));
/**
 * 是否有满足条件的语句
 * 判断
 * @param array
 * @param num
 * @returns {boolean}
 */
var traverse_array_some_gt = function (array, num) {
    if (Array.isArray(array)) {
        return array.some(function (item) {
            return (item > num);
        });
    }
};
console.log("traverse_array_some_gt = " + traverse_array_some_gt(a1, 3));
console.log("traverse_array_some_gt = " + traverse_array_some_gt(a1, 1));
console.log("traverse_array_some_gt = " + traverse_array_some_gt(a1, 0));
console.log("traverse_array_some_gt = " + traverse_array_some_gt(a1, 10));

/**
 * forEach,单纯的遍历,可以用于变换等
 * 业务逻辑自己定义,将每一个元素都乘以 2
 *
 *
 * @param array
 */
var a_temp = [];//用于接受 变换后的数组

var traverse_array_for_each = function (array) {
    if (Array.isArray(array)) {
        array.forEach(function (item, index) {
            console.log(item + " * 2 = " + item * 2 + " index = " + index);
            a_temp[index] = item * 2;//分别给元素赋值
        });
    }
};
traverse_array_for_each(a1);
console.log("traverse_array_for_each = " + a1);
console.log("traverse_array_for_each = " + a_temp);
/**
 * filter 数组过滤器,计算,返回新的数组
 *
 * @param array
 */
var traverse_array_filter = function (array) {
    if (Array.isArray(array)) {
        a_temp = array.filter(function (item) {
            return item > 2;
        });
    }
};
traverse_array_filter(a1);
console.log("traverse_array_filter : " + a_temp);
/**
 * 类似于 for-each,但是 map有自己返回值,返回一个新数组
 * @param array
 */
var traverse_array_map = function (array) {
    if (Array.isArray(array)) {
        a_temp = array.map(function (item) {
            return item * 5;
        });
    }
};
console.log("a1 : " + a1);
traverse_array_map(a1);
console.log("traverse_array_map : " + a_temp);