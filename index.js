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
            // "Update employee manager",
            // "View all employees by manager",
            // "Remove department",
            // "Remove role",
            // "Remove employee",
            // "View total used budget of a department",
            "Quit"
        ]
    })
    .then((res) => {

        switch(res.action) {

            case "Add department":
                createDepartment();
                break;

            case "Add role":
                createRole();
                break;

            case "Add employee":
                createEmployee();
                break;

            case "View all departments":
                viewDepartments();
                break;
    
            case "View all roles":
                viewRoles();
                break;

            case "View all employees":
                viewEmployees();
                break;

            case "Update employee role":
                viewEmployeeRole();
                break;
    
            // case "Update employee manager":
            //  break;

            // case "View all employees by manager":
            // break;

            // case "Remove department":
            // break;

            // case "Remove role":
            // break;
  
            // case "Remove employee":
            // break;

            // case "View total used budget of a department":
            // break;

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

    db
        .getRoles()
        .then((roles) => {

            const roleChoices = roles.map((role) => ({
                value: role.id,
                name: role.title,
            }));

            inquirer
                .prompt([
                    {
                        message: "What is the employee's first name?",
                        type: "input",
                        name: "firstName"
                    },
                    {
                        message: "What is the employee's last name?",
                        type: "input",
                        name: "lastName"
                    },
                    {
                        message: "What is the employee's role?",
                        type: "list",
                        name: "role_id",
                        choices: roleChoices 
                    },
                    {
                        message: "Who is the employee's manager?",
                        type: "list",
                        name: "manager_id",
                        choices: managerChoices 
                    }
                ]).then((results) => {
                    const newEmployee = {
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