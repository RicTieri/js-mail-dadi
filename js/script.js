// esercizio dadi

const playerOne = Math.floor(Math.random() * 6) +1
const pcGame = Math.floor(Math.random() * 6) + 1


if (playerOne > pcGame) {
  console.log(playerOne, pcGame, 'The winner is the Player')
} else if (pcGame > playerOne){
  console.log(playerOne, pcGame, 'The winner is the PC')
} else {
  console.log(playerOne, pcGame, 'Draw')
}

// esercizio mail

const usersList = []
let userMail 

document.querySelector('button').addEventListener('click', function(){
  userMail = document.getElementById('email_input').value
  console.log(userMail)
} )