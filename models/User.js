const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class User extends Model { }

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncremenet: true
    }
  },
  {
    sequelize,
    modelName: 'user'
  }
)
module.exports = User
