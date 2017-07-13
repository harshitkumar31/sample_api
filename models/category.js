class Category {
	constructor(db) {
		this.db = db
	}
	getAll(cb) {
		this.db.query('SELECT * FROM Categories', cb)
	}
	get(title, cb) {
		this.db.query("SELECT * FROM Categories WHERE title=?", [title], (err, data) => {console.log(data); cb(err, data[0])})
	}
	create(data, cb) {
		return this.db.query('INSERT INTO Categories VALUES(?)', [data.title], cb);
	}
	delete(title, cb) {
		return this.db.query('DELETE FROM Categories WHERE title=?', [title], cb);
	}
}

exports.init = function(db=null) {
	db = db || require('../connections/db')
	return new Category(db)
}

