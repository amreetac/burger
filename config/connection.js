//Connection to the database

var mysql = require('mysql');

console.log(conn2.password);


var connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'Smithsonian123',
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