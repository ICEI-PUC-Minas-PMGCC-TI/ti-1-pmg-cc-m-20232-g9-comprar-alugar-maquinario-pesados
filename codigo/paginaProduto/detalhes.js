function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

function fillproduto(produto) {
    var item = document.getElementById('album-produto-0');
    item.textContent = produto;
}

function fillURL(imgUrl) {
    const img = document.getElementById('img');
    img.src = imgUrl;
}

function filldescricao(descricao) {
    var item = document.getElementById('album-descricao-0');
    item.textContent = descricao;
}

function fillforma(forma) {
    var item = document.getElementById('album-forma-0');
    item.textContent = forma;
}

function filltipoProduto(tipoProduto) {
    var item = document.getElementById('album-tipoProduto-0');
    item.textContent = tipoProduto;
}

function fillestado(estado) {
    var item = document.getElementById('album-estado-0');
    item.textContent = estado;
}
