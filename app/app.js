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

app.get('/', (req, res) => {
  res.render('index.ejs');
});


app.listen(3000);
