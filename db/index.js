const inquirer = require("inquirer");
const { createBrotliDecompress } = require("zlib");

const db = required("./db");

function askForAction() {

    inquirer.prompt({
        message: "Choose something to do",
        name: "action",
        type: "list",
        choices: [
            "VIEW_DEPARTMENTS",
            "VIEW ROLES",
            "VIEW_EMPLOYEES",
            "CREATE_ROLE",
            "QUIT"
        ]
    }).then((res) => {

        switch(res.action) {

            case "VIEW_DEPARTMENTS":
                viewDepartments();
                return;

            case "VIEW_ROLES":
                return;

            case "VIEW_EMPLOYEES":
                return;

            case "CREATE_ROLE":
                createRole();
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
    // View all employees by department
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