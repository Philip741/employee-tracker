module.exports = (sequelize, DataTypes) => {
    const Roles = sequelize.define("roles",  { 
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
       department_id: { 
           type: DataTypes.INTEGER 
        },
    },
        {
           underscored: true,
    });
     return Roles;
  }