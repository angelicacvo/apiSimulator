// get method (show every product inside menu with forEach)
fetch("http://localhost:3000/menu")
  .then((response) => response.json())
  .then((data) => {
    console.log(`Avaiable menu: `);
    data.forEach((product) => console.log(product));
  })
  .catch((error) => console.error(`Error obtaining data: ${error}`));

// post method to create new data and validates with function validateProduct if the product doesn't exists and the price is a number
const newProduct = { id: 6, name: "seitan sushi burrito", price: 32000 };

if (validateProduct(newProduct)) {
  fetch("http://localhost:3000/menu", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(newProduct),
  })
    .then((response) => response.json())
    .then((data) => console.log(`New product added: ${data}`))
    .catch((error) => console.error(`Error adding data: ${error}`));
}

//put method to modify existing data and validates with function validateProduct if the product doesn't exists and the price is a number
const updatedProduct = { name: "pepita roll", price: 29000 };

if (validateProduct(updatedProduct)) {
  fetch("http://localhost:3000/menu/3", {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(updatedProduct),
  })
    .then((response) => response.json())
    .then((data) => console.log(`Product updated: ${data}`))
    .catch((error) => console.error(`Error updating data: ${error}`));
}

// delete method to delete an existing product
fetch("http://localhost:3000/menu/6", {
  method: "DELETE",
})
  .then(() => console.log(`Product deleted succesfully`))
  .catch((error) => console.error(`Error deleting data: ${error}`));

  
//function to validate if the product doesn't exist in the json db and if it is a number, if it doesn't shows an error message
function validateProduct(product) {
  if (!product.name || typeof product.price != "number") {
    console.error("Invalid product data.");
    return false;
  }
  return true;
}
