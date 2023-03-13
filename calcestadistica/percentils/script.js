var player = {
  name: "",
  hp: 100,
  weapon: "",
  damage: 0
}

var enemy = {
  name: "",
  hp: 100,
  weapon: "",
  damage: 0
}

function playerAttack() {
  var damage = Math.floor(Math.random() * player.damage);
  enemy.hp -= damage;
  console.log(player.name + " hits " + enemy.name + " for " + damage + " damage!");
  console.log(enemy.name + " has " + enemy.hp + " health left.");
}

function enemyAttack() {
  var damage = Math.floor(Math.random() * enemy.damage);
  player.hp -= damage;
  console.log(enemy.name + " hits " + player.name + " for " + damage + " damage!");
  console.log(player.name + " has " + player.hp + " health left.");
}

function fight() {
  while (player.hp > 0 && enemy.hp > 0) {
      playerAttack();
      enemyAttack();
  }
  if (player.hp <= 0) {
      console.log(enemy.name + " wins!");
  }
  else {
      console.log(player.name + " wins!");
  }
}

player.name = prompt("What is your name?");
player.weapon = prompt("What is your weapon?");
player.damage = prompt("What is your damage?");

enemy.name = prompt("What is your enemy's name?");
enemy.weapon = prompt("What is your enemy's weapon?");
enemy.damage = prompt("What is your enemy's damage?");

fight();