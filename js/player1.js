//===
//Health / Damage Setup
//===

// if(player.health < 6){
//     player.tint = 50
// }
    function playerDeath() {
            if(player.health >0)
            {
                player.health -= 1;
            } 
            else if (player.health <= 0)
            {
                player.alive = false;
                player.kill();
            }
    }

// let flag = null;

// setInterval(
// function changeColor () {
//     if(flag==true){
//         player.tint = 16000000;        
//         flag=false;
//     }
//     else if (flag==false){
//         player.tint = 16777215;
//         flag = true;
//     }
// }, 500);

    
function player1Logic(){
    player.body.velocity.set(0);
    player.anchor.setTo(.5,.5);
    // if(player.health < 6){
    //     changeColor();
    // }

	if (cursors.left.isDown)
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

    }else if (cursors.down.isDown)
    {
        player.body.velocity.y = 160;
        directionCheck(player.direction);
    }
     else if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
    {	
    	// if(player1NextAttack>game.loop.time){
    	// 	return;
    	// }

        player.play('attack', false);
        // player1NextAttack = game.loop.time + 500;
   }
    else {
        player.play('idle', true);
    }
    
}

    function directionCheck(direction) {
    if(direction === 'left'){
        player.play('left', false)
    } else {
        player.play('right', false)
    }
} 

function createPlayer1Animations(){
	player.animations.add('left', [10, 11, 12, 13, 14], 8, false);
	player.animations.add('right', [10, 11, 12, 13, 14], 8, false);
	player.animations.add('up', [0, 1, 2, 3], 8, false);
	player.animations.add('down', [0, 1, 2, 3], 8, false);
	player.animations.add('attack', [0, 1, 2], 8, false);
	// player.animations.add('idle', [3, 4, 5, 6], 10, true);
	// player.animations.add('turn', [0,], 3, false);
	player.animations.add('player-damage', [24, 26], 2, false)
}


//notes

// damage(amount) {
//     if (this.health - amount <= 0) {
//       this._sprite.health = 0;
//       //this.kill();
//       return true;
//     } else {
//       this._sprite.damage(amount);
//     }

//     return false;
  // }