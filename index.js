const db = require("./db");
const connection = require("./db/connection")

const inquirer = require("inquirer");
const { insertRole } = require("./db");

function askForAction() {

    inquirer
    .prompt({
        message: "What would you like to do?",
        name: "action",
        type: "list",
        choices: [
            "Add department",
            "Add role",
            "Add employee",
            "View all departments",
            "View all roles",
            "View all employees",
            "Update employee role",
            "Update employee manager",
            "View all employees by manager",
            "Remove department",
            "Remove role",
            "Remove employee",
            "View total used budget of a department",
            "Quit"
        ]
    })
    .then((res) => {

        switch(res.action) {

            case "Add department":
                createDepartment();
                return;

            case "Add role":
                createRole();
                return;

            case "Add employee":
                createEmployee();
                return;

            case "View all departments":
                viewDepartments();
                return;
    
            case "View all roles":
                viewRoles();
                return;

            case "View all employees":
                viewEmployees();
                return;

            case "Update employee role":
                viewEmployeeRole();
                return;
    
            // case "Update employee manager":
            //     return;

            // case "View all employees by manager":
            //     return;

            // case "Remove department":
            //     return;

            // case "Remove role":
            //     return;
  
            // case "Remove employee":
            //     return;

            // case "View total used budget of a department":
            //     return;

            default:
                connection.end();
        }
    });
};

// Add departments
function createDepartment() {
    inquirer
    .prompt(
        {
            message: "What is the department name?",
            type: "input",
            name: "name"
        },
    ).then((results) => {
        console.log(results);

        db.insertDepartment(results);

        askForAction();
    });
    
}

// Add roles
function createRole() {

    db
        .getDepartments()
        .then((departments) => {
            // TODO Fix department_id mapping
            const departmentChoices = departments.map((department) => ({
                value: department.id,
                name: department.name
            }))

            inquirer
                .prompt([
                    {
                        message: "What is the role's title?",
                        type: "input",
                        name: "title"
                    },
                    {
                        message: "What is the role's salary?",
                        type: "input",
                        name: "salary",
                        validate: (salary => {
                            if (isNaN(salary) === false) {
                                return true;
                            }
                            return false;
                        })
                    },
                    {
                        message: "What department is this role for?",
                        type: "list",
                        name: "department_id",
                        choices: departmentChoices  
                    }
                ]).then((results) => {
                    const newRole = {
                        title: results.title,
                        salary: results.salary,
                        department_ID: results.department_id
                    }
                    console.log(newRole);
                    insertRole(newRole);
                    askForAction();

                });

        })

}

// Add employees
function createEmployee() {

}

// View all departments
function viewDepartments() {

    db
        .getDepartments()
        .then((departments) => {
            console.table(departments);
            askForAction();
        })

}

// View all roles
function viewRoles() {

    db
        .getRoles()
        .then((roles) => {
            console.table(roles);
            askForAction();
        })

}

// View all employees
function viewEmployees() {

    db
        .getEmployees()
        .then((employees) => {
            console.table(employees);
            askForAction();
        })

}

// Update employee roles
function viewEmployeeRole() {

    db
        
}
// Update employee managers

// Delete departments

// Delete roles

// Delete employees

// View the total utilized budget of a department


askForAction();