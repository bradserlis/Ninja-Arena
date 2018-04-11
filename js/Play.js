var playState = {

    create: function(){
     // game.physics.startSystem(Phaser.Physics.ARCADE);
    
    //===
    //music!
    //
    mainbgm = game.add.audio('main-bgm');
    mainbgm.play('', 0, .3, false)
    hop = game.add.audio('hop');
    playerDamage = game.add.audio('playerDamage');
    slimeDeathSound = game.add.audio('slime-death');
    swordsnd = game.add.audio("sword-swipe");

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
    slime1.health = 5;
    slime1.anchor.set(0.5, 0.5)
    createSlimeAnimations();
    } else if(currentLevel==2)
    {
      for(let i=0; i<3; i++){
        createSlime();
      }
    }
    else if(currentLevel ==3){
        bossRooster = this.add.sprite(600, 10, 'bossRooster')
        game.physics.arcade.enable(bossRooster);
        bossRooster.body.collideWorldBounds = true;
        bossRooster.scale.setTo(2);
        bossRooster.body.setSize(12, 12, 0, 10);
        bossRooster.health = 20;
        bossRooster.anchor.set(.5,.5);
        createBossAnimations();
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
    swordLeft.knockbackAmt = 100;
    swordRight.body.setSize(35, 60, 30, (player.height / 2) - 65);
    swordRight.name = "swordRight";
    swordRight.damage = 50;
    swordRight.knockbackAmt = 100;

    enemyHitboxes = game.add.group();
    enemyHitboxes.enableBody = true;
    if(currentLevel == 1){
      slime1.addChild(enemyHitboxes); 
    }
    peckLeft = enemyHitboxes.create(0, 0, null);
    peckRight = enemyHitboxes.create(0, 0, null);
    peckLeft.body.setSize(35, 60, bossRooster.width - 170, (bossRooster.height / 2) - 65);
    peckLeft.name = "peckLeft";
    peckLeft.damage = 50;
    peckLeft.knockbackAmt = 200;
    peckRight.body.setSize(35, 60, 30, (bossRooster.height / 2) - 65);
    peckRight.name = "peckRight";
    peckRight.damage = 50;
    peckRight.knockbackAmt = 200;

    disableAllHitboxes();
  },
  
    update: function ()
    {
      player1Logic();
      
      if(currentLevel==1){
        slimeLogic();
      } 
      else if(currentLevel==2){
        slimeLogic2();
      }
      //player2Logic()

      //===
      //player - enemy collisions
      //===
      game.physics.arcade.overlap(player, slime1, collideFnc, null, this);
      game.physics.arcade.overlap(player, slime2, collideFnc, null, this);
      game.physics.arcade.overlap(swordLeft, slime1, swordTime, null, this);
      game.physics.arcade.overlap(swordRight, slime1, swordTime, null, this);
      game.physics.arcade.overlap(swordLeft, slime2, swordTime, null, this);
      game.physics.arcade.overlap(swordRight, slime2, swordTime, null, this);
      game.physics.arcade.overlap(peckLeft, player, peck, null, this);
      game.physics.arcade.overlap(peckRight, player, peck, null, this);
  
  },

    render: function(){
        // game.debug.bodyInfo(slime1);
        // game.debug.body(player);

        // game.debug.body(slime2);
        game.debug.body(bossRooster);
        // game.debug.body(hitboxes);
        // game.debug.body(enemyHitboxes);
        game.debug.body(peckLeft);
        game.debug.body(peckRight);

        // game.debug.body(swordLeft);
        // game.debug.body(swordRight);

    },

    win: function(){
      game.state.start('win');
    }

}




