class Book {
	constructor(db) {
		this.db = db
		this.all = 'all'
	}
	get(isbn, cb) { 
		this.db.query('SELECT * FROM Books WHERE isbn=? AND category=?', [isbn, category], cb)
	}
	get_all(cb) {
		this.db.query('SELECT * FROM Books', cb)
	}
	get_by_category(category, cb) {
		this.db.query('SELECT * FROM Books WHERE category=?', [category], cb)
	}
	get_by_isbn_and_category(isbn, cb) { 
		this.db.query('SELECT * FROM Books WHERE isbn=? AND category=?', [isbn, category], cb)
	}
	create(data, cb) {
		return this.db.query('INSERT INTO Books (isbn, title, category, author, year, edition, color, num_pages, img_link) VALUES(? ,? ,? ,? ,? ,? ,? ,?)', 
						[data.isbn, data.title, data.category, data.author, data.year, data.edition, data.color, data.num_pages, data.img_link],
						cb)
			
	}
	update_or_create(data, cb) {
		return this.db.query('REPLACE INTO Books (isbn, title, category, author, year, edition, color, num_pages, img_link) ' + 
						'VALUES(? ,? ,? ,? ,? ,? ,? ,?, ?)', [data.isbn, data.title, data.category, data.author, data.year, data.edition, data.color, data.num_pages, data.img_link],
						cb)
	}
	delete(isbn, cb) {
		return this.db.query('DELETE FROM Books WHERE isbn=?', [isbn, category], cb);
	}
	delete_by_isbn_and_category(isbn, category, cb) {
		return this.db.query('DELETE FROM Books WHERE isbn=? AND category=?', [isbn, category], cb);
	}
}

exports.init = function(db=null) {
	db = db || require('../connections/db')
	return new Book(db)
}

/*
REPLACE INTO Books (isbn, title, category, author, year, edition, color, num_pages, img_link) VALUES(1, 'H', 'yo', 'a', 2010, 2, 'red', 200, 'none');
<<<<<<< HEAD
var express = require('express');
var router = express.Router();
var db = require('../dbConnection/index');
var category = require('../models/Category');

router.put('/:cat|/:cat/', (req, res) => {
  category.create(req.params, (err, data) => {res.json(err || data)})
})

router.get('/:cat/:book', (req ,res, next) => {
  if(req.params.title)
    category.read(req.params.title, (err, data) => {res.json(err || data)})
  else 
    category.readAll((err, data) => {res.json(err || data)})
})

router.delete('/:title|/?', (req ,res, next) => {
  category.delete(req.params.title, (err, data) => {res.json(err || data)})
})


module.exports = router;
=======
var db=require('../config/index');

var Book={

	getBooksById:function(id,callback){
		return db.query("select * from Books where id=?",[id],callback);
	},
	getAllBooks:function(callback){
		return db.query("select * from Books", callback);
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
>>>>>>> master

*/
