

//mirei o gato 
//const miraGato = document.querySelector(".item__imagem")
//escutar evento no elemento


    //item__imagem.RemoveEventListener("click",function logar(){});



//mirei todos os gatos



//mirei o gato
const miraGato = document.querySelectorAll(".item__imagem")

//Escutar o evento click e tomar ação de remover gato em cada item da coleção que retorna da const miragato

// for (let i= 0; i<miraGato.length; i++){
//     miraGato[i].addEventListener("click", function(evento){
//         miraGato[i].classList.add("nao-gato")
        
               
//         console.log(evento)
//     })



// }

//Escutar o evento double click e tomar ação de add gato em cada item da coleção que retorna da const miragato
// for (let i= 0; i<miraGato.length; i++){
//     miraGato[i].addEventListener("dblclick", function(evento){
//         miraGato[i].classList.remove("nao-gato")
            
                   
//             console.log(evento)
//      })

// }
//com condicional em for

// for (let i= 0; i<miraGato.length; i++){
//     miraGato[i].addEventListener("click", function(evento){
//         if (miraGato[i].classList.contains("nao-gato")){
//             miraGato[i].classList.remove("nao-gato")
//         } else {
//         miraGato[i].classList.add("nao-gato")
//         }       
//         console.log(evento)
//     })

// }


//com condicional em forEach
miraGato.forEach(function(item){
    item.addEventListener("click", function(evento){
        if (item.classList.contains("nao-gato")){
            item.classList.remove("nao-gato")
        } else {
            item.classList.add("nao-gato")
        }
    })
    
}); 
