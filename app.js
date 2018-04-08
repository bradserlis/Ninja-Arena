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


var game = new Phaser.Game(1200, 600, Phaser.AUTO, 'game', {
    preload: preload, create: create, update: update, render: render
});

function preload ()
{
    this.load.image('ground', 'assets/platform.png')
    this.load.image('backdrop', 'assets/qubodup-light_wood.png')
    this.load.spritesheet('ninja1', 'assets/ninja-small.png', 130, 90); 
    this.load.spritesheet('slime1', 'assets/slime.png', 32, 32);

    // this.load.spritesheet('ninja1', 
    // 'assets/ninja2.png',
    // { frameWidth: 200, frameHeight: 145 }
    // this.load.image('sky', 'assets/skies/space3.png');
    // this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    // this.load.image('red', 'assets/particles/red.png');
}

function create()
{

    game.physics.startSystem(Phaser.Physics.ARCADE);

    //=== 
    //background 
    //===
        let bg = this.add.tileSprite(0, 0, 1200, 600, 'backdrop');
    //=== 
    //player sprite setup
    //===

        player = this.add.sprite(200, 500, 'ninja1');
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
        slime1 = this.add.sprite(200, 100, 'slime1');
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

    // game.physics.arcade.overlap(player, slime1, collideFnc, null, this);
}



function update ()
{
    
    player1Logic();
    enemy1Logic();
    //player2Logic()

    game.physics.arcade.overlap(player, slime1, collideFnc, null, this);

    function collideFnc(player, enemy){
        player.play('player-damage', false)
        enemy.body.bounce.setTo(4, 4);
        enemy.body.velocity.x = 20;
        enemy.body.velocity.y= 20;     
        enemy.x -= 90;
        playerDeath();
        // slime1.body.immovable = false;
    }
}

function render(){
    // game.debug.bodyInfo(slime1);
    // game.debug.body(player);

    // game.debug.body(slime1);
}

//Notes for additional content

