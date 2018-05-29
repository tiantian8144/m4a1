var express = require('express');
var router = express.Router();
router.post('/registerUser', function(req, res) {
  const { userName, password, confirm } = req.body.params;
  let result = {};
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
                result.code = 200;
                result.message = "注册成功！";
                res.json(result);
              }
            });
          } else {
            result.code = 400;
            result.message = "该用户已注册过，请直接登录";
            res.json(result);
          }
        }
      });
    }
  });
});

module.exports = router;
