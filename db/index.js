const connection = require("./connection");

module.exports = {

    getEmployees() {
        return connection.query("SELECT * FROM employee");
    },
    getEmployeesByDepartment() {
        return connection.query(
            "SELECT * FROM employee INNER JOIN GROUP BY department_id");
    },
    getDepartments() {
        return connection.query("SELECT * FROM department");
    },

    getRoles() {
        return connection.query("SELECT * FROM role");
    },
    insertDepartment(results) {
        return connection.query(
            "INSERT INTO department SET ?", results
        );
    },
    insertRole(results) {
        return connection.query(
            "INSERT INTO roles SET ?", results
        );
    }
}