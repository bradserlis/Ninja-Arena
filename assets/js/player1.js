function player1Logic(){
	player.setVelocityX(0);
    player.setVelocityY(0);

	if (cursors.left.isDown)
    {
        player.setVelocityX(-160);
        player.setScale(-1, 1);
        player.anims.play('left', true);
        player.direction = 'left';
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);
        player.setScale(1, 1);
        player.anims.play('right', true);
        player.direction = 'right';
    }
    else if (cursors.up.isDown)
    {
        player.setVelocityY(-160);
        // player.setScale(1, 1);
        directionCheck(player.direction);

    }else if (cursors.down.isDown)
    {
        player.setVelocityY(160);
        // player.setScale(1, 1);
        directionCheck(player.direction);
    }
     else if (keyA.isDown)
    {	
    	if(player1NextAttack>game.loop.time){
    		return;
    	}

        player.anims.play('attack', true);
        player1NextAttack = game.loop.time + 500;
   }
    else {
        player.anims.play('idle', true);
        }
    
}

function directionCheck(direction) {
    if(direction === 'left'){
        player.anims.play('left', true)
    } else {
        player.anims.play('right', true)
    }
} 

function createPlayer1Animations(){
	game.anims.create({
        key: 'left',
        frames: game.anims.generateFrameNumbers('ninja1', { start: 10, end: 14 }),
        frameRate: 15,
        repeat: 0
    });  

    game.anims.create({
        key: 'attack',
        frames: game.anims.generateFrameNumbers('ninja1', { start: 0, end: 2 }),
        frameRate: 10,
        repeat: 0
    });

    game.anims.create({
        key: 'turn',
        frames: [ { key: 'ninja1', frame: 0 } ],
        frameRate: 2
    });

    game.anims.create({
        key: 'right',
        frames: game.anims.generateFrameNumbers('ninja1', { start: 10, end: 14 }),
        frameRate: 15,
        repeat: 0
    });

    game.anims.create({
        key:'up',
        frames: game.anims.generateFrameNumbers('ninja1', {start:0, end: 3}),
        frameRate: 15,
        repeat:0
    });

    game.anims.create({
        key: 'idle',
        frames: game.anims.generateFrameNumbers('ninja1', {start:3, end: 6}),
        frameRate: 7,
        repeat: -1
    });
}