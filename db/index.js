const connection = require("./connection");

module.exports = {

    getDepartments() {
        return connection.query("SELECT * FROM departments");
    },

    getRoles() {
        return connection.query("SELECT * FROM roles");
    },
    
    getEmployees() {
        return connection.query("SELECT * FROM employees");
    },
    insertRole() {
        return connection.query("INSERT INTO role VALUES ?,
        [title, salary, department_id],
        )
    }
}