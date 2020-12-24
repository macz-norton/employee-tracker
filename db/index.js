const inquirer = require("inquirer");

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

askForAction();