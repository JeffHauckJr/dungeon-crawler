
let player = {}

const sword = {
    name: 'sword',
    damage: 20,
    type: "slicing",
    hit: 16 
}

player.name = "Jeff"
player.health = 50
player.equipment = [sword]
player.strength = 10
player.ac = 15

//create different equipment that add on to stats such as health etc 


let enemy = {}

enemy.name = "Peter"
enemy.health = 50
enemy.equipment = [sword]
enemy.strength = 10
enemy.ac = 15

console.log(player)
console.log(enemy)

const simpleCombat = () => {
    if (player.equipment[0].damage >= enemy.health) {
        console.log(`${enemy.name} can no longer battle`)
    } else {
        console.log("error")
    }
   
}

simpleCombat()

// let timerId = setInterval(() => console.log('tick'), 2000);

// // after 5 seconds stop
// setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);


const function1 = () => {
    console.log("Function 1")
}


const function2 = () => {
    console.log("Function 2")
}


setTimeout(function() {
    function1() // runs first
    
    // runs second
  }, 1000)