var MAX_LEVEL = 3;

var player;
var cursors;
var bossRooster;
var slime1;
var slime2;
var slime3;
var slime4;

var bgm;
var mainbgm;
var bossBGM;
var finalVictory;
var victory;
var swordsnd;
var slimeDeathSound;
var herodamage;
var chickenCluck;


var hitBoxes;
var enemyHitboxes;
var swordLeft;
var peckLeft;
var peckRight;
var swordRight;
var currentLevel=1;

var player1NextAttack = 0;
var player1IsAttacking = false;
var playerImmobile = false;
var reviveTimer = 0;
var nextHop = 0;
var nextPeck = 0;
var bossNextAttack = 0;
var bossIsAttacking = false;
var flashingHealth = 0;

// activate a hitbox by name
function enableHitbox(hitboxName) {
  // search all the hitboxes
  // console.log(hitboxes.children);
  for(var i = 0; i < hitboxes.children.length; i++){
    // if we find the hitbox with the "name" specified
    if(hitboxes.children[i].name === hitboxName){
      // reset it
      hitboxes.children[i].reset(0, 0);
    }
  }
}

function enableEnemyHitbox(enemyHitboxName, x, y){
    for(var i = 0; i < enemyHitboxes.children.length; i++){
      if(enemyHitboxes.children[i].name === enemyHitboxName){
        enemyHitboxes.children[i].body.position.x = x;
        enemyHitboxes.children[i].body.position.y = y;
        enemyHitboxes.children[i].revive();
        // enemyHitboxes.children[i].reset(0, 0);
      }
    }
}

// disable all active hitboxes
function disableAllHitboxes() {
  hitboxes.forEachExists(function(hitbox) {
    hitbox.kill();
  });
}
function disableAllEnemyHitboxes() {
  enemyHitboxes.forEachExists(function(hitbox) {
    hitbox.kill();
  });
}
