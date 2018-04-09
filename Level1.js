// var config = {
//     type: Phaser.AUTO,
//     width: 1200,
//     height: 720,
//     physics: {
//         default: 'arcade'
//     },
//     scene: {
//         preload: preload,
//         create: create,
//         update: update
//     }
// };


var game = new Phaser.Game(1215, 600, Phaser.AUTO, ''
// {
// preload: preload, create: create, update: update, render: render
// }
);

game.Level1.prototype = {

    preload: function ()
    {
        this.load.image('ground', 'assets/platform.png')
        this.load.image('arena', 'assets/gladiator.png')
        this.load.image('backdrop', 'assets/qubodup-light_wood.png')
        this.load.spritesheet('ninja1', 'assets/ninja-small.png', 130, 90); 
        this.load.spritesheet('slime1', 'assets/slime.png', 32, 34);
        this.load.image('sword', 'assets/ninja-sword.jpg')


        // this.load.spritesheet('ninja1', 
        // 'assets/ninja2.png',
        // { frameWidth: 200, frameHeight: 145 }
        // this.load.image('sky', 'assets/skies/space3.png');
        // this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        // this.load.image('red', 'assets/particles/red.png');
    },

    create: function()
    {

        game.physics.startSystem(Phaser.Physics.ARCADE);

        //=== 
        //background 
        //===
            // let bg = this.add.tileSprite(0, 0, 1200, 600, 'backdrop');
            let bg = this.add.tileSprite(0, 0, 1000, 600, 'arena');
            bg.scale.setTo(2.1, 1.25)
        //=== 
        //player sprite setup
        //===

            player = this.add.sprite(600, 700, 'ninja1');
            game.physics.arcade.enable(player);
            player.health = 8;
            player.body.collideWorldBounds = true;
            player.scale.setTo(1, 1);
            player.body.setSize(60, 60, 0, 10); 
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
            createSlimeAnimations();


        //=== 
        //player input setup  
        //===
            cursors = this.input.keyboard.createCursorKeys();


        //=== 
        //player - enemy collisions
        //===



     // make the player

    // create a group for all the player's hitboxes
    var hitboxes = game.add.group();
    // give all the hitboxes a physics body (I'm using arcade physics btw)
    hitboxes.enableBody = true;
    // make the hitboxes children of the player. They will now move with the player  
    player.addChild(hitboxes);
    // create a "hitbox" (really just an empty sprite with a physics body)
    var hitbox1 = hitboxes.create(0,0,null);
    // set the size of the hitbox, and its position relative to the player
    hitbox1.body.setSize(50, 50, player.width, player.height / 2);
    // add some properties to the hitbox. These can be accessed later for use in calculations 
    hitbox1.name = "punch"; 
    hitbox1.damage = 50;     
    hitbox1.knockbackDirection = 0.5;     
    hitbox1.knockbackAmt = 600;
    },


    // game.physics.arcade.overlap(player, slime1, collideFnc, null, this);


    update: function()
    {
        
        player1Logic();
        enemy1Logic();
        //player2Logic()

        game.physics.arcade.overlap(player, slime1, collideFnc, null, this);
        // game.physics.arcade.overlap(hitboxes, slime1, hitEnemy, null, this);

        function collideFnc(player, enemy){
            player.play('player-damage', false)   
            enemy.x -= 90;
            playerDeath();
            // slime1.body.immovable = false;
        }
        
        // function hitEnemy(hitboxes, enemy){
        //     enableHitBox(hitbox1);
        //     enemy.y -= 200;
        // }

        // activate a hitbox by namefunction
         function enableHitbox(hitboxName){     
        // search all the hitboxes 
        for(var i = 0; i < hitboxes.children.length; i++){
        // if we find the hitbox with the "name" specified 
        if(hitboxes.children[i].name === hitboxName){ 
        // reset it
        hitboxes.children[i].reset(0,0);
        }
        }}
        // disable all active hitboxesfunction
        function disableAllHitboxes() {
             hitboxes.forEachExists(function(hitbox) {
                       hitbox.kill();
        });
        }

    },

    render: function(){
        game.debug.bodyInfo(slime1);
        game.debug.body(player);

        game.debug.body(slime1);
    }

    //Notes for additional content





}

