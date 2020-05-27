var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/json', async function(req, res, next) {
  const url = 'http://' + process.env.ServiceName+ ':'+process.env.ServicePort+'/json1';
  console.log('req url ', url);
  try {
    let resp = await axios.get(url);
    console.log('resp.data', resp.data);
    return res.json({name:process.env.name, ServiceName: process.env.ServiceName, ServicePort: process.env.ServicePort, data: resp.data });
  } catch (e) {
    console.error('Error is: ',e);
    return res.json(url);
  }
});

router.get('/json1', async function(req, res, next) {  
    return res.json({name:process.env.name, ServiceName: process.env.ServiceName, ServicePort: process.env.ServicePort, data: resp.data });
});

module.exports = router;
