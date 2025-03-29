# Nodepop - Second-Hand Marketplace

Nodepop is a web application built with Node.js, Express, MongoDB and EJS that allows users to list, view, and manage second-hand products. 
Each user can create and delete their own products, and the system supports user sessions.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Installation](#installation)
- [How to Use](#how-to-use)
- [Project Structure](#project-structure)
- [Credits](#credits)

---

## About the Project

This project was created using **Express Generator** as the foundation.
It simulates a real-world platform where users can sell second-hand items, manage their products, and interact through a simple interface rendered with EJS.

---

## Key Features

- User login/logout with session support
- User session saved in MongoDB using `connect-mongo`
- Product creation with:
  - Name, price, image URL, tags and owner
- Product deletion (only by its owner)
- Products are displayed using Bootstrap cards
- Init script to populate the database with users and products
- Clean and responsive UI using Bootstrap and EJS templates
- ESLint 

### Technologies Used:

- **Node.js** for the backend
- **Express** for routing and middleware
- **MongoDB** for the database
- **EJS** for rendering dynamic HTML pages
- **Bootstrap** for responsive design and UI components
- **ESLint** for improve code quality

---

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/nodepop.git
   cd nodepop
   ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Create a MongoDB database**
- Make sure MongoDB is running on your machine.
- Database used: nodepop

4. **Initialize the database**
    ```bash
    npm run initDB
    ```

5. **Run the development server**
    ```bash
    npm run dev
    ```

---

## How to Use

1. **Open your browser at**: http://localhost:3000

2. **Login using one of the users generated by initDB.js**:

    - admin@example.com / 1234
    - user@example.com / 1234

3. **After login, you can**:

- View your own products
- Create new products
- Delete your products
- See product cards with name, price, image, and tags

---

## Project Structure
```
nodepop/
├── bin/
│   └── www
├── controllers/
│   ├── home.js
│   ├── products.js
│   └── loginController.js
├── lib/
│   ├── connectMongoose.js
│   └── sessionManager.js
├── models/
│   ├── Product.js
│   └── User.js
├── public/
├── routes/
├── views/
│   ├── home.ejs
│   ├── new-product.ejs
│   ├── login.ejs
│   ├── header.ejs
│   └── footer.ejs
├── initDB.js
└── app.js
```

---

## Credits 

Developed by Flavia Garbetta during the Web18 Bootcamp at KeepCoding.

---

## Notes

- The project uses ES Modules, be sure to run with Node 14+ and "type": "module" in package.json.
- Sessions are stored in MongoDB via connect-mongo.
- All user actions are protected using session middleware (sessionManager.js).
