const express = require('express');
const app = express();
const mysql = require('mysql');

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

app.get('/', (req, res) => {
  res.send('<h1>Full Cycle Rocks!</h1>')
});

app.listen(3000, () => {
  const connection = mysql.createConnection(config);
  // connection.connect(function (err) {
  //   if (err) throw err; {
  //     console.log('Successfully connected to MySQL container');
  //   }
  // })

  console.log('Server is up and running');
});


