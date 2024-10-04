var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "muni2002",
    database: "reactnode"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql="CREATE TABLE IF NOT EXISTS users (Sno INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255),age INT,phone_no VARCHAR(25),location VARCHAR(25),created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});