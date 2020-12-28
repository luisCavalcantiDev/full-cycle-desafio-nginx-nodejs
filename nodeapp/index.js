const express = require('express');
const app = express();
const mysql = require('mysql');

const config = {
  host: 'nodeappdb',
  user: 'root',
  password: 'root',
  database: 'nodeappdb'
};

app.get('/', (req, res) => {
  res.send('<h1>Full Cycle Rocks!</h1>')
});

app.listen(3000, () => {
  //createDatabase();
  //createTable();

  console.log('Server is up and running');
});

function createTable() {
  const connection = mysql.createConnection(config);
  const sql = `create table people(id int not null auto_increment, name varchar(255), primary key(id));`;
  connection.query(sql);
  connection.end();
}

function createDatabase() {
  const connection = mysql.createConnection(config);
  const sql = `create database nodeappdb;`;
  connection.query(sql);
  connection.end();
}

