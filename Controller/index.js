var express = require('express');
var router = express.Router();
//入口请求
router.get('/', function(req, res, next) {
  console.log('1');
  res.render('index', { title: 'Express' });
});

router.get('/testMysql',function(req, res, next) {
	req.getConnection(function(err, conn) {
    if (err) {
      return next(err);
    } else {
      conn.query('select * from user', [], function(err,result) {
        if (err) {
          return next(err);
        } else {
          res.json(result); //可以直接把结果集转化Json返回给客户端
        }
      });
    }
  });
});
module.exports = router;
