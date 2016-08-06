//Connection to the database

var mysql = require('mysql');
var conn2 = require('./connection2.js');

console.log(conn2.password);


var connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: conn2.password,
		database: 'burgers_db'
});

connection.connect(function (err){
		if (err) {
						console.error('error containing:' + err.stack);
						return;
		}
		console.log('connected as id' + connection.threadId);
});

module.exports = connection;