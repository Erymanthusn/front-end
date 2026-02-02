'use strict'

const botaoTrocaCor = document.getElementById('botao-Troca-Cor')
const botaoVerde = document.getElementById('botao-Verde')
const botaoVermelho = document.getElementById('botao-Vermelho')

function trocarCor(){

let cor = document.getElementById('cor').value
if(cor == 'vermelho'){
    cor = 'Red'
}else if( cor == 'verde'){
    cor = "Green"
}else if( cor == 'azul'){
    cor = "Blue"
}else if( cor == 'roxo'){
    cor = "Purple"
}

if (botaoVerde == true) {
    document.documentElement.style.setProperty('--color-bg', 'green')
} else if (botaoVermelho == true){
    document.documentElement.style.setProperty('--color-bg', 'red')
}

    document.documentElement.style.setProperty('--color-bg', cor)

}

function trocarCorVermelho(){
    
     document.documentElement.style.setProperty('--color-bg', 'red')
    
}
function trocarCorVerde(){
    
    document.documentElement.style.setProperty('--color-bg', 'green')
   
}

botaoTrocaCor.addEventListener('click', trocarCor)
botaoVerde.addEventListener('click', trocarCorVerde)
botaoVermelho.addEventListener('click', trocarCorVermelho)
