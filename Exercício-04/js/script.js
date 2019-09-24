let pinguim = {
	"nome": "Dengo",
	"idade": 10,
	"origem": "Pinguins do Papai"
}

pinguim.andar = function() {
    console.log("andou")
}

pinguim.podeVoar = true

pinguim.voar = function() {
    if (this.podeVoar==true) {
        console.log(this.podeVoar)
    } else {
        console.log("O Dengo não voa!")
    }

}

pinguim
