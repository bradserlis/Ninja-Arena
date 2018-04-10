function createSlime(){
  let newSlime = slime2.create(360 + Math.random() * 200, 120 + Math.random() * 200,'slime1');
  newSlime.scale.setTo(2.5);
  game.physics.arcade.enable(newSlime);
  newSlime.body.collideWorldBounds = true;
  newSlime.health = 2;
  newSlime.anchor.set(0.5, 0.5);
}


function slimeLogic(){
    if(this.game.physics.arcade.distanceBetween(this.slime1, this.player) < 95){
     slime1.body.velocity.x = 0;
     slime1.body.velocity.y = 0;
     slime1.play("slime-attack", false);
    }
    else if (this.game.physics.arcade.distanceBetween(this.slime1, this.player) > 95)
    {
      this.game.physics.arcade.moveToObject(slime1, this.player, 70);
      slime1.play("slime-move", true);

      if(game.time.now > nextHop){
        snd.play('', 0, 1, false);
        nextHop = game.time.now + 650;
      }
    } 

    
}

function slimeLogic2(){
  slime2.children.forEach(function(s){
    game.physics.arcade.moveToObject(s, this.player, 70);
  });
  
  
}

function slimeDeath(slime) {
  if(slime.health >0)
  {
      slime.health -= 1;
  }
  else if (slime.health <= 0)
  {
      //slime.play('slime-die');
      // let deadSlime = slime1.animations.play('slime-die', 2, false);
      // deadSlime.onComplete.add(function()
      //   {
        slime.alive = false;
        slime.kill();    
        // }, this);

      // slime1.animations.currentAnim.onComplete.add(function ()
      // {
      // slime1.alive = false;
      // slime1.kill();
      // }, this);

  }
}

function winCheck(slime){
  if(currentLevel === 1){
    if(!slime.alive){
      currentLevel += 1;
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
      game.state.start('win');
    }
  }
  else {
    console.log('you won the game!');
  }
}

function createSlimeAnimations(){
    // slime1.animations.add('enemy-move', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 8, true);
    slime1.animations.add('slime-move', [21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 17, true);
    slime1.animations.add('slime-attack', [31, 32, 33, 34, 35, 36, 37, 38, 39, 40], 17, false);
    slime1.animations.add('slime-die', [40, 41, 42, 43, 44, 45, 46, 47, 48, 49], 17, false);

}
