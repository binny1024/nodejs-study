
function Animal() {
    var ani = {};
    ani.name = 'lolly';
    ani.age = 13;
    ani.height = 180;
    ani.show = function () {
        console.log(this.age);
    };
    return ani;
}

module.exports = Animal;