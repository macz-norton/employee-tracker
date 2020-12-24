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
    }).then(() => {

        switch(res.action) {

            case "VIEW_DEPARTMENTS":
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

