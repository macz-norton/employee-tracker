const db = require("/.db");
const connection = require("./db/connection")

const inquirer = require("inquirer");

function askForAction() {

    inquirer
    .prompt({
        message: "What would you like to do?",
        name: "action",
        type: "list",
        choices: [
            "View all employees",
            "View all employees by department",
            "View all employees by manager",
            "Add employee",
            "Remove employee",
            "Update employee role",
            "Update employee manager",
            "View all departments",
            "View total used budget of a department",
            "Add department",
            "Remove department",
            "View all roles",
            "Add role",
            "Remove role",
            "Quit"
        ]
    })
    .then((res) => {

        switch(res.action) {

            case "View all employees":
                return;

            case "View all employees by department":
                return;

            case "View all employees by manager":
                return;

            case "Add employee":
                return;

            case "Remove employee":
                return;

            case "Update employee role":
                return;

            case "Update employee manager":
                return;
            
            case "View all departments":
                viewDepartments();
                return;

            case "View total used budget of a department":
                return;

            case "Add department":
                return;

            case "Remove department":
                return;

            case "View all roles":
                return;

            case "Add role":
                createRole();
                return;

            case "Remove role":
                return;

            default:
                connection.end();
        }
    })

}

function viewDepartments() {

    db
        .getDepartments()
        .then((results) => {
            console.table(results);
            askForAction();
        })

}

function createRole() {

    db
        .getDepartments()
        .then((departments) => {

            console.log(departments);

            const departmentChoices = departments.map((department) => ({
                value: department.id,
                label: department.name
            }))

        inquirer.prompt([
            {
                message:"What department is this role for?",
                type: "list",
                name: "department_id",
                choices: departmentChoices
            }
        ]).then(rest => {
            console.log(res);
        });

    })

}

askForAction();



// START
// What would you like to do?
    // View all employees
    // SELECT * FROM employees

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