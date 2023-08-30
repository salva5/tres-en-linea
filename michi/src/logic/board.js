import winnerCombo from "./constants"

export const checkWinner = (chekBoard) => {
  for (const combo of winnerCombo){
    const [a,b,c] = combo
    if(chekBoard[a] && chekBoard[a] === chekBoard[b] && chekBoard[a] === chekBoard[c]) {
        return chekBoard[a]
    }
  }
  return null;
}
export const checkEndGame = (chekBoard) => {
  return chekBoard.every(el => el !== null)
}
