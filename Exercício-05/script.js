const livros = {
    1: {
        "titulo": "JavaScript Eloquente",
        "quemEscreveu": "Marijn Haverbeke",
        "link": "https://github.com/braziljs/eloquente-javascript"
    },
    2: {
        "titulo": "Você não sabe JS",
        "quemEscreveu": "Kyle Simpson",
        "link": "https://github.com/cezaraugusto/You-Dont-Know-JS"
    },
    3: {
        "titulo": "Calibã e a Bruxa: mulheres, corpo e acumulação primitiva",
        "quemEscreveu": "Silvia Federici",
        "link": "http://coletivosycorax.org/wp-content/uploads/2019/09/CALIBA_E_A_BRUXA_WEB-1.pdf"
    }
}



const lista = document.getElementById("lista-do-catalogo")


for ( let propriedade in livros) {
    let livro = document.createElement("li")
    lista.appendChild(livro)
    livro.classList.add("livro")

    let livrinhoTit = document.createElement("h1")
    livrinhoTit.textContent = livros[propriedade]["titulo"]
    livro.appendChild(livrinhoTit)
    livrinhoTit.classList.add("livro__titulo")

    let livrinhoDesc = document.createElement("h3")
    livrinhoDesc.textContent = livros[propriedade]["quemEscreveu"]
    livro.appendChild(livrinhoDesc)
    livrinhoDesc.classList.add("livro__autoria")

    let livrinhoLink = document.createElement("a")
    livrinhoLink.setAttribute("href", livros[propriedade]["link"])
    livrinhoLink.setAttribute("target", "_blank")
    livrinhoLink.textContent = "Acesse aqui"
    livro.appendChild(livrinhoLink)
    livrinhoLink.classList.add("livro__link")

    let botaoLi = document.createElement("button")
    livro.appendChild(botaoLi)
    botaoLi.textContent = "Marcar como lido"
    botaoLi.classList.add("botao-lido")
    botaoLi.addEventListener("click", function(evento){
        if (livrinhoTit.classList.contains("livro__titulo--lido")){
            livrinhoTit.classList.remove("livro__titulo--lido")
            botaoLi.classList.remove("botao-lidored")
            botaoLi.textContent = "Marcar como lido"
        } else {
            livrinhoTit.classList.add("livro__titulo--lido")
            botaoLi.classList.add("botao-lidored")
            botaoLi.textContent = "Não li" 
        }     
    })


    // let botaoDesfazer = document.createElement("button")
    // livro.appendChild(botaoDesfazer)
    // botaoDesfazer.textContent = "Desfazer"
    // botaoDesfazer.classList.add("botao-desfazer")

    // botaoDesfazer.addEventListener("click", function(evento){
    //     livrinhoTit.classList.remove("livro__titulo--lido")
    // })

}


// for ( let propriedade in livros) {
//     let outroQualquer = document.querySelector(".lista-do-catalogo")
//     let livrinhos = document.createElement("li")
//     outroQualquer.appendChild(livrinhos)
//     filhinha.textContent = livros[propriedade]
// }

// livros ["1"]["titulo"]




// miraGato.forEach(function(item){
//     item.addEventListener("click", function(evento){
//         if (item.classList.contains("nao-gato")){
//             item.classList.remove("nao-gato")
//         } else {
//             item.classList.add("nao-gato")
//         }
//     })
    
// }); 


// if(livrinhoTit.classList.contains("livro__titulo--lido")) {
//     livrinhoTit.classList.remove("livro__titulo--lido")
//     botaoLi.classList.remove("botao-lido")
//     botaoLi.textContent = "Não li"

      
         
//   }else {
//       livrinhoTit.classList.add("livro__titulo--lido")
//       botaoLi.classList.add("botao-lidored")
//       botaoLi.textContent = "Já li"
      
      

      
      
      
//   }   