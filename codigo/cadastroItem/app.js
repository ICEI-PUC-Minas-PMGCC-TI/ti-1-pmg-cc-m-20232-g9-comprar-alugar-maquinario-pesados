

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
    let objDados = leDados();

    // Incluir um novo contato
    let strProduto = document.getElementById ('produto').value;
    let strTipoProduto = document.getElementById ('tipoProduto').value;
    let strForma = document.getElementById ('forma').value;
    let strEstados = document.getElementById ('estados').value;
    let strendereco = document.getElementById ('endereço').value;
    let strDescricao = document.getElementById ('descrição').value;
    let strImg = document.getElementById ('file-input').value;
    
    let novoProduto = {
        produto: strProduto,
        tipoProduto: strTipoProduto,
        forma: strForma,
        estados: strEstados,
        endereço: strendereco,
        descrição: strDescricao,
        img: strImg
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
    if (novoProduto.forma === "") {
        alert("Por favor, preencha o campo Selecione o tipo do produto")
        return false
    }
    if (novoProduto.estados === "") {
        alert("Por favor, preencha o campo Selecione o Estado")
        return false
    }
    if (novoProduto.endereço === "") {
        alert("Por favor, preencha o campo Endereço")
        return false
    }
    if (novoProduto.descrição === "") {
        alert("Por favor, preencha o campo descrição")
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
        strHtml += `<p>${objDados.contatos[i].produto} - ${objDados.contatos[i].tipoProduto} - ${objDados.contatos[i].forma} - ${objDados.contatos[i].estados} - ${objDados.contatos[i].endereço} - ${objDados.contatos[i].descrição} - ${objDados.contatos[i].img}</p>`
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

    
    incluirContato()
}) 

let fileInput = document.getElementById("file-input");
let imageContainer = document.getElementById("images");
let numOfFiles = document.getElementById("num-of-files");

function preview(){
    imageContainer.innerHTML = "";
    numOfFiles.textContent = `${fileInput.files.length} Files Selected`;

    for(i of fileInput.files){
        let reader = new FileReader();
        let figure = document.createElement("figure");
        let figCap = document.createElement("figcaption");
        figCap.innerText = i.name;
        figure.appendChild(figCap);
        reader.onload=()=>{
            let img = document.createElement("img");
            img.setAttribute("src",reader.result);
            figure.insertBefore(img,figCap);
        }
        imageContainer.appendChild(figure);
        reader.readAsDataURL(i);
    }
}

imprimeDados()
