var mysql = require('mysql');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'liux1228',
    database: 'people'
});

connection.connect();

var sql = 'select * from worker';
var create_table = "CREATE DATABASE class";
var sql_insert = "insert into worker(name,age,salary,sex) values (?,?,?,?)";
var values = ['biter',26,100000,'female'];
connection.query(sql_insert,values,function (err, result) {
    if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------INSERT----------------------------');
    //console.log('INSERT ID:',result.insertId);
    console.log('INSERT ID:',result);
    console.log('-----------------------------------------------------------------\n\n');
});