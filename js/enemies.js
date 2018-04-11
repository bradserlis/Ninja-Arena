
function createSlime(){
  let newSlime = slime2.create(360 + Math.random() * 400, 100 + Math.random() * 200,'slime1');
  newSlime.scale.setTo(2.5);
  game.physics.arcade.enable(newSlime);
  newSlime.body.collideWorldBounds = true;
  newSlime.health = 5;
  newSlime.anchor.set(0.5, 0.5);
  // newSlime.addChild(enemyHitboxes);

  newSlime.animations.add("group-slime-move", [21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 17, true);
  newSlime.animations.add('slime-die',[40, 41, 42, 43, 44, 45, 46, 47, 48, 49], 17, false);
}


function slimeLogic(){
    if(slime1.health <= 0 ){
      slime1.body.velocity.x = 0;
      slime1.body.velocity.y = 0;
    }
    else if (this.game.physics.arcade.distanceBetween(this.slime1, this.player) > 95)
    {
      this.game.physics.arcade.moveToObject(slime1, this.player, 80);
      slime1.play("slime-move", true);

      if(game.time.now > nextHop){
        hop.play('', 0, .2, false);
        nextHop = game.time.now + 650;
      }
    }     
}

function slimeLogic2(){
  slime2.children.forEach(function(s){
    if(s.health <= 0 )
    {
      s.body.velocity.x = 0;
      s.body.velocity.y = 0;
    }
    else if(this.game.physics.arcade.distanceBetween(s, this.player) > 95)
      {
        game.physics.arcade.moveToObject(s, this.player, 80);
        s.play('group-slime-move', true);
      }
    if(game.time.now > nextHop)
      {
        hop.play('', 0, .3, false);
        nextHop = game.time.now + 650;
      }
  }); 
}

function bossLogic(){
    if(player.body.position.x > bossRooster.body.position.x)
    {
      bossRooster.scale.x = -2
    } else {
      bossRooster.scale.x = 2;
    }
    if(bossRooster.health <= 0 ){
      bossRooster.body.velocity.x = 0;
      bossRooster.body.velocity.y = 0;
    }
    else if (this.game.physics.arcade.distanceBetween(this.bossRooster, this.player) > 85)
    {
      this.game.physics.arcade.moveToObject(bossRooster, this.player, 205);
      bossRooster.play("boss-move", true);
      }
    else if(this.game.physics.arcade.distanceBetween(bossRooster, player) < 85){
       if(game.time.now < bossNextAttack)
      {
        return;
      }
      bossRooster.play('boss-peck', false)
      bossNextAttack = game.time.now + 500;
      bossIsAttacking = true;
      if(player.direction === 'left'){
        enableEnemyHitbox('peckLeft', player.direction);
      }
      else {
        enableHitbox('peckRight', player.direction);
      }
      if(game.time.now > bossNextAttack){
        bossIsAttacking = false;
      }
      if(!bossIsAttacking){
        disableAllEnemyHitboxes();
      }
    }
    }     

function slimeDeath(slime) {
  slime.health -= 1;

  if (slime.health <= 0)
  {
    console.log('slime is dying!');
    slime.play('slime-die');
    slimeDeathSound.play('', 0, 1, false);
    game.time.events.add(2000, slowSlimeDeath, this, slime);
  }
}
function bossDeath(boss) {
  boss.health -= 1;

  if (boss.health <= 0)
  {
    console.log('Boss is dying!');
    boss.play('boss-die');
    chickenCluck.play('', 0, 1, false);
    game.time.events.add(2000, slowBossDeath, this, boss);
  }
}

function slowSlimeDeath(slime){
  slime.kill();
  slime.alive = false;
  winCheck(slime);
}
function slowBossDeath(boss){
  boss.kill();
  boss.alive = false;
  winCheck(boss);
}


function winCheck(slime){

  if(currentLevel === 1){
    if(!slime.alive){
      currentLevel += 1;
      mainbgm.stop();
      game.state.start('win');
    }
  }
  else if(currentLevel === 2){
    console.log('check all children');
    var allDead = true;
    slime2.children.forEach(function(s){
      if(s.alive){
        allDead = false;
      }
    });
    if(allDead){
      currentLevel += 1;
      mainbgm.stop();
    game.state.start('win');
    }
  }
  else if(currentLevel==3){
    if(!slime.alive){
      currentLevel += 1;
      mainbgm.stop();
      game.state.start('win');
      console.log('you won the game!');
    }
  }
}
function createSlimeAnimations(){
    // slime1.animations.add('enemy-move', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 8, true);
    slime1.animations.add('slime-move', [21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 17, true);
    slime1.animations.add('slime-attack', [31, 32, 33, 34, 35, 36, 37, 38, 39, 40], 17, false);
    slime1.animations.add('slime-die', [40, 41, 42, 43, 44, 45, 46, 47, 48, 49], 17, false);
}

function createBossAnimations(){
    bossRooster.animations.add("boss-move", [3,4,5,6], 15, false);
    bossRooster.animations.add("boss-peck", [7,8,11,12,13], 15, false);
    bossRooster.animations.add("boss-die", [8], 15, false);
}

  