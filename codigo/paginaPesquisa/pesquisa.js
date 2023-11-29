/*function filterProducts() {
    const searchInput = document.getElementById('search');
    const productList = document.getElementById('product-list');
    const productItems = productList.getElementsByClassName('product-item');
    const query = searchInput.value.toLowerCase();

    for (const item of productItems) {
        const productName = item.textContent.toLowerCase();

        if (productName.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    }
}
*/

var vetorArmazenado = JSON.parse(localStorage.getItem('db')) || [];

console.log('Vetor Armazenado:', vetorArmazenado);












