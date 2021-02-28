const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "2g7pXzH&oA5S",
    database:  "employeeDB"
});

connection.connect((err) => {
    if (err) throw err;
});

connection.query = util.promisify(connection.query);

module.exports = connection;