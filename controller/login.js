var express = require('express');
var router = express.Router();
router.post('/login', function(req, res) {
  const { userName, password, confirm } = req.body.params;
  let datas = {};
  req.getConnection(function(err, conn) {
    if (err) {
      throw err;
    } else {
      conn.query('SELECT * FROM user WHERE userName = ? and password = ?', [userName, password], function(err,result) {
        if (err) {
          throw err;
        } else {
          if(result.length === 0) {
            datas.code = 400;
            datas.message = "用户名或密码不对";
            res.json(datas);
          } else {
            datas.code = 200;
            datas.message = "登录成功";
            res.json(datas);
          }
        }
      });
    }
  });
});

module.exports = router;
