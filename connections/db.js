var mysql=require('mysql');

var connection = mysql.createPool( { host:'localhost',
									 user:'root',
									 port: 3306,
									 password:'root',
									 database:'mrnd_library' } )
 module.exports = connection;