

// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost', // Replace with your MySQL host
    user: 'root', // Replace with your MySQL username
    password: 'Omishu1129@', // Replace with your MySQL password
    database: 'oncourse_ai' // Replace with your MySQL database name
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
});

module.exports = connection;
