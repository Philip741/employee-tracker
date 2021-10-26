const path = require('path');
const  Employee = require(path.join(__dirname, '../models/employee'));
const sequelize = require('../config/connection');
const cTable = require('console.table');


async function viewAllEmpl() {
 const employees = await Employee.findAll({
     attributes: ['id','first_name','last_name'],
     raw: true
 })
 console.table(employees);
}

function viewAllRoles() {

}

function viewAllDept () {
       
}

module.exports = {viewAllEmpl};