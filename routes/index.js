var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/json', async function(req, res, next) {
  const url = 'http://' + process.env.ServiceName+ ':'+process.env.ServicePort+'/json';
  console.log('req url ', url);
  try {
    let resp = await axios.get(url);
    return res.json({ ServiceName: process.env.ServiceName, ServicePort: process.env.ServicePort, resp });
  } catch (e) {
    console.error('Error is: ',e);
    return res.json(url);
  }
});

module.exports = router;
