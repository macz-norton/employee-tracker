const connection = require("./connection");

module.exports = {

    // Add departments
    insertDepartment(results) {
        return connection.query(
            "INSERT INTO department SET ?", results
        );
    },
    // Add roles
    insertRole(results) {
        return connection.query(
            "INSERT INTO role SET ?", results
        );
    },
    // Add employees
    insertEmployee(results) {
        return connection.query(
            "INSERT INTO employee SET ?", results
        );
    },
    // View all departments
    getDepartments() {
        return connection.query("SELECT * FROM department");
    },
    // View all roles
    getRoles() {
        return connection.query("SELECT * FROM role");
    },
    // View all employees
    getEmployees() {
        return connection.query("SELECT * FROM employee");
    },
    // Update employee roles
    updateEmployeeRole() {
        return connection.query("UPDATE employee SET ? WHERE ?",
        [
            {role_id: },
        ])
    }

    // Update employee managers
    getEmployeesByManager() {
        return connection.query(
            "SELECT * FROM employee INNER JOIN GROUP BY manager_id");
    },

    // Delete departments

    // Delete roles

    // Delete employees
    
    // View the total utilized budget of a department

}