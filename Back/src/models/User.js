const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false
      },
      username: {
         type: DataTypes.STRING,
         unique: true,
         allowNull: false
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            len: [6, 20]
         }
      }
   }, { timestamps: false });
};
