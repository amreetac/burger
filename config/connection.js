// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql = require('mysql');

// Edit this connection to make it work with JawsDB.
var source = {

    jawsDB: {
        port: 3306,
        host: 'gx97kbnhgjzh3efb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'w93igidhzk0ickaw',
        password: 'v3i668i9p5z0knbn',
        database: "l9r6djimr777seo1"

        // TODO: Add your JawsDB connection info here
    }
}


// TODO: connect your jawsDB connection witht he mysql connection.
var connection = mysql.createConnection(source.jawsDB); //enter connection here);



// Replace the connection code here with one to connect to you JawsDB connection.
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;