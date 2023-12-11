function renderCards(itens) {
    const cardContainer = document.getElementById('linha-produtos');

    const templateCard = document.getElementById('card-produto');

    itens.forEach((produto, index) => {
        const clone = templateCard.cloneNode(true);

        clone.removeAttribute('id');
        const img = clone.querySelector('.img-produto');
        img.src = produto.url;

        const cardText = clone.querySelector('.nome-produto');
        cardText.textContent = produto.produto;

        const detalhesLink = clone.querySelector('.id-produto');
        detalhesLink.href = "../paginaProduto/PaginaProduto.html?id=" + produto.id;

        cardContainer.appendChild(clone);
        clone.style.display = 'block';
    });
}