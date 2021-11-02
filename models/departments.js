module.exports = (sequelize, DataTypes) => {
    const Departments = sequelize.define("departments",  { 
          id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true,
         },
         name: {
              type: DataTypes.STRING,
              len: [1,30],
              allowNull: false,
         }, 
       },
        {
           underscored: true,
    });
     return Departments;
  }