function createSlimeAnimations(){
    game.anims.create({
        key: 'enemy-left',
        frames: game.anims.generateFrameNumbers('slime1', { start: 0, end: 4 }),
        frameRate: 15,
        repeat: 0
    });  

    game.anims.create({
        key: 'enemy-attack',
        frames: game.anims.generateFrameNumbers('slime1', { start: 0, end: 2 }),
        frameRate: 15,
        repeat: 0
    });

    game.anims.create({
        key: 'enemy-turn',
        frames: [ { key: 'slime1', frame: 0 } ],
        frameRate: 2
    });

    game.anims.create({
        key: 'enemy-right',
        frames: game.anims.generateFrameNumbers('slime1', { start: 10, end: 14 }),
        frameRate: 15,
        repeat: 0
    });

    game.anims.create({
        key:'enemy-up',
        frames: game.anims.generateFrameNumbers('slime1', {start:0, end: 3}),
        frameRate: 15,
        repeat:0
    });

    game.anims.create({
        key: 'enemy-idle',
        frames: game.anims.generateFrameNumbers('slime1', {start:0, end: 9}),
        frameRate: 7,
        repeat: -1
    });
}

function enemy1Logic(){
    slime1.setVelocityX(0);
    slime1.setVelocityY(0);

    if(slime1.body.velocity.x===0 && slime1.body.velocity.y===0){
        slime1.anims.play("enemy-idle", true)
    }
}