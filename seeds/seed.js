const sequelize = require('../config/connection');
const Employee = require('../models/employee');

const emplSeedData = require('./employeeSeedData.json');

const seedDatabase = () => {
    return sequelize.sync({
      force: true
    })
    .then(() => {
      Employee.bulkCreate(emplSeedData)
        .then(() => {
          console.log('All Seeds Planted');
        });
      });

    process.exit(0);
  };
  
  seedDatabase();