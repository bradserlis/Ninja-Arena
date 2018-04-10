var MAX_LEVEL = 2;

var player;
var cursors;
var slime1;
var slime2;
var slime3;
var slime4;

var bgm;
var mainbgm;
var victory;
var swordsnd;
var slimeDeathSound;
var herodamage;


var hitBoxes;
var swordLeft;
var swordRight;
var currentLevel=2;

var player1NextAttack = 0;
var player1IsAttacking = false;
var playerImmobile = false;
var reviveTimer = 0;
var nextHop = 0;
var flashingHealth = 0;

// activate a hitbox by name
function enableHitbox(hitboxName, left) {
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

// disable all active hitboxes
function disableAllHitboxes() {
  hitboxes.forEachExists(function(hitbox) {
    hitbox.kill();
  });
}
