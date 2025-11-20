'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class weight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      weight.belongsTo(models.Users, {
        as: "Users",
        foreignKey: "user_id"
      })
    }
  }
  weight.init({
    weight: DataTypes.DECIMAL(3,1)
  }, {
    sequelize,
    modelName: 'weight',
    tableName: 'weights',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return weight;
};