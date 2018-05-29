var express = require('express');
var router = express.Router();
router.post('/updatePassword', function(req, res) {
  const { userName, password, confirm } = req.body.params;
  let datas = {};
  req.getConnection(function(err, conn) {
    if (err) {
      throw err;
    } else {
      conn.query('SELECT * FROM user WHERE userName = ?', [userName], function(err,result) {
        if(result.length === 0) {
          datas.code = 400;
          datas.message = "无此用户";
          res.json(datas);
        } else {
          conn.query('UPDATE user set password = ?, confirm = ? WHERE userName = ?', [password, confirm, userName], function(err,result) {
            if (err) {
              throw err;
            } else {
              datas.code = 200;
              datas.message = "修改成功！";
              res.json(datas);
            }
          });
        }
      });
    }
  });
});

module.exports = router;
