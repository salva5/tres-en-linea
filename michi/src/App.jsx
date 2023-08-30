
import "./App.css"
import "./index.css"
import confetti from "canvas-confetti"
import {turns} from "./constants"
import { checkWinner, checkEndGame } from "./logic/board"
import Winner from "./components/winner"
import Board from "./components/board"
import Turns from "./components/turns"
import { useState } from 'react'


function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn , setTurn] = useState(turns.X)
  const [winner, setWinner] = useState(null)
  
  const updateBoard = (index) => {
    if(board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === turns.X ? turns.O : turns.X    
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner){
      confetti() 
      setWinner(newWinner)
    }
    else if(checkEndGame(newBoard)) setWinner(false)
  } 
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(turns.X)
    setWinner(null)
  }
  return (
    <main className="board">
      <h1>3 en raya</h1>
      <button onClick={resetGame}>reset</button>
      <Board board= {board} updateBoard = {updateBoard}/>
      <Turns turn = {turn}/>
      <Winner winner={winner} resetGame= {resetGame}/>
     
    </main>
  )
}

export default App
