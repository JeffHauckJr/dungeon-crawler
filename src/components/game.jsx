import React from "react";
import classes from "../Game-Functions/classes";
import weapons from "../Game-Functions/equipment";
//import equipment and map through them to select and add to player

//set a box that displays

const Game = () => {
  const playerName = localStorage.getItem("playerName");
  const playerClass = localStorage.getItem("playerClass");
  const playerWeapon = localStorage.getItem("playerWeapon");
  const playerArmor = localStorage.getItem("playerArmor");

  const currentClass = classes.filter((classes) => {
    if (classes.name === playerClass) {
      return classes;
    }
  });

  const currentWeapon = weapons.filter((weapon) => {
      if (weapon.name === playerWeapon) {
          return [weapon]
      }
  })

  console.log(currentClass)
  console.log(currentWeapon)

  return (
    <>
      <div>Welcome {playerName}</div>
      <div>Class {playerClass}</div>
      <div>Weapon {playerWeapon}</div>
      <div>Armor {playerArmor}</div>
      <div>Current Class{currentClass[0].name}</div>
      <div>
          <h1>Current Weapon Stats</h1>
          <p>Damage: {weapons[0].damage}</p>

      </div>
    </>
  );
};

export default Game;
