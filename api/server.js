const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

const cors = require('cors');
app.use(cors());

const con = mysql.createConnection({
    host: "localhost",
    user: "root", // Sql username
    password: "****", // Sql Password
    database: "****" // Database 
});

con.connect(err => {
    if (err) throw err;
    console.log("Connected to MySQL database!");
});

app.use(bodyParser.json());

// Insert user operation
app.post('/users', (req,res)=>{
    const { name,age,phone_no,location }=req.body;
    const sql="INSERT INTO users (name,age,phone_no,location) VALUES (?,?,?,?)";
    con.query(sql,[name,age,phone_no,location],(err,result)=>{
        if (err) throw err;
        res.send("User inserted successfully");
    });
});

// Get All Data
app.get('/users',(req,res)=>{
    con.query('SELECT * FROM users',(err,result)=>{
        if (err) throw err;
        res.json(result);
    });
});

// Update user operation
app.put('/users/:id', (req, res) => {
    const id=req.params.id;
    const { name,age,phone_no,location }=req.body;
    const sql="UPDATE users SET name=?, age=?, phone_no=?, location=? WHERE Sno=?";
    con.query(sql,[name,age,phone_no,location,id], (err,result)=>{
        if (err) throw err;
        res.send("User updated successfully");
    });
});

// Delete all the Records
app.delete('/users', (req,res)=>{
    con.query('truncate table users',(err,result)=>{
        if (err) throw err;
        res.json(result);
    });
});

// Delete user Record
app.delete('/users/:id', (req,res)=>{
    const id=req.params.id;
    const sql="DELETE FROM users WHERE Sno=?";
    con.query(sql,[id],(err,result)=>{
        if (err) throw err;
        res.send("User deleted successfully");
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});