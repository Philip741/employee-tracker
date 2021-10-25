const { Model, DataTypes } = require('sequelize');

class Employee extends Model {}

Employee.init (
   {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
   },
   first_name: {
    type: DataTypes.STRING,
    allowNull: false,
   }, 
 })