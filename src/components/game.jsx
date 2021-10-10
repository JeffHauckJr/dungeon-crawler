import React, { useEffect, useState } from "react";

//import equipment and map through them to select and add to player

//set a box that displays

const Game = () => {
  const playerName = localStorage.getItem("playerName");

  return <div>Welcome {playerName}</div>;
};

export default Game;
