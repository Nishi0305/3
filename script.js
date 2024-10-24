document.getElementById('add-to-cart').addEventListener('click', function() {
    const cartMessage = document.getElementById('cart-message');
    cartMessage.classList.remove('hidden');
    setTimeout(() => {
        cartMessage.classList.add('hidden');
    }, 3000);
});