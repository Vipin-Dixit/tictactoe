export default function Logs({ gameTurns }) {
  return (
    <ol id="log">
      {gameTurns.map((gameturn) => (
        <li key={`${gameturn.state.row}${gameturn.state.col}`}>
          {gameturn.player} selected {gameturn.state.row},{gameturn.state.col}
        </li>
      ))}
    </ol>
  );
}
