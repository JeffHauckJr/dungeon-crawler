import React, { useState } from "react";
import "./home.css"

const Home = () => {
  const [playerName, setPlayerName] = useState("");
  const [playerWeapon, setPlayerWeapon] = useState([])
  const [playerArmor, setPlayerArmor] = useState([])
  const handleNameChange = (event) => {
      event.preventDefault()
      setPlayerName(event.target.value)
          }

  const handleWeaponSelection = (event) => {
    event.preventDefault()

  }

  const handleSubit = (e) => {
    localStorage.setItem("playerName", playerName)
    e.preventDefault()
    window.location.href='/game'
    
  }

  return (
    <div>
      <h1>Build Your Character</h1>
      <form className="createForm">
        <label>Character Name</label>
        <input type="text" id="chaName" onChange={(e) => handleNameChange(e)}></input>
        <label>Choose Weapon</label>
        <select type="text" id="chaName" >
          <option></option>
        </select>
        <label>Choose Armor</label>
        <select type="text" id="chaName" ></select>
        <input type="submit" onClick={(e) => handleSubit(e)}></input>
      </form>
    </div>
  );
};

export default Home;
