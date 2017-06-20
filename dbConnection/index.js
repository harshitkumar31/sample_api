var mysql=require('mysql');
 var connection=mysql.createPool({
 
host:'localhost',
 user:'root',
 'port': 3306,
 password:'root',
 database:'prod'
 
});
 module.exports=connection;