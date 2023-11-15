const playerOne = Math.floor(Math.random() * 6) +1
const pcGame = Math.floor(Math.random() * 6) + 1


if (playerOne > pcGame) {
  console.log(playerOne, pcGame, 'The winner is the Player')
} else if (pcGame > playerOne){
  console.log(playerOne, pcGame, 'The winner is the PC')
} else {
  console.log(playerOne, pcGame, 'Draw')
}