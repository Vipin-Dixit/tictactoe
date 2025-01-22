import "./GameBoard.css";

export default function GameBoard({ onSeletSquare, gameBoard }) {
  return (
    <ol id="game-board">
      {gameBoard.map((rowValue, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {rowValue.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => {
                    onSeletSquare(rowIndex, colIndex);
                  }}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
