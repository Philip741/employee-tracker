const sequelize = require('./config/connection');
const inquirer = require('inquirer');
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
const mainMenu = [
    { type: 'list', name: 'main-menu', message: "Choose an option", choices: menuChoices }
]

function init() {
    const prompt = inquirer.createPromptModule();
    prompt(mainMenu)
}

init();
//sequelize.sync({ force: true});