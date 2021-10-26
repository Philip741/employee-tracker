const sequelize = require('../config/connection');
const Employee = require('../models/employee');
const Role = require('../models/role');
const Department = require('../models/department');

const emplSeedData = require('./employeeSeedData.json');
const deptSeedData = require('./deptSeedData.json');
const roleSeedData = require('./roleSeedData.json');

const seedDatabase = () => {
    return sequelize.sync({
      force: true
    })
    .then(() => {
      Employee.bulkCreate(emplSeedData)
      Role.bulkCreate(roleSeedData)
      Department.bulkCreate(deptSeedData)
        .then(() => {
          console.log('All Seeds Planted');
        });
      });

    process.exit(0);
  };
  
  seedDatabase();