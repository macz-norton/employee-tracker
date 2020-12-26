const { SSL_OP_EPHEMERAL_RSA } = require("constants");
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
    console.log("Connected as id " + connection.threadId);
});

connection.query = util.promisify(connection.query);

connection.query("", function(err, res) {


})

connection.query("")
.then((res) => {

})
.catch(() => {
    
})

module.exports = connection;