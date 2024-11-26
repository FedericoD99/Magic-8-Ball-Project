
// Get user Name
let userName = prompt("Hello, what is your name?"); 


let responseImg = document.getElementById('response-img')
let responseText = document.getElementById('response-text')
let greeting = document.getElementById('greeting')

// Input user name to website
userName
? (greeting.innerText=`Hello, ${userName}!`) 
: (greeting.innerText='Hello Stranger!')






function shakeMagic8Ball(){
// Get user Question
let userQuestion = prompt('What do you want to ask the 8 ball?')



//DO NOT TOUCH THIS CODE!
let randomNumber = Math.floor(Math.random() * 8); 

let eightBall = ''
let imageChoice=''

if (randomNumber === 0) {
  eightBall = 'It is certain'
  imageChoice ='image1.jpg'

}  else if (randomNumber === 1) {
  eightBall = 'It is decidedly so'
} else if (randomNumber === 2) {
  eightBall = 'Reply hazy try again'
} else if (randomNumber === 3) {
  eightBall = 'Cannot predict now'
} else if (randomNumber === 4) {
  eightBall = 'Do not count on it'
} else if (randomNumber === 5) {
  eightBall = 'My sources say no'
} else if (randomNumber === 6) {
  eightBall = 'Outlook not so good'
} else if (randomNumber === 7) {
  eightBall = 'Signs point to yes'
} 

console.log(eightBall)
responseText.innerText =`${userName} hs asked ${userQuestion} to the almighty 8 Ball. The 8 ball has replied ${eightBall}!`

responseImg.src =imageChoice

}