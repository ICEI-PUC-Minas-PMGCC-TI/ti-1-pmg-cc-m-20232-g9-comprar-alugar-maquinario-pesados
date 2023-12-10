function validarProduto(novoProduto) {
    if (novoProduto.produto === "") {
        alert("Por favor, preencha o campo Nome do produto");
        return false;
    }
    if (novoProduto.tipoProduto === "") {
        alert("Por favor, preencha o campo Selecione o tipo do produto");
        return false;
    }
    if (novoProduto.forma === "") {
        alert("Por favor, preencha o campo Selecione O que deseja fazer com o item?");
        return false;
    }
    if (novoProduto.estados === "") {
        alert("Por favor, preencha o campo Selecione o Estado");
        return false;
    }
    if (novoProduto.endereço === "") {
        alert("Por favor, preencha o campo Endereço");
        return false;
    }
    if (novoProduto.descrição === "") {
        alert("Por favor, preencha o campo descrição");
        return false;
    }
    if (novoProduto.url === "") {
        alert("Por favor, preencha o campo URL");
        return false;
    }
    return true;
}

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Coletar dados do formulário
    var produto = document.getElementById("produto").value;
    var tipoProduto = document.getElementById("tipoProduto").value;
    var forma = document.getElementById("forma").value;
    var estado = document.getElementById("estados").value;
    var endereco = document.getElementById("endereço").value;
    var descricao = document.getElementById("descrição").value;
    var url = document.getElementById("url").value;

    var novoProduto = {
        "produto": produto,
        "tipoProduto": tipoProduto,
        "forma": forma,
        "estado": estado,
        "endereco": endereco,
        "descricao": descricao,
        "url": url
    };
    // Validar os dados antes de enviar
    if (validarProduto(novoProduto)) {
        // Se a validação for bem-sucedida, continuar com a requisição POST
        fetch("https://jsonservercadas.gilhermetheodor.repl.co/contatos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(novoProduto)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Resposta do servidor:", data);
        
            if (data.id !== undefined) {
                novoProduto.linkAlbum = `./assets/albuns/album.html?id=${data.id}`;
                console.log("Link do álbum:", novoProduto.linkAlbum);
        
                // Redirecionar para o link do álbum após o envio bem-sucedido
                window.location.href = novoProduto.linkAlbum;
            } else {
                console.error("O campo 'id' não está presente na resposta do servidor.");
            }
        })
        .catch(error => {
            console.error("Erro ao enviar dados para o servidor:", error);
        });
    }
});
