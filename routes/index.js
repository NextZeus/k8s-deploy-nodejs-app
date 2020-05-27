var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/json', async function(req, res, next) {
  const url = 'http://' + process.env.ServiceName+ ':'+process.env.ServicePort+'/json';
  let resp = await axios.get(url);
  res.json({ ServiceName: process.env.ServiceName, ServicePort: process.env.ServicePort, resp });
});

module.exports = router;
