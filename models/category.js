var db=require('../config/index');

var Category={
 
getAllCategories:function(callback){
return db.query("Select * from Categories",callback);
},
 getCategoryByTitle:function(title,callback){
	return db.query("select * from Categories where title=?",[title],callback);
 },
 addCategory:function(Category,callback){
 return db.query("Insert into Categories values(?)",[Category.Title],callback);
 },
 deleteCategory:function(Title,callback){
  return db.query("delete from Categories where title=?",[Title],callback);
 },
 updateCategory:function(title,Category,callback){
  return db.query("update Categories set title=? where title=?",[Category.Title,title],callback);
 }
 
};
 module.exports=Category;