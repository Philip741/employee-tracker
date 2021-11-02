//const sequelize = require("./config/connection");
const path = require("path");
const inquirer = require("inquirer");
const db = require(path.join(__dirname, "./libs"))
const menuChoices = [
    "View all departments",
    "View all roles",
    "View all employees",
    "Add a department",
    "Add a role",
    "Add an employee",
    "Update employee",
    "Update manager",
    "Delete employee",
    "exit"
]
const mainMenuChoices = [
    { type: "list", name: "main_menu", message: "Choose an option", choices: menuChoices }
]
async function menuArt () {
    try{
        let rendered = await art.font("Some Text", 'doom').completed()
        return rendered
        //rendered is the ascii
    }catch(err){
        //err is an error
    }
}
async function mainMenu() {
    let runMenu = true;
    while (runMenu) { 
      const prompt = inquirer.createPromptModule();
      let menuChoice = await prompt(mainMenuChoices);
      switch(menuChoice.main_menu){
          case "View all employees":
              console.log("You are now viewing all employees.");
              db.viewAllEmpl();
              break;
          case "View all departments":
              db.viewAllDept();
              break;
          case "View all roles":
              db.viewAllRoles();
              break;
          case "Add a department":
              await db.addDepartment();
              break;
          case "Add a role":
              await db.addRole();
              break;
          case "Add an employee":
              await db.addEmployee();
              break;
          case "Update employee":
              await db.updateEmployee();
              break;
          case "Update manager":
              await db.updateManager();
              break;
          case "Delete employee":
              await db.deleteEmpl();
              break;
          case "exit":
              console.log("Exiting program...");
              runMenu = false;
              process.exit();
          default:
              console.log("Please make a choice from the menu");
      }
    }
}

function init() {

    mainMenu();

};
//menuArt();
db.headerText()
init();
