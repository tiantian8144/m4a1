var express = require('express');
var router = express.Router();
//post请求
router.post('/user', function(req, res) {
  const count = req.body.count;
  let listData = [];
  for (let i = 0; i < count; i++) {
    listData.push({
      src: '',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      title: `Title Jiang ${i}`,
      description:'Rise n’ shine and don’t forget to smile',
      star: i * 2,
      like: i * 3
    });
  }
  let data = {};
  data.listData = listData;
  data.count = count;
  // res.end(JSON.stringify(data));
  res.send(JSON.stringify(data));
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
