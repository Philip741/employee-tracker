const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Role extends Model {}

Role.init (
   {
     id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
     },
     title: {
          type: DataTypes.STRING,
          len: [1,30],
          allowNull: false,
     }, 
     salary: {
          type: DataTypes.DECIMAL,
          allowNull: false,
     }, 
   },
   {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'role',
   }
 );

 module.exports = Role;