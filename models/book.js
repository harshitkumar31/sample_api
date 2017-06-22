var db=require('../config/index');

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
	searchBooks:function(query, callback){
		const fields = [];
		var values = [];
		var isArr = false;
		var inlist = '';
		var skip = null;
		var limit = null;
		if(query.skip){
			skip = query.skip;
			delete query.skip;
		}
		if(query.limit){
			limit = query.limit;
			delete query.limit;
		}

		console.log('query was',query);
		Object.keys(query).map((key)=> {
			fields.push(key);
			try{
				if(Array.isArray(JSON.parse(query[key]))){
					isArr = true;
					values = JSON.parse(query[key]);
					
					for(var i=0; i<values.length; i++) {
						inlist += '?,';
					}
					inlist = inlist.substring(0,inlist.length-1);
				} else {
					values.push(query[key]);
				}
			} catch (err){
				if(Array.isArray(query[key])){
					isArr = true;
					values = query[key];
					for(var i=0; i<values.length; i++) {
						inlist += '?,';
					}
					inlist = inlist.substring(0,inlist.length-1);
				} else {
					values.push(query[key]);
				}
			}
		});
		if(isArr){
			console.log('select * from books where '+ fields[0]+' IN ('+ inlist +')');
			if(skip!==null && limit!==null){
				return db.query('select * from books where '+ fields[0]+' IN ('+ inlist +')' + 'LIMIT ' + limit +' OFFSET ' + skip,values, callback);	
			}

			return db.query('select * from books where '+ fields[0]+' IN ('+ inlist +')',values, callback);	
		}
		if(skip!==null && limit!==null){
			return db.query('select * from books where ?? = ?'+ 'LIMIT ' + limit +' OFFSET ' + skip,[fields,values], callback);
		}
		return db.query('select * from books where ?? = ?',[fields,values], callback);


	}
};
module.exports=Book;