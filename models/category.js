var db=require('../dbConnection/index');

var Category={
 
getAllCategories:function(callback){
 
return db.query("Select * from category",callback);
 
},
 getCategoryById:function(id,callback){
 
return db.query("select * from category where Id=?",[id],callback);
 },
 addCategory:function(category,callback){
 return db.query("Insert into category values(?,?,?)",[Category.Id,Category.Title,Category.Status],callback);
 },
 deleteCategory:function(id,callback){
  return db.query("delete from category where Id=?",[id],callback);
 },
 updateCategory:function(id,category,callback){
  return db.query("update category set Title=?,Status=? where Id=?",[Category.Title,Category.Status,id],callback);
 }
 
};
 module.exports=Category;