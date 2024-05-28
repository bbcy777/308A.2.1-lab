// //Part 1: Humble Beginnings
// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat"
//     }
// }
// adventurer.inventory.forEach(inventory => {
//     console.log(inventory);
// })

// adventurer.companion.companion = {
//     name: 'Frank',
//     type: 'Flea',
//     belongings: ['hat', 'sunglasses']
// }

// adventurer.roll = function(mod = 0) {
//     const result = Math.floor(Math.random() * 20) + 1 + mod;
//     console.log(`${this.name} rolled a ${result}.`)
// };
    
// adventurer.roll();

// Part 2: Class Fantasy
class Character{
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        return result;
        // console.log(`${this.name} rolled a ${result}.`);
    }
    static MAX_HEALTH = 100;
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// console.log(robin);
// robin.companion.roll();
// robin.companion.companion.roll();

//Part 3: Class Features
class Adventurer extends Character {
    static ROLES = [`Fighter`, `Healer`, `Wizard`];
    constructor (name, role) {
        super(name);
        // Adventurers have specialized roles.
        if(!Adventurer.ROLES.includes(role)) {
            throw new Error(`Invalid role. Role must be of: ${Adventurer.ROLES.join(`, `)}`);
        }
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
        this.companion = new Companion();
        this.companion.companion = new Companion();
    }
      // Adventurers have the ability to scout ahead of them.
    scout () {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
    //create an additional method, duel(), with an Adventurer as a parameter.
    duel(opponent) {
        while(this.health > 50 && opponent.health > 50) {
            //Use the roll() functionality to create opposing rolls for each adventurer.
            const playerRoll = this.roll();
            const opponentRoll = opponent.roll();

            // Log the results of this “round” of the duel, including the rolls and current health values.
            console.log(`${this.name} has rolled ${playerRoll}. ${this.health}`);
            console.log(`${opponent.name} has rolled ${opponentRoll}. ${opponent.health}`)

            //Subtract 1 from the adventurer with the lower roll.
            if (playerRoll < opponentRoll) {
                this.health -= 1;
                console.log(`${opponent.name} win this round. Health is ${opponent.health}`);
            } else if (opponentRoll < playerRoll) {
                opponent.health -= 1;
                console.log(`${this.name} win this round. Health is ${this.health}`);
            } else {
                console.log(`It's tied.`);
            }
        }

        // Repeat this process until one of the two adventurers reaches 50 health.
        // Log the winner of the duel: the adventurer still above 50 health.
        if (this.health <= 50) {
            console.log(`${opponent.name} still above 50 health and win the due!`);
        } else {
            console.log(`${this.name} still have 50 health and win the due!`);
        }

        
    }
}

class Companion extends Character{
    constructor(name, type){
        super(name);
        this.type = type;
    }
}

const Robin = new Adventurer(`Robin`,`Healer`);
const Leo = new Companion(`Leo`, `cat`);
const Frank = new Companion(`Frank`, `Flea`);
Robin.companion = Leo;
Robin.companion.companion = Frank;
Robin.companion.companion.inventory = ["small hat", "sunglasses"];

// console.log(Robin);
// Frank.roll();

const Nancy = new Adventurer(`Nancy`, `Healer`);
const Jim = new Adventurer(`Jim`, `Fighter`);

Nancy.duel(Jim);


