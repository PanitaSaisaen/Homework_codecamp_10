const mysql = require('mysql2/promise');

// const conPromise = mysql.createConnection({
//     host: 'localhost',
//     user: 'root', // mysql username
//     password: '123456789', // mysql password
//     database: 'todolist' // database name
// });

// conPromise
//     .then(con => {
//         console.log('connect successfully')
// return con.query(`create table users (
//     id int auto_increment, 
//     username varchar(255) not null,
//     primary key (id)
// )`);
// return con.query(`insert into users (username) value ('john'), ('pop'), ('jack')`)
// return con.query(`update users set username = 'peter' where id = 4`)
// return con.query(`delete from users where id = 4`)
//     return con.query(`select * from users`)
// }).then(result => {console.log(result)})
// select result is [rows, field]
// insert update delete is [resultHeader]
// .catch(con => console.log(err.message));  

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'todolist'
});
//return value is not Promise จึงให้ .then ไม่ได้แต่ใช้ query ได้เลย
//เมื่อ query แล้ว มันจะ return ค่าเป็น promise
pool.query(`select * from users`).then(result => {
    console.log(result)
})