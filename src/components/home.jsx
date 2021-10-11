import React, { useState } from "react";
import { armor } from "../Game-Functions/equipment";
import "./home.css";
import weapons from "../Game-Functions/equipment";
import classes from "../Game-Functions/classes";

const Home = () => {
  const [playerName, setPlayerName] = useState("");
  const [playerClass, setPlayerClass] = useState([]);
  const [playerWeapon, setPlayerWeapon] = useState([]);
  const [playerArmor, setPlayerArmor] = useState([]);

  const handleNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handleClassSelection = (event) => {
    setPlayerClass(event.target.value);
  };

  const handleWeaponSelection = (event) => {
    setPlayerWeapon(event.target.value);
  };

  const handleArmorSelection = (event) => {
    setPlayerArmor(event.target.value);
  };

  const handleSubit = (e) => {
    localStorage.setItem("playerName", playerName);
    localStorage.setItem("playerClass", playerClass);
    localStorage.setItem("playerWeapon", playerWeapon);
    localStorage.setItem("playerArmor", playerArmor);
    e.preventDefault();
    window.location.href = "/game";
  };

  return (
    <div>
      <h1>Build Your Character</h1>
      <form className="createForm">
        <label>Character Name</label>
        <input
          type="text"
          id="chaName"
          onChange={(e) => handleNameChange(e)}
        ></input>
        <label>Choose Class</label>
        <select
          type="text"
          id="chaName"
          onClick={(event) => handleClassSelection(event)}
        >
          <option></option>
          {classes.map((classes, index) => (
            <option key={index}>{classes.name}</option>
          ))}
        </select>
        <label>Choose Weapon</label>
        <select
          type="text"
          id="chaName"
          onClick={(event) => handleWeaponSelection(event)}
        >
          <option></option>
          {weapons.map((weapon, index) => (
            <option key={index}>{weapon.name}</option>
          ))}
        </select>
        <label>Choose Armor</label>
        <select
          type="text"
          id="chaName"
          onClick={(event) => handleArmorSelection(event)}
        >
          <option></option>
          {armor.map((armor, index) => (
            <option key={index}>{armor.name}</option>
          ))}
        </select>
        <input type="submit" onClick={(e) => handleSubit(e)}></input>
      </form>
    </div>
  );
};

export default Home;
