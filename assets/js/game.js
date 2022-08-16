var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
var skipFee = 2;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble", "Steven Circuit", "Hydro Hambone", "Steely Danish"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // Alert players that they are starting the round
    window.alert("Welcome to robot Gladiators!");

    //check if player wants to fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");

   
   if (promptFight == "FIGHT" || promptFight == "fight") {
    // Player attack and message
    enemyHealth -= playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    )

    // Check enemy health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Enemy attack and message
    playerHealth -= enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    )

    //check player health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
} else if (promptFight == "skip" || promtpFight == "SKIP"){
    //confirm player wants to skip the fight
    var confirmSkip = window.confirm("Are you sure you'd like to skip the fight?");

    //if so , leave the fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract skipFee from playerMoney for skipping
        playerMoney -= skipFee;
    }

    //if not, run fight() again
    else {
        fight();
    }
} else {
    window.alert("You need to enter a valid option. Try again!");
}
};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}