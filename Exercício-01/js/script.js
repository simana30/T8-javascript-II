const panela = ["Simara","Tais","Barbara", "Manu", "Raissa", "Aline", "Lia"];
 //capturar "ul"
let minhaDiv = document.getElementById("lista-alunas")
//percorrer array
for (let i=0;i<panela.length;i++) {
    //criar lista
    let aluninhas = document.createElement("li")
    //colocar conteudo
    aluninhas.textContent = panela[i]
   
    //inserir "li" na "ul"
    minhaDiv.appendChild(aluninhas)
}

//criar e contar um evento 

//mirei a tag e to capturando valor (pega apenas o primeiro elemento com esse nome)
const meuTitulo = document.querySelector(".titulo")

//escutar evento no elemento

let soma = 0;

    meuTitulo.addEventListener("click",function logar(){
        console.log(soma++)
    }
);
