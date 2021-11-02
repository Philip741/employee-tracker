const sequelize = require('../config/connection');
const db = require("../models");

const emplSeedData = require('./employeeSeedData.json');
const deptSeedData = require('./deptSeedData.json');
const roleSeedData = require('./roleSeedData.json');

const seedDatabase = async () => {
    await db.sequelize.sync({
      force: true
    })
    await db.departments.bulkCreate(deptSeedData);
    await db.roles.bulkCreate(roleSeedData);
    await db.employees.bulkCreate(emplSeedData);
      
    process.exit(0);
  };

seedDatabase()