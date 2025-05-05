const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
  name: { type: DataTypes.STRING, allowNull: false },
  description: DataTypes.TEXT,
  price: { type: DataTypes.FLOAT, allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false },
  category: DataTypes.STRING,
  imageUrl: DataTypes.STRING,
  status: { type: DataTypes.STRING, defaultValue: 'Available' }
}, {
  timestamps: true,
});

Product.beforeSave((product) => {
  product.status = product.quantity > 0 ? 'Available' : 'Not Available';
});
Product.beforeUpdate((product) => {
  product.status = product.quantity > 0 ? 'Available' : 'Not Available';
});

module.exports = Product;
