const connection = require("./connection");

module.exports = {

    getEmployees() {
        return connection.query("SELECT * FROM employees");
    },
    getEmployeesByDepartment() {
        return connection.query(
            "SELECT * FROM employees INNER JOINGROUP BY department_id");
    },
    getDepartments() {
        return connection.query("SELECT * FROM departments");
    },

    getRoles() {
        return connection.query("SELECT * FROM roles");
    },
    insertDepartment(results) {
        return connection.query(
            "INSERT INTO departments SET ?", results
        );
    },
    insertRole(results) {
        return connection.query(
            "INSERT INTO roles SET ?", results
        );
    }
}