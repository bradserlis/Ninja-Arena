    function collideFnc(player, enemy){
      console.log('slime hit me');
      reviveTimer = game.time.now + 1000;
      playerDamage.play();
      playerImmobile = true;
      player.play('player-damage', false);
      enemy.x -= 120;
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