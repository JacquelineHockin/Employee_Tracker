const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "WasItGoodOrWasItWell?143",
  database: "employees",
  port: 3306,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("conected!");
});

module.exports = connection;
