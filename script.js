// Get user Name
let userName = prompt("Hello, what is your name?"); 
// Input user name to website
userName? document.getElementById('greeting').innerText=`Hello, ${userName}!` : document.getElementById('greeting').innerText='Hello Stranger!'


function shakeMagic8Ball(){


// Get user Question
let userQuestion = 'Will I become a successful developer?'; 

console.log(`${userName === '' ? 'User' : userName} asked: ${userQuestion}`); 

//DO NOT TOUCH THIS CODE!
let randomNumber = Math.floor(Math.random() * 8); 

let eightBall = ''; 

if (randomNumber === 0) {
  eightBall = 'It is certain';
} else if (randomNumber === 1) {
  eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
  eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
  eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
  eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
  eightBall = 'My sources say no';
} else if (randomNumber === 6) {
  eightBall = 'Outlook not so good';
} else if (randomNumber === 7) {
  eightBall = 'Signs point to yes';
} 

console.log(`The Magic Eight Ball says: ${eightBall}`); 
}