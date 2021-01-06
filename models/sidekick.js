'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sidekick extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sidekick.belongsTo(models.Hero, {
        foreignKey: 'heroId'
      });
      // define association here
    }
  };
  Sidekick.init({
    name: DataTypes.STRING,
    heroID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Hero',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Sidekick',
  });
  return Sidekick;
};