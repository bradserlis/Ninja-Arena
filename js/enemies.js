// var enemyCanAttack = true;

// function enemyHit(){
// 	if(enemyCanAttack == true){
// 	enemyCanAttack = false;
// 	setTimeout(function(){
//             slime1.body.moves = false;
//         }, 50);
// 	}
// 	enemyCanAttack=true;
// 	slime1.body.moves=true;
// }


function slimeLogic(){
    if (this.game.physics.arcade.distanceBetween(this.slime1, this.player) > 100)
    {
      this.game.physics.arcade.moveToObject(slime1, this.player, 70);
      slime1.play("slime-move", true);
    } else if(this.game.physics.arcade.distanceBetween(this.slime1, this.player) < 100){
    	slime1.body.velocity.x = 0;
    	slime1.body.velocity.y = 0;
    	slime1.play("slime-attack", false);
    }
}

function slimeDeath() {
  if(slime1.health >0)
  {
      slime1.health -= 1;
  }
  else if (slime1.health <= 0)
  {
      slime1.play('slime-die')
      slime1.alive = false;
      slime1.kill();
  }
}

function createSlimeAnimations(){
    // slime1.animations.add('enemy-move', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 8, true);
    slime1.animations.add('slime-move', [21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 17, true);
    slime1.animations.add('slime-attack', [31, 32, 33, 34, 35, 36, 37, 38, 39, 40], 17, false);
    slime1.animations.add('slime-die', [40, 41, 42, 43, 44, 45, 46, 47, 48, 49], 17, false);



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
