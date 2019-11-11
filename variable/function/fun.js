function sum(a, b) {
    return a + b;
}

var add = sum;
console.log(add(3,8));
add = 9;
console.log(add);