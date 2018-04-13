var playState = {

    create: function(){
     // game.physics.startSystem(Phaser.Physics.ARCADE);

    //===
    //music!
    //
    mainbgm = game.add.audio('main-bgm');
    bossBGM = game.add.audio('boss-bgm');
    finalVictory = game.add.audio('finalVictory');

    if(currentLevel==1 || currentLevel ==2){
      mainbgm.play('', 0, .3, false)
    }
    else{
      bossBGM.play('', 0, .8, false);
    }
    hop = game.add.audio('hop');
    playerDamage = game.add.audio('playerDamage');
    slimeDeathSound = game.add.audio('slime-death');
    swordsnd = game.add.audio("sword-swipe");
    chickenCluck = game.add.audio('chickenCluck')


    //===
    //background
    //===
    let bg = this.add.tileSprite(0, 0, 1000, 600, 'arena');
    bg.scale.setTo(2.1, 1.25);

    //===
    //player sprite setup
    //===
    player = this.add.sprite(600, 500, 'ninja1');
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
    }
    else if(currentLevel==2)
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
        bossRooster.body.setSize(30, 20, 30, 30);
        bossRooster.health = 20;
        bossRooster.anchor.set(.5,.5);
        bossRooster.direction = player.direction;
        createBossAnimations();
    }

    //===
    //player input setup
    //===
    cursors = this.input.keyboard.createCursorKeys();

    //===
    //Hitbox Setup
    //===
    createSwordHitboxes();
    if(currentLevel===3){
      enemyHitboxes = game.add.group();
      enemyHitboxes.enableBody = true;
      peckLeft = enemyHitboxes.create(0, 0, null);
      peckRight = enemyHitboxes.create(0, 0, null);
      //peckLeft.body.setSize(35, 60, bossRooster.width - 170, (bossRooster.height / 2) - 65);
      peckLeft.body.setSize(40, 60);
      peckLeft.name = "peckLeft";
      peckLeft.damage = 50;
      peckLeft.knockbackAmt = 200;
      peckRight.body.setSize(35, 60, 30, (bossRooster.height / 2) - 65);
      peckRight.name = "peckRight";
      peckRight.damage = 50;
      peckRight.knockbackAmt = 200;

      disableAllEnemyHitboxes();
    }

  },

  update: function ()
  {
    player1Logic();

    if(currentLevel==1){
      slimeLogic();
    }
    else if(currentLevel==2){
      slimeLogic2();
    } else if(currentLevel ==3){
      bossLogic();
    }
    //player2Logic()

    //===
    //player - enemy collisions
    //===
    game.physics.arcade.overlap(player, slime1, collideFnc, null, this);
    game.physics.arcade.overlap(player, slime2, collideFnc, null, this);
    game.physics.arcade.overlap(player, peckLeft, collideChicken, null, this);
    game.physics.arcade.overlap(swordLeft, slime1, swordTime, null, this);
    game.physics.arcade.overlap(swordRight, slime1, swordTime, null, this);
    game.physics.arcade.overlap(swordLeft, slime2, swordTime, null, this);
    game.physics.arcade.overlap(swordRight, slime2, swordTime, null, this);
    game.physics.arcade.overlap(swordLeft, bossRooster, chickenHit, null, this);
    game.physics.arcade.overlap(swordRight, bossRooster, chickenHit, null, this);

    game.physics.arcade.overlap(peckLeft, player, peck, null, this);
    game.physics.arcade.overlap(peckRight, player, peck, null, this);
  },

  render: function(){
      game.debug.bodyInfo(slime1);
      game.debug.body(player);

      game.debug.body(slime2);
      if(bossRooster)
        game.debug.body(bossRooster);
      game.debug.body(hitboxes);

      if(enemyHitboxes && bossRooster){
        game.debug.body(enemyHitboxes);
        game.debug.body(peckLeft);
        game.debug.body(peckRight);
      }

      game.debug.body(swordLeft);
      game.debug.body(swordRight);

  },

  win: function(){
    game.state.start('win');
  }

}




