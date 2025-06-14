// Load cart when the page loads
document.addEventListener("DOMContentLoaded", loadCart);

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); // Remove selected item
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart(); // Reload cart to update UI and total price
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    let totalPrice = 0;

    cartContainer.innerHTML = ""; // Clear previous items

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        document.getElementById("total-price").innerText = "$0"; // Reset total
        return;
    }

    cart.forEach((pc, index) => {
        totalPrice += pc.price; // Update total price
        cartContainer.innerHTML += `
            <div class="pc-card">
                <img src="${pc.image}" alt="${pc.name}">
                <h3>${pc.name}</h3>
                <p>${pc.specs}</p>
                <strong>$${pc.price.toFixed(2)}</strong>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });

    document.getElementById("total-price").innerText = `$${totalPrice.toFixed(2)}`; // Update total price display
}
