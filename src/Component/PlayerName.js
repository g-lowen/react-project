import "./PlayerName.css";
import { useState } from "react";

function PlayerName() {
  const [playerName, setPlayerName] = useState("");

  function onChangeHandler(event) {
    console.log(event.target.value);
  }
  return (
    <form className="PlayerName">
      Add player
      <input placeholder="Player name" onChange={onChangeHandler} />
      <input type="submit" value={playerName} />
    </form>
  );
}

export default PlayerName;
