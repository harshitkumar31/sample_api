class Category {
	constructor(db) {
		this.db = db
	}
	readAll(cb) {
		this.db.query('SELECT * FROM Categories', cb)
	}
	read(title, cb) {
		console.log("do")
		this.db.query("SELECT * FROM Categories WHERE title=?", [title], cb)
	}
	create(data, cb) {
		console.log(data.title)
		return this.db.query('INSERT INTO Categories VALUES(?)', [data.title], cb);
	}
	delete(data, cb) {
		return this.db.query('DELETE FROM Categories WHERE title=?', [data.title], cb);
	}
}

module.exports = function(db=null) {
	db = db || require('../dbConnection/index')
	return new Category(db)
}