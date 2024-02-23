// Sample data to simulate products
const products = [
    { id: 1, name: 'Product A', price: 10.99 },
    { id: 2, name: 'Product B', price: 24.99 },
    // Add more products as needed
];

// Function to add a product
function addProduct() {
    const nameInput = document.getElementById('name');
    const priceInput = document.getElementById('price');
    const sellerMessages = document.getElementById('sellerMessages');

    // Validate inputs
    if (!nameInput.value || !priceInput.value) {
        sellerMessages.innerHTML = '<p>Please fill out all fields.</p>';
        return;
    }

    // Simulate adding product (in a real app, you'd make an API call)
    products.push({
        id: products.length + 1,
        name: nameInput.value,
        price: parseFloat(priceInput.value),
    });

    // Clear form and show success message
    nameInput.value = '';
    priceInput.value = '';
    sellerMessages.innerHTML = '<p>Product added successfully</p>';

    // Update the product list
    updateProductList();
}

// Function to update the product list
function updateProductList() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${product.name} - $${product.price.toFixed(2)} <a href="#" onclick="buyProduct(${product.id})">Buy</a>`;
        productList.appendChild(listItem);
    });
}

// Function to simulate buying a product (in a real app, you'd make an API call)
function buyProduct(productId) {
    const product = products.find(p => p.id === productId);

    if (product) {
        // Simulate marking product as sold
        product.status = 'sold';

        // Show success message
        alert(`You have successfully purchased ${product.name} for $${product.price.toFixed(2)}`);

        // Update the product list
        updateProductList();
    } else {
        alert('Product not found');
    }
}

// Initial update of the product list on page load
updateProductList();
