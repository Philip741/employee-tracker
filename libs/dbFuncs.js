const path = require("path");
const  Employee = require(path.join(__dirname, "../models/employee"));
const  Department = require(path.join(__dirname, "../models/department"));
const  Roles = require(path.join(__dirname, "../models/roles"));
const sequelize = require("../config/connection");
const cTable = require("console.table");


async function viewAllEmpl() {
 const employees = await Employee.findAll({
     attributes: ["id","first_name","last_name"],
     raw: true
 })
 console.table(employees);
}

function viewAllRoles() {

}

function viewAllDept () {
 const departments = await Department.findAll({
     attributes: ["id","name"],
     raw: true
 })
 console.table(departments);
       
}

function addDepartment () {

}

module.exports = {viewAllEmpl, viewAllRoles, viewAllDept};