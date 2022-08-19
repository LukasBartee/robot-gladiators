var playerName = window.prompt("What is your robot's name?");

// player's base stats
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// player economy stats
var skipFee = 10;
var rewardPay = 20;
var shopFee = 7;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble", "Steven Circuit", "Hydro Hambone", "Steely Danish"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
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

var startGame = function () {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            //alert player of round number
            window.alert("Welcome to round " + (i + 1) + " of Robot Gladiators!")
            //pick an enemy robot
            var pickedEnemyName = enemyNames[i];
            //reset enemy health
            enemyHealth = 50;
            //pass enemy robot into fight()
            fight(pickedEnemyName);

            //offer the shop if there's at least one more enemy to fight
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                // ask if player would like to enter the shop
                var shopConfirm = window.confirm("The fight is over, visit the shop before the next round?")
                if (shopConfirm) {
                    shop();
                }
            }
        }
    }
    endGame();
};

var endGame = function () {
    debugger;
    // if player robot is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You finished with a score of " + playerMoney);
    }
    else {
        window.alert("Oh no! You've lost your robot in battle!")
    }

    // ask player if they would like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }

};

var shop = function () {
    // ask the player what they would like to do in the shop
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice"
    );

    // interpret shop choice with a switch statement
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >= shopFee) {
                window.alert("Refilled your health by 20 for $" + shopFee);

                // increase the player's health and deduct money
                playerHealth += 20;
                playerMoney -= shopFee;
            }
            else {
                window.alert("You don't have enough money!");
            }

            break;
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= shopFee) {
                window.alert("Upgraded your attack by 6 for $" + shopFee);

                // increase attack and deduct nmoney
                playerAttack += 6;
                playerMoney -= shopFee;
            }
            else {
                window.alert("You don't have enough oney!");
            }

            break;
        case "LEAVE":
        case "leave":
            // alert player and leave the store
            window.alert("Leaving the store");

            break;
        default:
            window.alert("please pick a valid option.");
            // relaunch the shop
            shop();
            break;

    }
}

startGame();