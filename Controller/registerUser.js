var express = require('express');
var router = express.Router();
//post请求
router.post('/registerUser', function(req, res) {
  
  res.send(JSON.stringify(data));
});

module.exports = router;
