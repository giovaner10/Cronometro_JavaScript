let h = 0
let m = 0
let s = 0
let cron

let ARR = [0]

let espaco = document.querySelector('#resultados')


function Computar(){

    espaco.innerHTML = ''

    let tempo = document.querySelector('#display')

    ARR.push(tempo.innerHTML)
    console.log(ARR, tempo)
    

    for(let i = 1 ; i <= ARR.length ; i++){
        espaco.innerHTML += `${i} - ${ARR[i]} <br>`


    }


}
function corrigirTempo(tempo) {
    if (tempo < 10) {
        tempo = '0' + tempo
    }
    return tempo

}

function iniciar() {
    cron = setInterval(timer, 1)
}

//pausa o cron
function Pausar() {
    clearInterval(cron)
   

}

//resesta o cron
function Parar(){
    clearInterval(cron)

    h = 0
    m = 0
    s = 0
    let tempo = document.querySelector('#display')
    tempo.innerHTML = '00:00:00'
    ARR = [0]
    espaco.innerHTML = ''


}

function timer() {
    s++
    if (s == 60) {
        s = 0
        m++
        if (m == 60) {
            m = 0
            h++
        }
    }

    let tempo = document.querySelector('#display')
    tempo.innerHTML = `${corrigirTempo(h)}:${corrigirTempo(m)}:${corrigirTempo(s)}`

}