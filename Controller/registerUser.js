var express = require('express');
var router = express.Router();
//post请求
router.post('/registerUser', function(req, res) {
  // res.send(JSON.stringify(data));
  const { userName, password, confirm } = req.body.params;
  req.getConnection(function(err, conn) {
    if (err) {
      throw err;
    } else {
      conn.query('SELECT * FROM user WHERE userName = ?', [userName], function(err,result) {
        if (err) {
          throw err;
        } else {
          if(result.length === 0) {
            conn.query('INSERT INTO user(userName, password, confirm) VALUES(?, ?, ?)', [userName, password, confirm], function(err,result) {
              if (err) {
                throw err;
              } else {
                res.json(result);
              }
            });
          } else {
            let result = {};
            result.code = 200;
            result.message = "该用户已注册过，请直接登录";
            res.json(result);
          }
        }
      });
    }
  });
});

module.exports = router;
