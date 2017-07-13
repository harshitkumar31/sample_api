var model = require('../models/Book').init()

exports.get = (req, res) => {
	console.log(req.params)
	if(req.params.category == 'all')
		model.get_all((err, data) => res.json(err || data))
	else {
		model.get(req.params.isbn, req.params.category, (err, data) => res.json(err || data))
	}
}
exports.put = (req, res) => {
	data = {}
	data.category = req.params.category
	data.isbn = req.params.isbn
	data.title = req.body.title
	data.year = parseInt(req.body.year)
	data.author = req.body.author
	data.edition = parseInt(req.body.edition)
	data.color = req.body.color
	data.num_pages = parseInt(req.body.num_pages)
	data.img_link = req.body.img_link
	model.update_or_create(data, (err, data) => res.json(err || data))
}
exports.delete = (req, res) => {
	model.delete(req.params.isbn, req.params.category, (err, data) => res.json(err || data))
}