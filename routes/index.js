var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/json', function(req, res, next) {
  res.json({data: [1,2,3,4,5]});
});

module.exports = router;
