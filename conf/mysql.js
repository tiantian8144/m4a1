const express     = require('express');
const app = express();
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const mysqlConf = myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: 'xuya227939',
  port: 3306,
  database: 'shareimage'
}, 'single');

module.exports = mysqlConf;