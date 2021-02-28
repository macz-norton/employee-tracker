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
        return connection.query("SELECT id, name as department FROM department");
    },
    // View all roles
    getRoles() {
        return connection.query("SELECT role.id, role.title, role.salary, department.name as department FROM role JOIN department ON role.department_id=department.id");
    },
    // View all employees
    getEmployees() {
        return connection.query("SELECT * FROM employee");
    },
    // Update employee roles
    updateEmployeeRole(results) {
        return connection.query("UPDATE employee SET ? WHERE ?",
        [
            {role_id: results.role_id},
            {id: results.id}
        ])
    }

    // Update employee managers
    // getEmployeesByManager() {
    //     return connection.query(
    //         "SELECT * FROM employee INNER JOIN GROUP BY manager_id");
    // },

    // Delete departments

    // Delete roles

    // Delete employees
    
    // View the total utilized budget of a department

}