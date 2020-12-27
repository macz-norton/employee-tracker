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
    insertRole(results) {
        return connection.query(
            "INSERT INTO roles SET ?", results);
    }
}
    // View all employees by department
    // SELECT * FROM employees GROUP BY departm

    // View all employees by manager
    // Add employee
        // What is the employee's first name?
        // What is the employee's last name?
        // What is the employee's role?
        // Who is the employee's manager?
    // Remove employee
        // Which employee do you want to remove?
    // Update employee role
        // Which employee do you want to update?
    // Update employee manager
        // Which employee's manager do you want to update?
    // View all departments
    // View total used budget of a department
        // Which department do you want to view?
    // Add department
        // What is the department's name?
    // Remove department
        // Which department do you want to remove?
    // View all roles
    // Add role
        // What is the role's title?
        // What is the role's salary?
        // In what department is the role?
    // Remove role
        // Which role do you want to remove?
    // Quit