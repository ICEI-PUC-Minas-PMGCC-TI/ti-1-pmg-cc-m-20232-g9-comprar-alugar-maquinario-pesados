const categorySelect = document.getElementById('category');
const productList = document.getElementById('product-list');
const productItems = document.querySelectorAll('.product-item');

categorySelect.addEventListener('change', filterProducts);

function filterProducts() {
    const selectedCategory = categorySelect.value;

    productItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        if (selectedCategory === 'all' || selectedCategory === itemCategory) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}