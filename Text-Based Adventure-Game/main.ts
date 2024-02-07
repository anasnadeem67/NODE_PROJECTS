const promptSync = require('prompt-sync')();

class Player {
    health: number;

    constructor() {
        this.health = 100;
    }

    attack() {
        const damage = Math.floor(Math.random() * 30) + 1;
        console.log(`You strike the Skeleton for ${damage} damage`);
        return damage;
    }

    drinkHealthPotion() {
        const healthRecovered = Math.floor(Math.random() * 20) + 1;
        console.log(`You drink a health potion and recover ${healthRecovered} health`);
        this.health += healthRecovered;
    }

    run() {
        console.log('You run away from the Skeleton!');
    }

    receiveDamage(amount: number) {
        console.log(`You receive ${amount} damage`);
        this.health -= amount;
    }

    showStatus() {
        console.log(`Player Health: ${this.health}`);
    }
}

class Enemy {
    health: number;

    constructor() {
        this.health = 50;
    }

    attack() {
        const damage = Math.floor(Math.random() * 30) + 1;
        console.log(`The Skeleton strikes you for ${damage} damage`);
        return damage;
    }

    receiveDamage(amount: number) {
        console.log(`The Skeleton receives ${amount} damage`);
        this.health -= amount;
    }

    showStatus() {
        console.log(`Skeleton Health: ${this.health}`);
    }
}

function processInput(player: Player, enemy: Enemy, input: string): void {
    switch (input) {
        case '1':
            const playerDamage = player.attack();
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

function gameLoop(player: Player, enemy: Enemy): void {
    while (player.health > 0 && enemy.health > 0) {
        console.log('\nWhat would you like to do?');
        console.log('1. Attack');
        console.log('2. Drink health potion');
        console.log('3. Run');

        const input = promptSync('Enter your choice (1-3): ');
        processInput(player, enemy, input);

        if (enemy.health > 0) {
            const enemyDamage = enemy.attack();
            player.receiveDamage(enemyDamage);
        }

        player.showStatus();
        enemy.showStatus();
    }

    if (player.health <= 0) {
        console.log('You have been defeated! Game over.');
    } else {
        console.log('You have defeated the Skeleton! Congratulations!');
    }
}

const player = new Player();
const enemy = new Enemy();

gameLoop(player, enemy);
