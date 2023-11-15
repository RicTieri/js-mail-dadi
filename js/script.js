const playerOne = Math.floor(Math.random * 6) + 1
const pcGame = Math.floor(Math.random * 6) + 1

console.log(playerOne)

if (playerOne > pcGame) {
  console.log(playerOne, pcGame, 'the winner is the Player')
} else if (pcGame > playerOne){
  console.log(playerOne, pcGame, 'the winner is the PC')
}