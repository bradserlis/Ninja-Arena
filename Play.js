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
    // x size, y size, x offset, y offset
    //player.body.setSize(40, 40, 0, 0);
    createPlayer1Animations();

    //===
    //enemy sprite setup
    //===
    slime1 = this.add.sprite(600, 10, 'slime1');
    game.physics.arcade.enable(slime1);
    slime1.body.collideWorldBounds = true;
    slime1.scale.setTo(2.5)
    slime1.body.setSize(20, 20, 13, 40);
    slime1.health = 2;
    createSlimeAnimations();

    slime2 = game.add.group();
    for(let i =0; i<3; i++){
      slimeWave();
    }
   
    function slimeWave(){
    slime2.create(600 + Math.random() * 200, 10 + Math.random() * 200, 'slime1');
    };



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
      slimeLogic();
      //player2Logic()

      //===
      //player - enemy collisions
      //===
      game.physics.arcade.overlap(player, slime1, collideFnc, null, this);
      game.physics.arcade.overlap(player, slime2, collideFnc, null, this);
      game.physics.arcade.overlap(swordLeft, slime1, swordTime, null, this);
      game.physics.arcade.overlap(swordRight, slime1, swordTime, null, this);

    
    function collideFnc(player, enemy){
      console.log('slime hit me');
      player.play('player-damage', false);
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
      }
  },
    render: function(){
        game.debug.bodyInfo(slime1);
        game.debug.body(player);

        game.debug.body(slime1);
        game.debug.body(hitboxes);
        game.debug.body(swordLeft);
        game.debug.body(swordRight);

    },
    win: function(){
      game.state.start('win')
    }
}




