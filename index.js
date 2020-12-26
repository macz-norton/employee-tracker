const db = require("./db");
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
                viewEmployees();
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
                viewRoles();
                return;

            case "Add role":
                // createRole();
                return;

            case "Remove role":
                return;

            default:
                connection.end();
        }
    })

}

function viewEmployees() {

    db
        .getEmployees()
        .then((employees) => {
            console.table(employees);
            askForAction();
        })

}

function viewRoles() {

    db
        .getRoles()
        .then((roles) => {
            console.table(roles);
            askForAction();
        })

}

function viewDepartments() {

    db
        .getDepartments()
        .then((departments) => {
            console.table(departments);
            askForAction();
        })

}

// function createRole() {

//     db
//         .getDepartments()
//         .then((departments) => {

//             console.log(departments);

//             const departmentChoices = departments.map((department) => ({
//                 value: department.id,
//                 name: department.name
//             }))

//             inquirer
//                 .prompt([
//                     {
//                         message:"What department is this role for?",
//                         type: "list",
//                         name: "department_id",
//                         choices: departmentChoices
//                     }
//                 ]).then(res => {
//                     console.log(res);
//                 });

//         })

// }

askForAction();