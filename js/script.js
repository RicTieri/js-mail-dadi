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

const usersList = ['tieri.riccardo@gmail.com']
let userMail 

document.querySelector('button').addEventListener('click', function(){
  userMail = document.getElementById('email_input').value
  for (let i = 0; i < usersList.length ; i++ ){
    if (usersList[i] === userMail){
      alert('Access Granted')
    } else {
      alert('Access Denied')
    }
  }
} )