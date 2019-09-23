

//mirei o gato 
//const miraGato = document.querySelector(".item__imagem")
//escutar evento no elemento


    //item__imagem.RemoveEventListener("click",function logar(){});



//mirei todos os gatos



//mirei o gato
const miraGato = document.querySelectorAll(".item__imagem")

//Escutar o evento click e tomar ação de remover gato em cada item da coleção que retorna da const miragato

for (let i= 0; i<miraGato.length; i++){
    miraGato[i].addEventListener("click", function(evento){
    miraGato[i].classList.add("nao-gato")
    console.log(evento)
    })

}
