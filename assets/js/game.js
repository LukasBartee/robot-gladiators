var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
var skipFee = 10;
rewardPay = 20;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble", "Steven Circuit", "Hydro Hambone", "Steely Danish"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
    // Alert players that they are starting the round
    window.alert("Welcome to robot Gladiators!");

    while (enemyHealth > 0 && playerHealth > 0) {
        //check if player wants to fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");


        if (promptFight == "skip" || promptFight == "SKIP") {
            //confirm player wants to skip the fight
            var confirmSkip = window.confirm("Are you sure you'd like to skip the fight?");

            //if so , leave the fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract skipFee from playerMoney for skipping
                playerMoney -= skipFee;
                console.log("player Money: " + playerMoney);
                break
            }
        }

            // Player attack and message
            enemyHealth -= playerAttack;
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            )

            // Check enemy health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");

                //award player money for winning
                playerMoney += rewardPay;
                break;
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
                break;
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }
};

for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(enemyNames[i]);
}