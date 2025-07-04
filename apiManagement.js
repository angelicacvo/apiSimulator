// Adds a new product to the API
function addProduct() {
  const name = document.getElementById("name").value.trim();
  const price = parseFloat(document.getElementById("price").value);

  if (!name || isNaN(price)) return;

  const newProduct = { name, price };

  fetch("http://localhost:3000/menu", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct)
  })
    .then(res => res.json())
    .then(() => {
      clearFields();
      getProducts();
    });
}

// Gets all products from the API
function getProducts() {
  fetch("http://localhost:3000/menu")
    .then(res => res.json())
    .then(renderList);
}

// Renders the list of products in the UI
function renderList(products) {
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  products.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.id}. ${p.name} - $${p.price} `;

    const edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.onclick = () => prepareEdit(p);

    const remove = document.createElement("button");
    remove.textContent = "Delete";
    remove.onclick = () => deleteProduct(p.id);

    li.appendChild(edit);
    li.appendChild(remove);
    list.appendChild(li);
  });
}

// Deletes a product by ID
function deleteProduct(id) {
  fetch(`http://localhost:3000/menu/${id}`, { method: "DELETE" })
    .then(() => getProducts());
}

// Prepares the form to edit a selected product
function prepareEdit(product) {
  document.getElementById("name").value = product.name;
  document.getElementById("price").value = product.price;

  const btn = document.getElementById("btn-action");
  btn.textContent = "Save";
  btn.onclick = () => confirmEdit(product.id);
}

// Confirms and sends edited product data to the API
function confirmEdit(id) {
  const name = document.getElementById("name").value.trim();
  const price = parseFloat(document.getElementById("price").value);
  if (!name || isNaN(price)) return;

  fetch(`http://localhost:3000/menu/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, price })
  })
    .then(res => res.json())
    .then(() => {
      clearFields();
      getProducts();
      resetButton();
    });
}

// Resets the main button to add mode
function resetButton() {
  const btn = document.getElementById("btn-action");
  btn.textContent = "Add";
  btn.onclick = addProduct;
}

// Clears input fields
function clearFields() {
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
}
