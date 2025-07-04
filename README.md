# Product Management App – Week 3 Training

## Description

This project is part of the Week 3 training from Module 3. It focuses on interacting with simulated servers using JSON Server and managing data through HTTP methods using Fetch API. The app allows basic CRUD operations to manage a product list.

---

## Objectives

- Simulate a backend using JSON Server.
- Perform Create, Read, Update, and Delete (CRUD) operations with Fetch API.
- Apply HTTP methods: GET, POST, PUT, and DELETE.
- Handle API responses and possible errors.
- Practice working with APIs using JSON data format.

---

## Technologies Used

- HTML5  
- JavaScript (Vanilla)  
- JSON Server  
- Fetch API  
- Bootstrap 5 (CDN)

---

## Features

- Add new menu with name and price.
- View all registered menu.
- Edit and update product information.
- Delete menu.
- Responsive and clean interface using Bootstrap.

---

## File Structure

project/
│
├── index.html # Main HTML page with Bootstrap integration
├── script.js # JavaScript with CRUD logic using Fetch API
└── db.json # Simulated database (created manually)

---

## How to Use

1. **Install JSON Server** globally if not already installed:
   ```bash
   npm install -g json-server
Create a file named db.json with the following content:

# json:
{
  "menu": []
}
Run the server from the directory containing db.json:
json-server --watch db.json
Open index.html in a web browser.

- Make sure the server is running at http://localhost:3000.

## Requirements:
Simulated API created with JSON Server.

All CRUD operations implemented using Fetch API.

HTTP methods used: GET, POST, PUT, DELETE.

CamelCase naming and commented code.

UI with Bootstrap.

Validation of inputs and proper response handling.

