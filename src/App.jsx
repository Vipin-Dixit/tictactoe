import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Logs from "./components/Logs";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const derivedActivePlayer = (gameTurns) => {
  let activePlayer = "X";
  if (gameTurns.length && gameTurns[0].player === "X") {
    activePlayer = "O";
  }
  return activePlayer;
};

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = derivedActivePlayer(gameTurns);

  const gameBoard = initialGameBoard.map(array=>[...array]);

  for (const gameTurn of gameTurns) {
    const { state, player } = gameTurn;
    const { row, col } = state;
    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  const isDraw = !winner && gameTurns.length === 9;
  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevGameTurns) => {
      let activePlayer = derivedActivePlayer(prevGameTurns);
      const updateGameTurns = [
        { state: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevGameTurns,
      ];
      return updateGameTurns;
    });
  };
  const handleGameRestart = () => {
    setGameTurns([]);
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            playerName="player 1"
            playerSymbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            playerName="player 2"
            playerSymbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {(winner || isDraw) && (
          <GameOver winner={winner} onRestart={handleGameRestart} />
        )}
        <GameBoard onSeletSquare={handleSelectSquare} gameBoard={gameBoard} />
      </div>
      <Logs gameTurns={gameTurns} />
    </main>
  );
}

export default App;