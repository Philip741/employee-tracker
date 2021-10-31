const Sequelize = require('sequelize');
const path = require('path');
//const sequelize = require("../config/connection");
require('dotenv').config( {
    path: path.join(__dirname, '../.env')
  } );
  
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mariadb',
      port: 3306,
      define: {
        underscored: true
      }
    }
  );

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.departments = require('./departments')(sequelize, Sequelize);
db.roles = require('./roles')(sequelize, Sequelize);
db.employees = require('./employees')(sequelize, Sequelize);

//Relational setup
//creates roles_id foreign key relation 
db.roles.belongsTo(db.departments);
db.departments.hasMany(db.roles);
//creates foreign key to roles table from employees
db.employees.belongsTo(db.roles);
db.roles.hasMany(db.employees);
//creates foreign key to same table and sets it to manager_id
db.employees.belongsTo(db.employees, { foreignKey: "manager_id"});

module.exports = db;