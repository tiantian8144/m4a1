var express = require('express');
var router = express.Router();
//post请求
router.post('/home', function(req, res) {
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
  res.send(JSON.stringify(data));
});

module.exports = router;