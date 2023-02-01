const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  { id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    allowNull:false,
    autoIncrement:true
  },
  product_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'Product',
      key:'id'
    }
  },
  tag_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'Tag',
      key:'id'
    }
  }
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
