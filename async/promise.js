function doing(value) {
    return new Promise(function (resolve, reject) {
        try {
            console.log(value);
            resolve(value);//
            // resolve();//
        } catch (e) {
            // throw new Error("dddd");
            reject(value);
        }
    });
}

function do_something_wrong(value) {
    return new Promise(function (resolve, reject) {
        try {
            console.log(value + "级业务");
            // ass();
            // reject("业务逻辑异常");
            resolve(value);//
            // resolve();//
        } catch (e) {
            // throw new Error("dddd");
            reject(value);
        }
    });
}

function promise() {
    let promise = new Promise(function (resolve, reject) {
        try {
            console.log("一级业务");
            ass();
            console.log("处理具体业务，异常代码之后");
            resolve(1);//
        } catch (e) {
            // throw new Error("dddd");
            reject(2);
        }
    }).then(function (value) {
        doing("二级业务");
    }, function (error) {
        do_something_wrong("二级业务----处理一级异常");
    }).then(function (value) {
        doing("三级业务");
    }, function (value) {
        do_something_wrong("三级业务----处理一级异常");
    }).then(function (value) {
        doing("四级业务");
    }, function (value) {
        do_something_wrong("四级业务----处理一级异常");
    }).then(function (value) {
        doing("五级业务");
    }, function (value) {
        do_something_wrong("五级业务----处理一级异常");
    }).then(function (value) {
        doing("六级业务");
    }, function (value) {
        do_something_wrong("六级业务----处理一级异常");
    });
    return promise;
}

promise();
