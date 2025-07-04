Product Management App – Week 3 Training
Description
This project is part of the Week 3 training from Module 3, focused on learning how to work with APIs, HTTP methods, and basic CRUD operations. The application simulates a simple product manager using a local server created with JSON Server and allows users to perform asynchronous operations through the Fetch API.

Objectives
Simulate a backend using JSON Server.

Perform Create, Read, Update, and Delete (CRUD) operations with Fetch API.

Apply HTTP methods: GET, POST, PUT, and DELETE.

Handle API responses and errors correctly.

Practice interaction with APIs using the JSON format.

Features
Add new products with name and price.

View the complete product list.

Edit an existing product.

Delete products.

Buttons and fields update dynamically based on user actions.

Uses Bootstrap 5 for basic responsive styling.

Technologies Used
HTML5

JavaScript (Vanilla)

JSON Server

Fetch API

Bootstrap 5 (via CDN)

How to Use
Install JSON Server (if not installed):

bash
Copiar
Editar
npm install -g json-server
Create a db.json file with the following initial structure:

json
Copiar
Editar
{
  "products": []
}
Start the server:

bash
Copiar
Editar
json-server --watch db.json
Open index.html in your browser.
Ensure the server is running at http://localhost:3000.

File Structure
pgsql
Copiar
Editar
project/
│
├── index.html        # Main HTML file with Bootstrap integration
├── script.js         # JavaScript file with CRUD logic using Fetch
└── db.json           # JSON Server database (created by the user)
Notes
All product data is stored locally in db.json.

The app communicates with http://localhost:3000/products.

Variable names and functions follow camelCase naming.

The code includes brief comments for better understanding.

Bootstrap is included via CDN; no installation required.

Requirements Met
Use of JSON Server to simulate an API.

Implementation of all CRUD operations (Create, Read, Update, Delete).

Use of HTTP methods: GET, POST, PUT, DELETE.

Code commented and written using camelCase.

Visual interface styled with Bootstrap.

Local asynchronous operations handled with Fetch API.
