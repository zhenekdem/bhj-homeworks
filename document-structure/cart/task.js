const cartContainer = document.querySelector('.cart__products');
const products = document.querySelectorAll('.product');
for (let i = 0; i < products.length; i++) {
    const product = products[i];
const decBtn = product.querySelector('.product__quantity-control_dec'); 
const incBtn = product.querySelector('.product__quantity-control_inc');
const quantityVal = product.querySelector('.product__quantity-value');
const addBtn = product.querySelector('.product__add');
const id = product.dataset.id;
decBtn.addEventListener('click', () => {
    let count = parseInt(quantityVal.textContent);
    if (count > 1) {
        quantityVal.textContent = count - 1;
    }
});

incBtn.addEventListener('click', () => {
    let count = parseInt(quantityVal.textContent);
    quantityVal.textContent = count + 1;
});

addBtn.addEventListener('click', () => {
    const countToAdd = parseInt(quantityVal.textContent);
    const cartProduct = cartContainer.querySelector(`.cart__product[data-id="${id}"]`);
    if (cartProduct) {
        const cartCount = cartProduct.querySelector('.cart__product-count');
        cartCount.textContent = parseInt(cartCount.textContent) + countToAdd;
    } else {
        const item = document.createElement('div');
        item.className = 'cart__product';
        item.dataset.id = id;
        const img = document.createElement('img');
            img.className = 'cart__product-image';
            img.src = product.querySelector('.product__image').src;

            const count = document.createElement('div');
            count.className = 'cart__product-count';
            count.textContent = countToAdd;
            item.appendChild(img);
            item.appendChild(count);
            cartContainer.appendChild(item);
    }
})
}