const panela = ["Simara","Tais","Barbara", "Manu", "Raissa", "Aline", "Lia"];
 //capturar "ul"
let minhaDiv = document.getElementById("primeira-section")
//percorrer array


document.addEventListener("scroll", function(evento){
    if(!(document.querySelectorAll("li").length == panela.length)){
        for (let i=0;i<panela.length;i++) {
            let aluninhas = document.createElement("li")
            aluninhas.textContent = panela[i]
            minhaDiv.appendChild(aluninhas)
        }
    } 
})


    

    























