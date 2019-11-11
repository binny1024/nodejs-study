function Constructor(n,a,h) {
    this.name = n;
    this.age = a;
    this.height = h;
    this.show = function () {
        console.log("age = " + this.age + "; name = " + this.name + "; height = " + this.height);
    };

}

module.exports = Constructor;