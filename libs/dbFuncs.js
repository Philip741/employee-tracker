const path = require("path");
const figlet = require("figlet");
const chalk = require('chalk');
const db = require(path.join(__dirname, "../models"));
const cTable = require("console.table");
const inquirer = require("inquirer");
let prompt = inquirer.createPromptModule();
const rolePrompts = [
    { 
        type: 'input',
        name: 'title_name',
        message: 'Title name: '
    },
    { 
        type: 'input',
        name: 'salary',
        message: 'Salary amount: '
    },
    { 
        type: 'input',
        name: 'dept_id',
        message: 'Department id: '
    }
]

const deptPrompts = [
    { 
        type: 'input',
        name: 'dept_name',
        message: 'Department name: '
    },
]

const emplPrompts = [
    {
        type: 'input',
        name: 'first_name',
        message: 'Employee first name: '
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'Employee last name: '
    },
    {
        type: 'input',
        name: 'manager_id',
        message: 'Manager id if available: '
    },
    {
        type: 'input',
        name: 'role_id',
        message: 'Employee role id : '
    }
 ]
const updateEmplPrompts = [
    {
        type: 'input',
        name: 'first_name',
        message: 'Employee first name: '
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'Employee last name: '
    },
    {
        type: 'input',
        name: 'role_id',
        message: 'Update role id to: '
    },

]
const updateManagerPrompts = [
    {
        type: 'input',
        name: 'first_name',
        message: 'Employee first name: '
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'Employee last name: '
    },
    {
        type: 'input',
        name: 'manager_id',
        message: 'Update Manager id to: '
    },

]
const delEmplPrompts = [
    {
        type: 'input',
        name: 'first_name',
        message: 'Employee first name: '
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'Employee last name: '
    },
]

function headerText () {
    //figlet.fonts(function(err,fonts) {
     //   if (err) {
      //      return
       // }
       // console.dir(fonts);
    //})
    console.log(chalk.green(figlet.textSync("EMPLOYEE GENERATOR", {
        font: 'Cybermedium',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 180,
    })));
}


async function viewAllEmpl() {
  const employees = await db.employees.findAll({
    include: [{ model: db.roles }, { model: db.employees }],
    attributes: ["id", "first_name", "last_name", "manager_id"],
    raw: true,
    logging: false,
  });
  console.log("\n"); // needed to add a newline so the headings line up properly
  for (const i of employees) {
    console.table([
      {
        First_Name: i.first_name,
        Last_name: i.last_name,
        Manager: `${i["employee.first_name"]} ${i["employee.last_name"]}`,
        Role: i["role.title"],
        Salary: i["role.salary"],
      },
    ]);
  }
}

async function viewAllRoles() {
  const roles = await db.roles.findAll({
    attributes: ["department_id", "title", "salary"],
    raw: true,
  });
  console.table(roles);
}

async function viewAllDept() {
  const departments = await db.departments.findAll({
    attributes: ["id", "name"],
    raw: true,
  });
  console.table(departments);
}

async function addEmployee () {
    let addEmpMenu = await prompt(emplPrompts);

    let addEmpl = await db.employees.create({
         first_name: addEmpMenu.first_name,
         last_name: addEmpMenu.last_name,
         role_id: addEmpMenu.role_id,
         manager_id: addEmpMenu.manager_id
    });
}

async function addDepartment () {
    let addDeptMenu = await prompt(deptPrompts);

    let addDept = await db.departments.create({
         name: addDeptMenu.dept_name
    });
}

async function addRole () {
    let addRoleMenu = await prompt(rolePrompts);

    let addRole = await db.roles.create({
         title: addRoleMenu.title_name,
         salary: addRoleMenu.salary,
         department_id: addRoleMenu.dept_id,
    });
}

async function updateEmployee() {
    let updateEmplMenu = await prompt(updateEmplPrompts);
    //update employees role id where matching first and last name 
    await db.employees.update({
        role_id: updateEmplMenu.role_id,
    },{
        where: { 
            first_name: updateEmplMenu.first_name,
            last_name: updateEmplMenu.last_name
        },
        logging:false
    })
}

async function updateManager() {
    let updateManagerMenu = await prompt(updateManagerPrompts);
    //update employees role id where matching first and last name 
    await db.employees.update({
        role_id: updateManagerMenu.manager_id,
    },{
        where: { 
            first_name: updateManagerMenu.first_name,
            last_name: updateManagerMenu.last_name
        },
        logging:false
    })
}

async function deleteEmpl() {
    let deleteEmplMenu = await prompt(delEmplPrompts);

    await db.employees.destroy({
        where: {
            first_name: deleteEmplMenu.first_name,
            last_name: deleteEmplMenu.last_name
        }
    })
}

module.exports = { viewAllEmpl, viewAllRoles, viewAllDept, addEmployee, addRole, addDepartment, 
                   updateEmployee, updateManager, deleteEmpl, headerText};
