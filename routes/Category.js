var express = require('express');
var router = express.Router();
var category = require('../models/Category');

router.put('/:title', (req, res) => {
  category.create(req.params, (err, data) => {res.json(err || data)})
})

router.get('/(:cat)', (req ,res, next) => {
  res.json(req.params)
  if(req.params.cat)
    category.read(req.params.cat, (err, data) => {res.json(err || data)})
  else 
    category.readAll((err, data) => {res.json(err || data)})
})

router.delete('/:title|/?', (req ,res, next) => {
  category.delete(req.params.title, (err, data) => {res.json(err || data)})
})


module.exports = router;