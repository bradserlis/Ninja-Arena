//===
//Health / Damage Setup
//===
function playerDeath() {
  if(player.health >0)
  {
      player.health -= 1;
  }
  else if (player.health <= 0)
  {
      player.tint = 10;
      reviveTimer = game.time.now + 2000;
      game.time.events.add(3000, slowHeroDeath, this)
  }
}

function slowHeroDeath(){
      player.alive = false;
      player.kill();
      mainbgm.stop();
      bossBGM.stop();
      game.state.start('gameover')
}


function swordAttackSound(){
  swordsnd.play('', 0, .4, false);
}

function player1Logic(){
  player.body.velocity.set(0);
  player.anchor.setTo(.5,.5);

  if(player.health < 4){
    if(game.time.now > flashingHealth){
        player.tint = 12000000;
        flashingHealth = game.time.now + 100;
    } else
    {
        player.tint = 16777215;
    };
  }

  if(!playerImmobile){
    if (game.input.keyboard.isDown(Phaser.Keyboard.A))
    {
      game.time.events.add(50, swordAttackSound, this)

      if(game.time.now < player1NextAttack)
      {
        return;
      }

      player.play('attack', false);
      player1NextAttack = game.time.now + 500;
      player1IsAttacking = true;

      if(player.direction === 'left'){
        enableHitbox('swordLeft', player.direction);
      }
      else {
        enableHitbox('swordRight', player.direction);
      }
    }
    else if (cursors.left.isDown)
    {
      player.body.velocity.x = -160;
      player.scale.x = -1;
      player.play('left', false);
      player.direction = 'left';
    }
    else if (cursors.right.isDown)
    {
      player.body.velocity.x = 160;
      player.scale.x = 1;
      player.play('right', false);
      player.direction = 'right';
    }
    else if (cursors.up.isDown)
    {
      player.body.velocity.y = -160;
      directionCheck(player.direction);
    }
    else if(cursors.down.isDown)
    {
      player.body.velocity.y = 160;
      directionCheck(player.direction);
    }
    else if(!player1IsAttacking) {
    }

  }

  if(game.time.now > player1NextAttack){
    player1IsAttacking = false;
  }
  if(!player1IsAttacking){
    disableAllHitboxes();
  }
  if(playerImmobile && game.time.now > reviveTimer){
    playerImmobile = false;
  }

}

function directionCheck(direction) {
  if(direction === 'left'){
      player.play('left', false);
  }
  else {
      player.play('right', false);
  }
}

function createPlayer1Animations(){
	player.animations.add('left', [10, 11, 12, 13, 14], 8, false);
	player.animations.add('right', [10, 11, 12, 13, 14], 8, false);
	player.animations.add('up', [0, 1, 2, 3], 8, false);
	player.animations.add('down', [0, 1, 2, 3], 8, false);
	player.animations.add('attack', [0, 1, 2], 10, false);
	player.animations.add('idle', [3, 4, 5, 6], 15, false);
	// player.animations.add('turn', [0,], 3, false);
	player.animations.add('player-damage', [24, 26], 2, false)
}

function createSwordHitboxes(){
  //===
    //Hitbox Setup
    //===
    // create a group for all the player's hitboxes
    hitboxes = game.add.group();
    // give all the hitboxes a physics body (I'm using arcade physics btw)
    hitboxes.enableBody = true;
    // make the hitboxes children of the player. They will now move with the player
    player.addChild(hitboxes);
    // create a "hitbox" (really just an empty sprite with a physics body)
    swordLeft = hitboxes.create(0, 0, null);
    swordRight = hitboxes.create(0, 0, null);
    // set the size of the hitbox, and its position relative to the player
    swordLeft.body.setSize(35, 60, player.width - 170, (player.height / 2) - 65);
    // add some properties to the hitbox. These can be accessed later for use in calculations
    swordLeft.name = "swordLeft";
    swordLeft.damage = 50;
    swordLeft.knockbackAmt = 100;
    swordRight.body.setSize(35, 60, 30, (player.height / 2) - 65);
    swordRight.name = "swordRight";
    swordRight.damage = 50;
    swordRight.knockbackAmt = 100;

    disableAllHitboxes();
}
