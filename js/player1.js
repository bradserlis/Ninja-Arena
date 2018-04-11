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
      game.time.events.add(3000, slowHeroDeath, this)
  }
}

function slowHeroDeath(){
      player.alive = false;
      player.kill();
      mainbgm.stop();
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
