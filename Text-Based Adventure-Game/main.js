var promptSync = require('prompt-sync')();
var Player = /** @class */ (function () {
    function Player() {
        this.health = 100;
    }
    Player.prototype.attack = function () {
        var damage = Math.floor(Math.random() * 30) + 1;
        console.log("You strike the Skeleton for ".concat(damage, " damage"));
        return damage;
    };
    Player.prototype.drinkHealthPotion = function () {
        var healthRecovered = Math.floor(Math.random() * 20) + 1;
        console.log("You drink a health potion and recover ".concat(healthRecovered, " health"));
        this.health += healthRecovered;
    };
    Player.prototype.run = function () {
        console.log('You run away from the Skeleton!');
    };
    Player.prototype.receiveDamage = function (amount) {
        console.log("You receive ".concat(amount, " damage"));
        this.health -= amount;
    };
    Player.prototype.showStatus = function () {
        console.log("Player Health: ".concat(this.health));
    };
    return Player;
}());
var Enemy = /** @class */ (function () {
    function Enemy() {
        this.health = 50;
    }
    Enemy.prototype.attack = function () {
        var damage = Math.floor(Math.random() * 30) + 1;
        console.log("The Skeleton strikes you for ".concat(damage, " damage"));
        return damage;
    };
    Enemy.prototype.receiveDamage = function (amount) {
        console.log("The Skeleton receives ".concat(amount, " damage"));
        this.health -= amount;
    };
    Enemy.prototype.showStatus = function () {
        console.log("Skeleton Health: ".concat(this.health));
    };
    return Enemy;
}());
function processInput(player, enemy, input) {
    switch (input) {
        case '1':
            var playerDamage = player.attack();
            enemy.receiveDamage(playerDamage);
            break;
        case '2':
            player.drinkHealthPotion();
            break;
        case '3':
            player.run();
            break;
        default:
            console.log('Invalid command');
    }
}
function gameLoop(player, enemy) {
    while (player.health > 0 && enemy.health > 0) {
        console.log('\nWhat would you like to do?');
        console.log('1. Attack');
        console.log('2. Drink health potion');
        console.log('3. Run');
        var input = promptSync('Enter your choice (1-3): ');
        processInput(player, enemy, input);
        if (enemy.health > 0) {
            var enemyDamage = enemy.attack();
            player.receiveDamage(enemyDamage);
        }
        player.showStatus();
        enemy.showStatus();
    }
    if (player.health <= 0) {
        console.log('You have been defeated! Game over.');
    }
    else {
        console.log('You have defeated the Skeleton! Congratulations!');
    }
}
var player = new Player();
var enemy = new Enemy();
gameLoop(player, enemy);
