import React from "react";
import Player from "./Player";

function PlayerList(props) {
const players = props.playerData.map(player => <Player key={player.gamerTag} {...player} />);

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {players}
    </section>
  );
}

export default PlayerList;