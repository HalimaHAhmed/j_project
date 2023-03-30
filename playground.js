// operators

// fruit = prompt('what is your favorite fruit')

// console.log(fruit)

// food = prompt('how much was the food')
// tippercentage = prompt('tip %?')/100
// tipAmount = food*tippercentage
// total = food + tipAmount
// console.log(tipAmount)
// console.log(total)

// // weather app in js

// let weather

// if(weather == 'rain'){
// console.log('Grab your umbrella ☔')

// }else{
//     console.log('wear your sunclasses 😎')
// }

// functions
// function saymyname(){
//     console.log('halimah')
// }

// saymyname()
console.log('hello')

let titleDiv = document.getElementById('title')

console.log('before: ', titleDiv.innerText)

let message = 'Square Color Counter 🚀'

titleDiv.innerText = message;

console.log('after: ', titleDiv.innerText)

titleDiv.innerHTML = `<p>${message}</p>`

titleDiv.style.backgroundColor = 'blue'

const squares = document.querySelectorAll('.colorSquare')

// forEach
const timesClicked = {'red': 0, 'yellow': 0, 'green': 0}
squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value] += 1
    square.innerText = timesClicked[square.value]
  }
})
function clearScores() {
  timesClicked.red = 0
  timesClicked.yellow = 0
  timesClicked.green = 0
  squares.forEach(square => {
    square.innerText = ''
  })
}

const clearGameBtn = document.getElementById('clear-game')
clearGameBtn.onclick = () => clearScores()