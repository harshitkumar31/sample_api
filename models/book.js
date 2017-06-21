var db=require('../configure/index');

var Book={
 
 getBooksByCategory:function(title,callback){
	return db.query("select * from Books where category=?",[title],callback);
 },
 addBook:function(Book,callback){
 return db.query("Insert into Books (Title, category, author, year, edition, color, num_pages, img_link) values(?,?,?,?,?,?,?,?)",[Book.Title,
	 															Book.category, 
	 															Book.author, 
	 															Book.year,
	 															Book.edition, 
	 															Book.color,
	 															Book.num_pages, 
	 															Book.img_link],callback);
 },
 deleteBook:function(id,callback){
  return db.query("delete from Books where id=?",[id],callback);
 },
 updateBook:function(id,Book,callback){
 return db.query("update Books set Title=?, category=?, author=?, year=?, edition=?, color=?, num_pages=?, img_link=? where id=?",[Book.Title,
	 															Book.category, 
	 															Book.author, 
	 															Book.year,
	 															Book.edition, 
	 															Book.color,
	 															Book.num_pages, 
	 															Book.img_link,
	 															id],callback);
 },
 
};
 module.exports=Book;