const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
  host: 'mysql',
  user: 'dev',
  password: 'dev',
  database: 'to_do_list'
});

// 以上は設定だからいじらない事を推奨する

app.get('/', (req, res) => {
  res.render('index.ejs', {title: 'ToDoList'});
});

app.listen(3000);
