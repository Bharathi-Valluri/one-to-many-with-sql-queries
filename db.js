const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432
})

client.connect(function (err) {
  if (err) throw err
  console.log('Connected!')

  var sqlQuery = `CREATE TABLE if not exists Company(C_id int not null,C_name varchar(255),PRIMARY KEY(C_id));
CREATE TABLE if not exists  Employee(E_id INT not null,name varchar(255) not null,position varchar(255) not null,wage int not null,

    primary key(E_id),C_id INT not null ,CONSTRAINT FK_Company_Employee FOREIGN KEY(C_id) REFERENCES Company(C_id) ON DELETE CASCADE ON UPDATE CASCADE)`

  client.query(sqlQuery)
  console.log('created!')
})

module.exports = { client }
