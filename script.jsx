const products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        image: "https://via.placeholder.com/250"
    },
    {
        id: 2,
        name: "Headphones",
        price: 2000,
        image: "https://via.placeholder.com/250"
    },
    {
        id: 3,
        name: "Smartphone",
        price: 25000,
        image: "https://via.placeholder.com/250"
    },
    {
        id: 4,
        name: "Smart Watch",
        price: 3000,
        image: "https://via.placeholder.com/250"
    }
];

const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");

let cart = 0;

function displayProducts() {
    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart()">Add to Cart</button>
        `;

        productList.appendChild(card);
    });
}

function addToCart() {
    cart++;
    cartCount.textContent = cart;
}

displayProducts();