setInterval(setRelogio, 1000)

const horaMotor = document.querySelector('[data-hora-motor]')
const minutoMotor = document.querySelector('[data-minuto-motor]')
const segundoMotor = document.querySelector('[data-segundo-motor]')

function setRelogio() {
    const tempoReal = new Date()
    const taxaSegundos = tempoReal.getSeconds() / 60
    const taxaMinutos = (taxaSegundos + tempoReal.getMinutes()) / 60
    const taxaHoras = (taxaMinutos + tempoReal.getHours()) / 12
    setRotacao(segundoMotor, taxaSegundos)
    setRotacao(minutoMotor, taxaMinutos)
    setRotacao(horaMotor, taxaHoras)
}

function setRotacao(element, taxaRotacao)  {
    element.style.setProperty('--rotation', taxaRotacao * 360)
}

setRelogio()