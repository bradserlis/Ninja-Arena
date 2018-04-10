function createSlime(){
  slime2.create(360 + Math.random() * 200, 120 + Math.random() * 200,'slime1');
}


function slimeLogic(){
    if (this.game.physics.arcade.distanceBetween(this.slime1, this.player) > 100)
    {
      this.game.physics.arcade.moveToObject(slime1, this.player, 70);
      slime1.play("slime-move", true)
      // snd=game.add.audio('hop')
    } 

    // else if(this.game.physics.arcade.distanceBetween(this.slime1, this.player) < 100){
    //  slime1.body.velocity.x = 0;
    //  slime1.body.velocity.y = 0;
    //  slime1.play("slime-attack", false);
    // }
}

// function slimeLogic2(){
  
//     slime2.forEach(game.physics.arcade.moveToObject(this.slime2, this.player, 70), game.physics.arcade, false, 200);
    // this.game.physics.arcade.moveToObject(slime2, this.player, 70);
    //   slime2.play("slime-move", true)
    //   // snd=game.add.audio('hop')
    // } 

    // else if(this.game.physics.arcade.distanceBetween(this.slime1, this.player) < 100){
    // 	slime1.body.velocity.x = 0;
    // 	slime1.body.velocity.y = 0;
    // 	slime1.play("slime-attack", false);
    // }
// }

function slimeDeath() {
  if(slime1.health >0)
  {
      slime1.health -= 1;
  }
  else if (slime1.health <= 0)
  {
      slime1.play('slime-die');
      // let deadSlime = slime1.animations.play('slime-die', 2, false);
      // deadSlime.onComplete.add(function()
      //   {
        slime1.alive = false;
        slime1.kill();    
        // }, this);

      // slime1.animations.currentAnim.onComplete.add(function ()
      // {
      // slime1.alive = false;
      // slime1.kill();
      // }, this);

  }
}

function winCheck(){
  if(!slime1.alive){
    currentLevel = 2;
    game.state.start('win');
  }
}

function createSlimeAnimations(){
    // slime1.animations.add('enemy-move', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 8, true);
    slime1.animations.add('slime-move', [21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 17, true);
    slime1.animations.add('slime-attack', [31, 32, 33, 34, 35, 36, 37, 38, 39, 40], 17, false);
    slime1.animations.add('slime-die', [40, 41, 42, 43, 44, 45, 46, 47, 48, 49], 17, false);

// function createSlime(num){
//   for(let i =0; i<num; i++){
//     let slime = slime1.create(600, 10, 'slime1')
// }



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
