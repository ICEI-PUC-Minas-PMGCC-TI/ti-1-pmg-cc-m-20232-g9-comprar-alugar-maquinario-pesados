

function leDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { contatos: [                        
                    ]}
    }

    return objDados;
}

function salvaDados (dados) {
    localStorage.setItem ('db', JSON.stringify (dados));
}

function incluirContato (){
    // Ler os dados do localStorage
    console.log("deveser")
    let objDados = leDados();

    // Incluir um novo contato
    let strProduto = document.getElementById ('produto').value;
    let strTipoProduto = document.getElementById ('tipoProduto').value;
    let strForma = document.getElementById ('forma').value;
    let strEstados = document.getElementById ('estados').value;
    let strendereco = document.getElementById ('endereço').value;
    let strDescricao = document.getElementById ('descrição').value;
    
    let novoProduto = {
        produto: strProduto,
        tipoProduto: strTipoProduto,
        forma: strForma,
        estados: strEstados,
        endereço: strendereco,
        descrição: strDescricao
    };

   let valido = validarProduto(novoProduto)
   if (!valido){
    return
   }

    objDados.contatos.push (novoProduto);

    // Salvar os dados no localStorage novamente
    salvaDados (objDados);

    // Atualiza os dados da tela
    imprimeDados ();
}

function validarProduto(novoProduto) {
    if (novoProduto.produto === "") {
        alert("Por favor, preencha o campo Nome do produto")
        return false
    }
    if (novoProduto.tipoProduto === "") {
        alert("Por favor, preencha o campo Selecione o tipo do produto")
        return false
    }
    return true
}

function imprimeDados () {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados ();

    console.log(objDados)
    if (objDados?.contatos?.length === null) {
        return
    }

    for (i=0; i< objDados.contatos.length; i++) {
        strHtml += `<p>${objDados.contatos[i].produto} - ${objDados.contatos[i].tipoProduto} - ${objDados.contatos[i].forma} - ${objDados.contatos[i].estados} - ${objDados.contatos[i].endereço} - ${objDados.contatos[i].descrição}</p>`
    }

    tela.innerHTML = strHtml;
}


const form = document.querySelector("#form");
const nomeProduto = document.querySelector("#produto");
const endereco = document.querySelector("#endereço");
const estado = document.querySelector("#estados");
const descricao = document.querySelector("#descrição");

form.addEventListener("submit" , (event) =>{
    event.preventDefault();

    console.log(nomeProduto)

    
    incluirContato()
}) 

imprimeDados()
