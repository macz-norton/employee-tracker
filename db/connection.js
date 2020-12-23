const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "2g7pXzH&oA5S",
    database:  "employees"
});

connection.connect();

connection.query = util.promisify(connection.query);

connection.query("", function(err, res) {


})

connection.query("")
.then((res) => {

})
.catch(() => {
    
})

module.exports = connection;