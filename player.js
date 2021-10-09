// turn 1 is player turn 2 is enemy
let turn = 1;

let player = {};
let enemy = {};


const startFight = () => {
  const sword = {
    name: "sword",
    damage: 20,
    type: "slicing",
    hit: 16,
  };

  player.name = "Chris";
  player.health = 50;
  player.equipment = [{
      name: "Poison Spell",
      damage: 12
  }];
  player.strength = 6;
  player.ac = 12;

  //create different equipment that add on to stats such as health etc

  enemy.name = "Macho Man Randy Savage";
  enemy.health = 75;
  enemy.equipment = [{
      name: 'Steel Chair',
      damage: 15
  }];
  enemy.strength = 10;
  enemy.ac = 15;
};

//Run through if else statments until a health bar === 0

// let timerId = setInterval(() => console.log('tick'), 2000);

// // after 5 seconds stop
// setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);

// const function1 = () => {
//     console.log("Function 1")
// }

// const function2 = () => {
//     console.log("Function 2")
// }

// setTimeout(function() {
//     function1() // runs first

//     // runs second
//   }, 1000)

// const object1 = { property1: "Value 1" };
// const object2 = { property2: "Value 2" };

// const listOfObjects = [object1, object2];
// const copyOfListOfObjects = [...listOfObjects];

// function updateObjects(objects) {
//   return objects.map((object) => {
//     Object.keys(object).forEach((property) => {
//       object[property] = "Updated value";
//     });

//     return object;
//   });
// }

// const listOfUpdatedObjects = updateObjects(listOfObjects);

// console.log(listOfObjects);
// console.log(copyOfListOfObjects);
// console.log(listOfUpdatedObjects);

const simpleCombat = () => {
  let combatInterval = setInterval(function () {
    if (turn === 1) {
      let acRoll = Math.floor(Math.random() * 20) + player.strength;
      console.log(`${player.name} attacks with a ${player.equipment[0].name}`);
      if (player.health > 0) {
        if (acRoll >= enemy.ac) {
          if (player.equipment[0].damage >= enemy.health) {
            console.log(`${player.name} has slain ${enemy.name}`);
            clearInterval(combatInterval);
          } else {
            enemy.health = enemy.health - player.equipment[0].damage;
            turn = 2;
            console.log(`${enemy.name} is looking hurt`, enemy.health);
          }
        } else {
          console.log(`${enemy.name} has dodged ${player.name}'s attack`);
          turn = 2;
        }
      }
    } else {
      if (enemy.health > 0) {
        let acRoll = Math.floor(Math.random() * 20);
        console.log(`${enemy.name} attacks with a ${enemy.equipment[0].name}`);
        if (acRoll >= player.ac) {
          if (enemy.equipment[0].damage >= player.health) {
            console.log(`${enemy.name} has slain ${player.name}`);
            clearInterval(combatInterval);
          } else {
            player.health = player.health - enemy.equipment[0].damage;
            turn = 1;
            console.log(`${player.name} is looking hurt`, player.health);
          }
        } else {
          console.log(`${player.name} has dodged ${enemy.name}'s attack`);
          turn = 1;
        }
      }
    }
  }, 3000);

  return combatInterval;
};

startFight();
simpleCombat();
