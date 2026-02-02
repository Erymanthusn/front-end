'use strict'

const botaoTrocaCor = document.getElementById('botao-Troca-Cor')

function trocarCor(){
    const corUsuario = document.getElementById('cor-Usuario').value.toLowerCase().trim()
    document.documentElement.style.setProperty('--color-bg', corUsuario)
}

botaoTrocaCor.addEventListener('click', trocarCor)