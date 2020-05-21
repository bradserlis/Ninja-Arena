    function collideFnc(player, enemy){
      console.log('slime hit me');
      reviveTimer = game.time.now + 900;
      player.tint = 16000000;
      game.time.events.add(100, function(){
      	player.tint = 16777215;
      }, player);
	 game.time.events.add(100, function(){
      	player.tint = 16000000;
      }, player);
      game.time.events.add(100, function(){
      	player.tint = 16777215;
      }, player);
      playerDamage.play();
      playerImmobile = true;
      player.play('player-damage', false);
      enemy.x -= 140;
	  playerDeath();
    }

    function chickenHit(sword, boss){
    	console.log('hit the boss!');
    	chickenCluck.play('', 0, .5, false);
      boss.tint = 16000000;
      game.time.events.add(100, function(){
      	boss.tint = 16777215;
      }, boss);
	 game.time.events.add(100, function(){
      	boss.tint = 16000000;
      }, boss);
      game.time.events.add(100, function(){
      	boss.tint = 16777215;
      }, boss);
      if(bossRooster.scale.x == -2)
		{
      	boss.body.velocity.x = -7;
        boss.position.x -= sword.knockbackAmt;
      }
      else {
      	boss.body.velocity.x = 7
        boss.position.x += sword.knockbackAmt;
      }

      bossDeath(boss);
    }

    function swordTime(sword, slime){
      console.log('hit that slime!');
      slime.tint = 16000000;
      game.time.events.add(100, function(){
      	slime.tint = 16777215;
      }, slime);
	 game.time.events.add(100, function(){
      	slime.tint = 16000000;
      }, player);
      game.time.events.add(100, function(){
      	slime.tint = 16777215;
      }, slime);
      if(player.direction === 'left'){
      	slime.body.velocity.x = -7;
        slime.position.x -= sword.knockbackAmt;
      }
      else {
      	slime.body.velocity.x = 7
        slime.position.x += sword.knockbackAmt;
      }

      slimeDeath(slime);
    }

    function peck(player){
    	if(player.direction === 'left')
    	{
    		player.position.x += 130;
    	} else {
    		player.position.x -= 130;
    	}
    	playerDeath();
    }


function collideChicken(player, peck){
  console.log('player pecked by chicken');
  if(bossRooster.direction == 'left'){
    player.body.position.x -= 100;
  }
  else {
    player.body.position.x += 100;
  }
}

