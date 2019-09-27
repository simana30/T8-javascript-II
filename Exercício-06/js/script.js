





const formulario = document.getElementById("form")
const tabela = document.querySelector(".extrato__table")

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    let nome = document.getElementById("transacaoInputNome")
    let info1 = nome.value
    
    

    let valor = document.getElementById("transacaoInputValor")
    let info2 = valor.value
    


    let data = document.getElementById("transacaoInputData")
    let info3 = data.value
   


    console.log(info1,info2,info3)    

    const novaLinha = document.createElement("tr")
    tabela.appendChild(novaLinha)

    const novoNome = document.createElement("td")
    novaLinha.appendChild(novoNome)
    novoNome.textContent = info1
    
    const novoValor = document.createElement("td")
    novaLinha.appendChild(novoValor)
    novoValor.textContent = info2

    const novaData = document.createElement("td")
    novaLinha.appendChild(novaData)
    novaData.textContent = info3
})

