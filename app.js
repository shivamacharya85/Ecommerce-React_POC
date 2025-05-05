const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes'); // Import user routes
const productRoutes = require('./routes/productRoutes'); // Import product routes

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// User and Product routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Sync database
sequelize.sync({ force: false }) // `force: false` ensures it doesn't drop tables on every start
  .then(() => {
    console.log('PostgreSQL connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch(err => console.error('DB Error:', err));
