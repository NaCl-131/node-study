const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1317819306',
    database: 'test'
});

//在连接对象上调用connect()方法连接到MySQL数据库服务器：
//connect()方法接受一个具有err参数的回调函数，如果发生任何错误，它将提供详细的错误。
connection.connect((err) => {
    if (err) console.log('[ err ] >', err);
    console.log('成功连接数据库', )
});

// 要正常关闭数据库连接，请在connection对象上调用end()方法。
connection.end((err) => {
    if (err) {
        console.log('error:' + err.message);
    }
    console.log('已关闭数据库');
});