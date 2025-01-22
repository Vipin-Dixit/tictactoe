import { useState } from "react";
import "./Player.css";
export default function Player({ playerName, playerSymbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(playerName);
  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };

  const handleOnChange = (event) => {
    setName(event.target.value);
  };

  let playerNamePlaceHolder = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerNamePlaceHolder = (
      <input
        className="player-name"
        type="text"
        value={name}
        required
        onChange={handleOnChange}
      />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNamePlaceHolder}

        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save " : "Edit"}</button>
    </li>
  );
}
