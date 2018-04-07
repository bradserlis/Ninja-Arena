function createSlimeAnimations(){
    slime1.animations.add('idle', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 8, true);

//     // game.anims.create({
//     //     key: 'enemy-left',
//     //     frames: game.anims.generateFrameNumbers('slime1', { start: 0, end: 4 }),
//     //     frameRate: 15,
//     //     repeat: 0
//     // });  

//     // game.anims.create({
//     //     key: 'enemy-attack',
//     //     frames: game.anims.generateFrameNumbers('slime1', { start: 0, end: 2 }),
//     //     frameRate: 15,
//     //     repeat: 0
//     // });

//     // game.anims.create({
//     //     key: 'enemy-turn',
//     //     frames: [ { key: 'slime1', frame: 0 } ],
//     //     frameRate: 2
//     // });

//     // game.anims.create({
//     //     key: 'enemy-right',
//     //     frames: game.anims.generateFrameNumbers('slime1', { start: 10, end: 14 }),
//     //     frameRate: 15,
//     //     repeat: 0
//     // });

//     // game.anims.create({
//     //     key:'enemy-up',
//     //     frames: game.anims.generateFrameNumbers('slime1', {start:0, end: 3}),
//     //     frameRate: 15,
//     //     repeat:0
//     // });

    
}

function enemy1Logic(){

    if(slime1.body.velocity.x===0 && slime1.body.velocity.y===0){
        slime1.play("enemy-idle", true)
    }

     if (this.game.physics.arcade.distanceBetween(this.slime1, this.player) < 600)
    {
            this.game.physics.arcade.moveToObject(slime1, this.player, 80);
        }
    }



//setvelocityx and y to 'speed'
//
//