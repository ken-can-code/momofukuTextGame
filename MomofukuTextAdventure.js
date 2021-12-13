// Momofuku’s game code (runs currently in repl.it only).

// Required for node console input.
const readline = require('readline-sync');

// Variable that holds the users input from the console.
let response;

// Main character class for OOP RPG game
class Character {
  constructor(name, hp, power) {
    this.name = name,
    this.hp = hp,
    this.power = power
    //create random evade variable
    this.evade 
  }

// isAlive() method, returns true if the characters health is above 0
  isAlive() {
    return (this.hp > 0 ? true : false);
  }

  // Generates a random integer between 1 and 10 and stores it in this.evade.
  evadeRandomNum() {
     this.evade = Math.ceil(Math.random() * 10);
  }
  //this.randomEvadeVar = 1-10 random number


// Attack method 
  attack(opponent) {
// if opponent.evadeVariable = 1 console.log You Evaded
    console.log('');
    if (opponent.evade === 1 || opponent.evade === 2){
      console.log(`${opponent.name} evaded the attack`);
    }
    else if(opponent.evade === 3){
       opponent.hp = opponent.hp - (this.power + 1);
       console.log(`${opponent.name} received + 1 attack damage bonus!`);
    }
    else if(opponent.evade === 4){
       opponent.hp = opponent.hp - (this.power - 1);
       console.log(`${this.name}'s attack was reduced by 1!`);
    }
    else {
       opponent.hp = opponent.hp - this.power;
    }
    
    // Ensures that we never display negative health values.
    if (opponent.hp < 0) {
      opponent.hp = 0;
    }
  }
  // printStatus() Method for printing character health to the screen.
  printStatus() {
    console.log(`${this.name} has ${this.hp} health remaining`);
  }
}


// Menu asking name and type of character
console.log('\n|￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|')
console.log('|   Welcome to Momofuku\'s game   |')
console.log('|＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|')
console.log('  (\\__/)  || ')
console.log('  (•ㅅ•)  || ')
console.log('  / 　 づ  \'\)\n')
console.log('What is your name?\n')
const userName = readline.question();

console.log(`\nHey, ${userName}, you just finished CS Prep and are going out to celebrate when a monster appears!`)

function mainGameFunc() { // Main Game Function

// Build hero and monster 'objects'.
  const hero = new Character(userName, 10, 3);
  const monster = new Character('monster', 10, 2);


// Start do while loop - Loop will run as long as hero is alive.
  do  { 

  // run hero and monster randomize method. The evadeRandomNum() method runs at the beginning of each turn and stores a random number between 1 and 10 in this.evade.
  hero.evadeRandomNum()
  monster.evadeRandomNum()


  // Main game menu
  console.log(`\nWhat do you want to do ${userName}?`);
  console.log('1. Fight monster?');
  console.log('2. Do nothing?');
  console.log('3. Flee?');
  response = readline.question('> ');


// Fight monster sequence, hero attacks monster and monster attacks hero.
  if (response === '1') { 
    hero.attack(monster);
    monster.attack(hero);
  }

// Do nothing sequence, hero does nothing and only monster attacks hero.
  else if (response === '2') {
    monster.attack(hero);
  }

// Hero runs away, game ends.
  else if (response === '3') {
    console.log(`Goodbye, ${userName}. It's been real`);
    console.log(`________________________________________
  < boooooooooooooo I came to see a fight >
  ----------------------------------------
          \\   ^__^
          \\  (oo)\\_______
              (__)\\       )\\/\\
                  ||----w |
                  ||      ||`,)
    
    playAgain(); // Function invoked asking if you want to play again.
    break;
  }
  else { // Else case, designed to catch improper input (anything but 1, 2, 3)
    console.log( `\ndon\'t get creative, ${userName}`);
    continue; 
  }

  // The health status of the hero and the monster are printed to the screen by invoking the .printStatus() method.
  hero.printStatus(); 
  monster.printStatus();
  

// If case for when the monster dies and the hero is still alive.
  if (monster.hp <= 0 && hero.hp > 0) {
    console.log(`Congratulations ${userName}, you win win win no matter what`);
    playAgain(); // Invoke play again function.
    break;
  }
// If case for when the monster is still alive and the hero dies.
  if (hero.hp <= 0) {
    console.log('you lose, what happened!?');
    playAgain(); // Invoke play again function.
    break;
  }

  } while (hero.isAlive()); // While loop condition - the isAlive() method returns true if the heros health is above 0, false if 0 or less.

} //<--close mainGameFunc


// Play again function asks the player if they want to play again. If they choose yes, mainGameFunc() is invoked.
function playAgain(){ 
  console.log(`${userName} would you like to play again? y/n`);
  if (readline.question('> ') === 'y') mainGameFunc();
  else console.log('Alright, its been lit');
}


mainGameFunc(); // Call main game function


// Put a conditional statement here -
// if (!monster.alive() && hero.alive()) --- > Return - You win! End loop
//else if !hero.alive() --- log to console "You're defeated, play again? y/n"
  //if input === n end loop
  //else if input === y reset game
// listen for input for play again

//0. import readline for input in console
//0.5. log initial menu text
//1. create class for generating character objects
//2. create fight menu
  //Show to user
  //Recive user input
    //if 1, 2 or 3 run loop
    //else throw error
  // if ... else
   //1. hero attack monster
      //1.1 hero attacks monster and monster attacks hero
      //1.2 hero print status and monster print status
    //2.Do nothing
      //2.1 hero does no damage and receives damage is attacked by monster
      //1.2 hero print status and monster print status
   //3. Hero flees
    //3.1 Ends loop and return "Good Bye"
//3. create a do while loop checking if hero is still alive
  // if true run if ... else loop again
  //if false return "congrats u dead/eveyones a winner maybe"


// **Advanced Feature** Character creation menu
// **Set timeout for battle processing 'feel'
    // countdown timer
//**Money and weapon system
// . .  win money when win battles
//randomize attack amount
