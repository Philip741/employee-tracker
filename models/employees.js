module.exports = (sequelize, DataTypes) => {
    const Employees = sequelize.define("employees",  { 
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
       },
       first_name: {
            type: DataTypes.STRING,
            len: [1,30],
            allowNull: false,
       }, 
       last_name: {
            type: DataTypes.STRING,
            len: [1,30],
            allowNull: false,
       }, 
       role_id: {
           type: DataTypes.INTEGER
       },
       //employee_id: {
        //   type: DataTypes.INTEGER
       //},
       manager_id: {
           type: DataTypes.INTEGER,
       },
    },
        {
           underscored: true,
    });
     return Employees;
  }