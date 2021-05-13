var express = require('express');
var router = express.Router();
var db = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {tasks: "Didn't catch a request."});
});

module.exports = router;
