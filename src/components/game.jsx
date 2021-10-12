import React, { useState, useEffect } from "react";
import classes from "../Game-Functions/classes";
import weapons from "../Game-Functions/equipment";
import { armor } from "../Game-Functions/equipment";
import "./game.css"
//import equipment and map through them to select and add to player

//set a box that displays

const Game = () => {
  const [activeClass, setClass] = useState([{}]);
  const [activeWeapon, setWeapon] = useState([{}]);
  const [activeArmor, setArmor] = useState([{}]);

  const playerName = localStorage.getItem("playerName");
  const playerClass = localStorage.getItem("playerClass");
  const playerWeapon = localStorage.getItem("playerWeapon");
  const playerArmor = localStorage.getItem("playerArmor");

  const currentClass = classes.filter((classes) => {
    if (classes.name === playerClass) {
      return classes;
    }
    return null;
  });

  const currentWeapon = weapons.filter((weapon) => {
    if (weapon.name === playerWeapon) {
      return weapon;
    }
    return null;
  });

  const currentArmor = armor.filter((armor) => {
    if (armor.name === playerArmor) {
      return armor;
    }
    return null;
  });

  useEffect(() => {
    const newClass = () => {
      console.log(currentClass)
      setClass(currentClass);
    };
    const newWeapon = () => {
      setWeapon(currentWeapon);
    };
    const newArmor = () => {
      setArmor(currentArmor);
    };
    newClass();
    newWeapon();
    newArmor();
  }, []);

  let player = {};

  const setPlayer = () => {
    player.name = playerName;
    player.class = activeClass
    player.weapon = activeWeapon;
    player.armor = activeArmor;
  };

  setPlayer();
  console.log(player)

  return (
    <div className="gameBoard">
      <div>Welcome {playerName}</div>
      <div>Class {playerClass}</div>
      <div>Weapon {playerWeapon}</div>
      <div>Armor {playerArmor}</div>
      <div>Current Class{activeClass[0].name}</div>
      <div>
        <h1>Current Weapon Stats</h1>
        <p>Damage: {weapons[0].damage}</p>
      </div>
    </div>
  );
};

export default Game;
