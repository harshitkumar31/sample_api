var model = require('../models/Category').init()

exports.getAll = (req, res) => {
	model.getAll((err, data) => res.json(err || data))
}
exports.get = (req, res) => {
	model.get(req.params.category, (err, data) => res.json(err || data))
}
exports.put = (req, res) => {
	model.create({title: req.params.category}, (err, data) => res.json(err || data))
}
exports.delete = (req, res) => {
	model.delete(req.params.category, (err, data) => res.json(err || data))
}