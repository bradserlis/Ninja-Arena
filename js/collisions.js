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
      player.play('player-damage', false, true);
      enemy.x -= 130;
      Phaser.Camera.SHAKE_BOTH = 4;
	  playerDeath();
    }

    function swordTime(sword, slime){
      console.log('hit that slime!');
      if(player.direction === 'left'){
        slime.position.x -= sword.knockbackAmt;
      }
      else {
        slime.position.x += sword.knockbackAmt;
      }

      slimeDeath(slime);
    }