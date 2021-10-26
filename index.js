//const sequelize = require('./config/connection');
const inquirer = require('inquirer');
const db = require('./libs/dbFuncs');
//inquirer section
const menuChoices = [
    "View all departments",
    "View all roles",
    "View all employees",
    "Add a department",
    "Add a role",
    "Add an employee",
    "Update an employee"
]
const mainMenuChoices = [
    { type: 'list', name: 'main_menu', message: "Choose an option", choices: menuChoices }
]

async function mainMenu() {
    const prompt = inquirer.createPromptModule();
    let menuChoice = await prompt(mainMenuChoices);
    console.log(menuChoice.main_menu);
    switch(menuChoice.main_menu){
        case 'View all employees':
            console.log("You are now viewing all employees.");
            db.viewAllEmpl();
            break;
        default:
            console.log('Please make a choice from the menu');
    }
}

function init() {
    mainMenu();
};

init();

//sequelize.sync({ force: true});