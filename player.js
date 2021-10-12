// turn 1 is player turn 2 is enemy
let turn;
let player = {};
let enemy = {};
let winner;
player.name = "John";
enemy.name = "Jane";

const startFight = () => {
  //player stats
  player.totalHealth = 50;
  player.currentHealth = 50;
  player.equipment = [
    {
      name: "Claymore",
      damage: 20,
    },
  ];
  player.attackBonus = 3;
  player.ac = 14;
  //enemy stats
  enemy.totalHealth = 50;
  enemy.currentHealth = 50;
  enemy.equipment = [
    {
      name: "Rapier",
      damage: 10,
    },
  ];
  enemy.attackBonus = 6;
  enemy.ac = 15;
};
//coin flip for first turn
let coin = Math.floor(Math.random() * 2);
if (coin === 1) {
  turn = 1;
  console.log(`${player.name} goes first`);
} else {
  turn = 2;
  console.log(`${enemy.name} goes first`);
}

//combat sequence
const simpleCombat = () => {
  let combatInterval = setInterval(function () {
    //if players turn
    if (turn === 1) {
      //rolling to hit enemy
      let acRoll = Math.floor(Math.random() * 20) + player.attackBonus;
      console.log(`${player.name} attacks with a ${player.equipment[0].name}`);
      //checking if player is alive
      if (player.currentHealth > 0) {
        //checking if you hit enemy ac
        if (acRoll >= enemy.ac) {
          //checking if attack kills declares winner
          if (player.equipment[0].damage >= enemy.currentHealth) {
            console.log(`${player.name} has slain ${enemy.name}`);
            winner = player.name;
            simpleAfterCombat();
            clearInterval(combatInterval);
            //taking damage from attack changing turns
          } else {
            enemy.currentHealth =
              enemy.currentHealth - player.equipment[0].damage;
            turn = 2;
            console.log(`${enemy.name} was hit`, enemy.currentHealth);
          }
          //if attack roll misses changing turns
        } else {
          console.log(`${enemy.name} has dodged ${player.name}'s attack`);
          turn = 2;
        }
      }
      //if enemy turn
    } else {
      //checking if enemy is alive
      if (enemy.currentHealth > 0) {
        let acRoll = Math.floor(Math.random() * 20) + enemy.attackBonus;
        //rolling for attack
        console.log(`${enemy.name} attacks with a ${enemy.equipment[0].name}`);
        //if attack hits plaayer
        if (acRoll >= player.ac) {
          //checking if attack kills declares winner
          if (enemy.equipment[0].damage >= player.currentHealth) {
            console.log(`${enemy.name} has slain ${player.name}`);
            winner = enemy.name;
            simpleAfterCombat();
            clearInterval(combatInterval);
            //taking damage from attack and changing turns
          } else {
            player.currentHealth =
              player.currentHealth - enemy.equipment[0].damage;
            turn = 1;
            console.log(`${player.name} was hit`, player.currentHealth);
          }
          //if attack misses and turn changes
        } else {
          console.log(`${player.name} has dodged ${enemy.name}'s attack`);
          turn = 1;
        }
      }
    }
  }, 3000);

  return combatInterval;
};

const simpleAfterCombat = () => {
  //checking if player won
  if (winner === player.name) {
    console.log(`${player.name} has gained some experience`);
    console.log(`${enemy.name} has dropped their ${enemy.equipment[0].name}`)
    //if player lost
  } else if (winner === enemy.name) {
    console.log(`You have been defeated`);
  }
};

startFight();
simpleCombat();
