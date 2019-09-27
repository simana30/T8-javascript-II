let pinguim = {
	"nome": "Dengo",
	"idade": 10,
	"origem": "Pinguins do Papai"
}

pinguim.andar = function() {
    console.log("andou")
}

pinguim.podeVoar = false

pinguim.voar = function() {
    if (this.podeVoar) {
        console.log('Voou')
    } else {
        console.log("O Dengo não voa!")
    }

}

pinguim
