var playState = {

    create: function(){
     // game.physics.startSystem(Phaser.Physics.ARCADE);
    

    //===
    //background
    //===
    let bg = this.add.tileSprite(0, 0, 1000, 600, 'arena');
    bg.scale.setTo(2.1, 1.25);

    //===
    //player sprite setup
    //===
    player = this.add.sprite(600, 700, 'ninja1');
    game.physics.arcade.enable(player);
    player.health = 8;
    player.body.collideWorldBounds = true;
    player.scale.setTo(1, 1);
    player.body.setSize(30, 60, 0, 10);
    player.direction = 'right';
    player.anchor.set(0.5, 0.5)
    // x size, y size, x offset, y offset
    //player.body.setSize(40, 40, 0, 0);
    createPlayer1Animations();

    //===
    //enemy sprite setup
    //===
      slime2 = game.add.group();
      slime2.enableBody = true;

    if(currentLevel==1){
    slime1 = this.add.sprite(600, 10, 'slime1');
    game.physics.arcade.enable(slime1);
    slime1.body.collideWorldBounds = true;
    slime1.scale.setTo(2.5)
    slime1.body.setSize(15, 15, 0, 10);
    slime1.health = 2;
    slime1.anchor.set(0.5, 0.5)
    createSlimeAnimations();
    } else if(currentLevel==2)
    {
      for(let i=0; i<3; i++){
        createSlime();
      // slime2.scale.setTo(2.5);
      // slime2.body.setSize(15, 15, 0, 10);
      // slime2.health = 2;
      // slime2.anchor.set(0.5, 0.5);
      // slime2.body.collideWorldBounds = true;
      }
    }



    //===
    //player input setup
    //===
    cursors = this.input.keyboard.createCursorKeys();


    // create a group for all the player's hitboxes
    hitboxes = game.add.group();
    // give all the hitboxes a physics body (I'm using arcade physics btw)
    hitboxes.enableBody = true;
    // make the hitboxes children of the player. They will now move with the player
    player.addChild(hitboxes);
    // create a "hitbox" (really just an empty sprite with a physics body)
    swordLeft = hitboxes.create(0, 0, null);
    swordRight = hitboxes.create(0, 0, null);
    // set the size of the hitbox, and its position relative to the player
    swordLeft.body.setSize(35, 60, player.width - 170, (player.height / 2) - 65);
    // add some properties to the hitbox. These can be accessed later for use in calculations
    swordLeft.name = "swordLeft";
    swordLeft.damage = 50;
    swordLeft.knockbackAmt = 200;
    swordRight.body.setSize(35, 60, 30, (player.height / 2) - 65);
    swordRight.name = "swordRight";
    swordRight.damage = 50;
    swordRight.knockbackAmt = 200;

    disableAllHitboxes();
  },
  
      update: function ()
    {
      player1Logic();
      
      if(currentLevel==1){

      slimeLogic();
      } 
      // else if(currentLevel==2){

      // slimeLogic2();
      // }
      //player2Logic()

      //===
      //player - enemy collisions
      //===
      game.physics.arcade.overlap(player, slime1, collideFnc, null, this);
      game.physics.arcade.overlap(swordLeft, slime1, swordTime, null, this);
      game.physics.arcade.overlap(swordRight, slime1, swordTime, null, this);
    
    function collideFnc(player, enemy){
      console.log('slime hit me');
      playerCannotMove();
      // player.play('player-damage', false);
      enemy.x -= 90;
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
      slimeDeath();
      winCheck();
    }
  },


  // onHit: function(damage) {
  // if (!player.invincible) {
  //  We only damage the player if not invincible 
  // player.health -= damage;
  // //we toggle invincibility
  // this.toggleInvincible();
  //  //and then we add a timer to restore the player to a vulnerable state
  //        game.time.events.add(2000, this.toggleInvincible, this); 
  //            }
  //   },
  
  // toggleInvincible: function() {
  //                player.invincible = !player.invincible;
  //     },

    render: function(){
        // game.debug.bodyInfo(slime1);
        // game.debug.body(player);

        game.debug.body(slime2);
        // game.debug.body(hitboxes);
        // game.debug.body(swordLeft);
        // game.debug.body(swordRight);

    },

    win: function(){
      game.state.start('win');
    }
}





// new Phaser.Game(1215, 600, Phaser.AUTO, 'game', {
//     preload: preload, create: create, update: update, render: render
// });

// function preload ()
// {
//     this.load.image('ground', 'assets/platform.png');
//     this.load.image('arena', 'assets/gladiator.png');
//     this.load.image('backdrop', 'assets/qubodup-light_wood.png');
//     this.load.spritesheet('ninja1', 'assets/ninja-small.png', 130, 90);
//     this.load.spritesheet('slime1', 'assets/slime.png', 32, 34);
//     this.load.image('sword', 'assets/ninja-sword.jpg');
// }






// function create()
// {
//   game.physics.startSystem(Phaser.Physics.ARCADE);

//   //===
//   //background
//   //===
//   let bg = this.add.tileSprite(0, 0, 1000, 600, 'arena');
//   bg.scale.setTo(2.1, 1.25);

//   //===
//   //player sprite setup
//   //===
//   player = this.add.sprite(600, 700, 'ninja1');
//   game.physics.arcade.enable(player);
//   player.health = 8;
//   player.body.collideWorldBounds = true;
//   player.scale.setTo(1, 1);
//   player.body.setSize(30, 60, 0, 10);
//   player.direction = 'right';
//   // x size, y size, x offset, y offset
//   //player.body.setSize(40, 40, 0, 0);
//   createPlayer1Animations();

//   //===
//   //enemy sprite setup
//   //===
//   slime1 = this.add.sprite(600, 10, 'slime1');
//   game.physics.arcade.enable(slime1);
//   slime1.body.collideWorldBounds = true;
//   slime1.scale.setTo(2.5)
//   slime1.body.setSize(20, 20, 13, 40);
//   slime1.health = 2;
//   createSlimeAnimations();

//   slime2 = game.add.group();


//   //===
//   //player input setup
//   //===
//   cursors = this.input.keyboard.createCursorKeys();


//   // create a group for all the player's hitboxes
//   hitboxes = game.add.group();
//   // give all the hitboxes a physics body (I'm using arcade physics btw)
//   hitboxes.enableBody = true;
//   // make the hitboxes children of the player. They will now move with the player
//   player.addChild(hitboxes);
//   // create a "hitbox" (really just an empty sprite with a physics body)
//   swordLeft = hitboxes.create(0, 0, null);
//   swordRight = hitboxes.create(0, 0, null);
//   // set the size of the hitbox, and its position relative to the player
//   swordLeft.body.setSize(35, 60, player.width - 170, (player.height / 2) - 65);
//   // add some properties to the hitbox. These can be accessed later for use in calculations
//   swordLeft.name = "swordLeft";
//   swordLeft.damage = 50;
//   swordLeft.knockbackAmt = 200;
//   swordRight.body.setSize(35, 60, 30, (player.height / 2) - 65);
//   swordRight.name = "swordRight";
//   swordRight.damage = 50;
//   swordRight.knockbackAmt = 200;

//   disableAllHitboxes();
// }
