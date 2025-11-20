'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    name: {
      type: DataTypes.STRING(255),
      allowNull:false
    },
    firstname: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull:false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    goal: {type: DataTypes.DECIMAL(3,1),
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'users',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Users;
};