document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Product 1", price: 29.99 },
        { id: 2, name: "Product 2", price: 19.99 },
        { id: 3, name: "Product 3", price: 49.99 }
    ]; 

    const cart = [];
    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCart = document.getElementById("empty-cart");
    const cartTotal = document.getElementById("cart-total");
    const totalPrice = document.getElementById("total-price");
    const checkout = document.getElementById("checkout-btn");

    // Dynamically generate product list
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <span>${product.name} - $${product.price.toFixed(2)}</span> 
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });

    // Event Listener for Add to Cart buttons
    productList.addEventListener("click", (e) => {
        if (e.target.classList.contains("add-to-cart")) {
            const productId = parseInt(e.target.getAttribute("data-id"));
            const product = products.find(p => p.id === productId);
            addToCart(product);
        }
    });

    function addToCart(product) {
        cart.push(product);
        renderCart();
    }

    function renderCart() {
        cartItems.innerHTML = "";
        let totalCost = 0;

        if (cart.length > 0) {
            emptyCart.classList.add("hidden");
            cartTotal.classList.remove("hidden");

            cart.forEach((item) => {
                totalCost += item.price;
                const cartItem = document.createElement("div");
                cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
                cartItems.appendChild(cartItem); 
                totalPrice.textContent = `$${totalCost.toFixed(2)}`;
            });

        } else {
            emptyCart.classList.remove("hidden");
            cartTotal.classList.add("hidden"); 
            totalPrice.textContent = `$0.00`;
        }

        
    } 


    checkout.addEventListener('click',() => 
    { 
        cart.length=0 
        alert("Checkout Successfully"); 
        renderCart();
    })
});
