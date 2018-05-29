var express = require('express');
var router = express.Router();
router.post('/register', function(req, res) {
  const { userName, password, confirm } = req.body.params;
  let datas = {};
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
                datas.code = 200;
                datas.message = "注册成功！";
                res.json(datas);
              }
            });
          } else {
            datas.code = 400;
            datas.message = "该用户已注册过，请直接登录";
            res.json(datas);
          }
        }
      });
    }
  });
});

module.exports = router;
