const connection = require("./connection");
const SQL = require("sql-template-strings");

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
        return connection.query("SELECT id, name AS department FROM department");
    },
    // View all roles
    getRoles() {
        return connection.query(SQL
            `SELECT role.id, role.title, role.salary, department.name AS department
            FROM role
            LEFT JOIN department ON role.department_id=department.id`);
    },
    // View all employees
    getEmployees() {
        return connection.query(SQL
            `SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department, CONCAT(manager.first_name, ' ', manager.last_name) as manager
            FROM employee
            LEFT JOIN role ON employee.role_id=role.id
            LEFT JOIN department ON role.department_id=department.id
            LEFT JOIN employee manager ON employee.manager_id=manager.id;`);
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