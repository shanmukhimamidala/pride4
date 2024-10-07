// script.js

let cartCount = 0;
const cartButton = document.getElementById('cart-button');
const addToCartButtons = document.querySelectorAll('button');

addToCartButtons.forEach((button) => {
    button.addEventListener('click', function () {
        cartCount++;
        cartButton.textContent = `Cart (${cartCount})`;
    });
});
