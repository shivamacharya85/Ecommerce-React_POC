# 🛒 Ecommerce Backend API

This is the **backend API** for an eCommerce platform built using **Express.js**, **Sequelize ORM**, and **PostgreSQL**. It provides RESTful endpoints for managing **users** and **products**.

---

## 🚀 Technologies Used

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- Swagger (for API docs)
- Dotenv

---

## 📁 Project Structure

ecommerce-api/
├── config/ # DB configuration
├── controllers/ # Route logic
├── models/ # Sequelize models
├── routes/ # API route definitions
├── .env # Environment variables
├── app.js # App entry point
├── package.json


---

⚙️ Setup Instructions (Windows)

1. Clone the Repository

```powershell
git clone https://github.com/shivamacharya85/Ecommerce-React_POC.git
cd Ecommerce-React_POC\backend

2. Install Dependencies
npm install

3. Configure .env
notepad .env
Paste the following content (update with your actual DB credentials):


DB_HOST=localhost
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_NAME=ecommercedb
DB_PORT=5432

Save and close the file.

4. Start the Server

node app.js


Server will run at: http://localhost:5000

USER APIS
| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| POST   | `/api/users`     | Create user   |
| GET    | `/api/users`     | Get all users |
| PUT    | `/api/users/:id` | Update user   |
| DELETE | `/api/users/:id` | Delete user   |


Product APIS
| Method | Endpoint               | Description       |
| ------ | ---------------------- | ----------------- |
| POST   | `/api/products`        | Add product       |
| GET    | `/api/products`        | List products     |
| PUT    | `/api/products/:id`    | Update product    |
| DELETE | `/api/products/:id`    | Delete product    |
| GET    | `/api/products/search` | Search by keyword |

Testing with Postman
Use Postman to test the endpoints.

Base URL: http://localhost:5000/api

💻 Git Commands (Windows)
If you want to push this project to GitHub:

powershell
Copy
Edit
cd "C:\Users\shivamacharya\Desktop\ecommerce-api"
git init
git remote add origin https://github.com/shivamacharya85/Ecommerce-React_POC.git
git add .
git commit -m "Initial backend API commit"
git push -u origin main

