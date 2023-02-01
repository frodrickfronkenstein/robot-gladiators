var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyAttack = 12;

var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {
        //let player fight or skip
        var promptFight = window.prompt("would you like to 'FIGHT' or 'SKIP' this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //if player chooses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes, leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        //fight as default
        //subtract playerAttack form enemyHealth
        enemyHealth = enemyHealth - playerAttack;
        //log result of attack
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " has " + enemyHealth + " remaining.");
        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            //award player money for winning
            playerMoney = playerMoney + 20;
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        //subtract enemyAttack from playerHealth
        playerHealth = playerHealth - enemyAttack;
        //log result of attack
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " has " + playerHealth + " remaining.");
        // check player's health
        if (playerHealth <= 0) {
            window.alert("You have lost your robot in battle! Game over!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } 
};

for (var i = 0; i < enemyNames.length; i++) {
    if(playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1));
    }
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 10;
    fight(pickedEnemyName);
}