var db=require('../dbConnection/index');
console.log('db was',db);
var Category={
 
getAllCategories:function(callback){
return db.query("Select * from category",callback);
},
 getCategoryById:function(id,callback){
 try {
	return db.query("select * from category where Id=?",[id],callback);
	} catch(err){
	return {};
	}
 },
 addCategory:function(Category,callback){
 return db.query("Insert into category values(?,?)",[Category.Id,Category.Title],callback);
 },
 deleteCategory:function(id,callback){
  return db.query("delete from category where Id=?",[id],callback);
 },
 updateCategory:function(id,Category,callback){
  return db.query("update category set title=? where Id=?",[Category.Title,id],callback);
 }
 
};
 module.exports=Category;