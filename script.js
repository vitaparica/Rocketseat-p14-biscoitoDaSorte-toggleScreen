//variables
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const fortuneCookie = document.querySelector("#fortuneCookie")
const tryAgain = document.querySelector("#tryAgain")

const fortune = [
  `"A vida trará coisas boas se tiver paciência."`, 
  `"Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si."`, 
  `"Não compense na ira o que lhe falta na razão."`, 
  `"Defeitos e virtudes são apenas dois lados da mesma moeda."`, 
  `"A maior de todas as torres começa no solo."`, 
  `"Não há que ser forte. Há que ser flexível."`, 
  `"Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?"`, 
  `"Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida."`, 
  `"A juventude não é uma época da vida, é um estado de espírito."`, 
  `"Podemos escolher o que semear, mas somos obrigados a colher o que plantamos."`
]

//Events
fortuneCookie.addEventListener('click', handleTryClick)
tryAgain.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
  if(e.key == 'Enter' && screen2.classList.contains('hide')){
      handleTryClick()
  } else if(e.key == 'Enter' && screen1.classList.contains('hide')){
      handleResetClick()
      }      
  }
)

//Funções callback
function handleTryClick() {
  toggleScreen()
  pickFortune()
}

function handleResetClick() {
  toggleScreen()
}

function pickFortune() {
  let allFortunes = fortune.length
  let randomNumber = Math.floor(Math.random() * allFortunes)  
  screen2.querySelector("h2").innerText = `${fortune[randomNumber]}`
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}