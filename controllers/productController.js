const Product = require('../models/product');
const { Op } = require('sequelize');

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProductById = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });

  await product.update(req.body);

  // Auto-update status if quantity is 0
  if (product.quantity === 0) product.status = 'Out of Stock';
  await product.save();

  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  await product.destroy();
  res.json({ message: 'Deleted' });
};

exports.searchProducts = async (req, res) => {
  const { keyword, status } = req.query;
  const where = {};

  if (keyword) {
    where[Op.or] = [
      { name: { [Op.iLike]: `%${keyword}%` } },
      { description: { [Op.iLike]: `%${keyword}%` } },
      { category: { [Op.iLike]: `%${keyword}%` } },
    ];
  }

  if (status) where.status = status;

  const products = await Product.findAll({ where });
  res.json(products);
};
