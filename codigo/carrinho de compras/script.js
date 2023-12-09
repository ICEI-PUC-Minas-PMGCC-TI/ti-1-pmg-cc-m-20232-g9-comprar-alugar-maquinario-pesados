function leDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    return objDados;
}
/*Não existe uma pagina de listagem de produtos pronta até o atual momento, então não é possivel definir o produto que deve ser exibido,
    a variavel "i" nos itens abaixo vai ser substituida após a conclusão da pagina de listagem dos produtos.
    
    A pagina html possui valores apenas para facilitar a vizualização mas após a implementação da pagina de listagem os valores serão substituidos*/

function imprimeDados() {
    let nomeProduto = document.getElementById("nomeProduto")
    let objDados = leDados();
    let strHtml = `<h1>${objDados.contatos[i].produto}<h1>`

    nomeProduto.innerHTML = strHtml
}

function imprimeDados() {
    let detalhes = document.getElementById("detalhes")
    let strHtml = '';
    let objDados = leDados();
    strHtml += `<ul><li>${objDados.contatos[i].tipoProduto}</li> - <li>${objDados.contatos[i].forma}</li> - <li>${objDados.contatos[i].estados}</li> - <li>${objDados.contatos[i].endereço}</li></ul>`    

    detalhes.innerHTML = strHtml
}

function imprimeDados() {
    let sobre = document.getElementById("sobre")
    let objDados = leDados();
    let strHtml = `<h1>${objDados.contatos[i].descrição}<h1>`

    sobre.innerHTML = strHtml
}