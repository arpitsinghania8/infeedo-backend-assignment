const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/dbConnection");

const Task = sequelize.define("Task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Task;
