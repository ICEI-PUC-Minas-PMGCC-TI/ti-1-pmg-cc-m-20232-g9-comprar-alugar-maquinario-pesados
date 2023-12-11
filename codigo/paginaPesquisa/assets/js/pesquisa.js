function search(){
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase()
    let x = document.getElementsByClassName('cards-produto')
    console.log(x)
    for(i = 0; i < x.length; i++){
        let divCard = x[i]
        let nomeProduto = divCard.querySelector("#id-nome-produto").textContent
        console.log(nomeProduto)
        if (!nomeProduto.toLowerCase().includes(input)){
    
            divCard.style.display = "none"
        }else{
            divCard.style.display = "block"
        }
    }
}








