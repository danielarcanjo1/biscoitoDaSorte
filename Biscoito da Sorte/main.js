const openCookie = document.querySelector(".fortuneCookie")
const breakCookie = document.querySelector(".openedCookie")
const cookie = document.querySelector(".cookie1")
const resetButton = document.querySelector("#resetButton")

const arrayFrases = ["O SENHOR é o meu pastor, nada me faltarSalmos 23:1", 
                    "Deitar-me faz em verdes pastos, guia-me mansamente a águas tranqüilas. Salmos 23:2",
                    "Refrigera a minha alma; guia-me pelas veredas da justiça, por amor do seu nome. Salmos 23:3",
                    "Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam. Salmos 23:4",
                    "Preparas uma mesa perante mim na presença dos meus inimigos, unges a minha cabeça com óleo, o meu cálice transborda. Salmos 23:5",
                    "Certamente que a bondade e a misericórdia me seguirão todos os dias da minha vida; e habitarei na casa do Senhor por longos dias. Salmos 23:6",
                    "Deus meu, Deus meu, por que me desamparaste? Por que te alongas do meu auxílio e das palavras do meu bramido? Salmos 22:1",
                    "Deus meu, eu clamo de dia, e tu não me ouves; de noite, e não tenho sossego. Salmos 22:2",
                    "Porém tu és santo, tu que habitas entre os louvores de Israel. Salmos 22:3",
                    "Em ti confiaram nossos pais; confiaram, e tu os livraste. Salmos 22:4",
                    "A ti clamaram e escaparam; em ti confiaram, e não foram confundidos.  Salmos 22:5"]

//let randomNumber = arrayFrases[Math.round(Math.random()*10)]

function fortuneCookie(event) {
    event.preventDefault()
    cookieToggle()
    sorteioFrase()
}
    
function cookieToggle(){
    openCookie.classList.toggle("hide")
    breakCookie.classList.toggle("hide")
}

function sorteioFrase(){
    breakCookie.querySelector("#pAnimation").innerText = arrayFrases[Math.round(Math.random()*10)]
    
}

cookie.addEventListener('click',fortuneCookie)
resetButton.addEventListener('click', fortuneCookie)
