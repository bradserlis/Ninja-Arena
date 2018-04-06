var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 600,
    physics: {
        default: 'arcade'
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};


var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('ground', 'assets/platform.png')
    this.load.image('backdrop', 'assets/qubodup-light_wood.png')
    this.load.spritesheet('ninja1', 
    'assets/ninja-small.png',
    { frameWidth: 130, frameHeight: 90 }) 
    this.load.spritesheet('slime1', 
    'assets/slime.png',
    { frameWidth: 32, frameHeight: 32 })
    // this.load.spritesheet('ninja1', 
    // 'assets/ninja2.png',
    // { frameWidth: 200, frameHeight: 145 }
    // this.load.image('sky', 'assets/skies/space3.png');
    // this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    // this.load.image('red', 'assets/particles/red.png');
}

function create()
{

//=== 
//background 
//===
    let bg = this.add.image('0', '0', 'backdrop');
    bg.setOrigin(0,0)

//=== 
//player sprite setup
//===

    player = this.physics.add.sprite(200, 500, 'ninja1');
    // player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    player.setScale(1, 1);
    player.direction = 'right';
    createPlayer1Animations();

//=== 
//enemy sprite setup
//===
    slime1 = this.physics.add.sprite(200, 100, 'slime1');
    slime1.setCollideWorldBounds(true);
    slime1.setScale(3)
    createSlimeAnimations();

//=== 
//player input setup  
//===
    cursors = this.input.keyboard.createCursorKeys();
    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);


//=== 
//player - enemy collisions
//===

this.physics.add.collider(player, slime1);
}

function update ()
{
    
    player1Logic();
    enemy1Logic();
    //player2Logic()





//Notes for additional content

//startFollow function, to be used on enemies later
// function create ()
    // {
    //     this.add.image(400, 300, 'sky');
    //     var particles = this.add.particles('red');
    //     var emitter = particles.createEmitter({
    //         speed: 100,
    //         scale: { start: 1, end: 0 },
    //         blendMode: 'ADD'
    //     });
    //     var logo = this.physics.add.image(400, 100, 'logo');
    //     logo.setVelocity(100, 200);
    //     logo.setBounce(1, 1);
    //     logo.setCollideWorldBounds(true);
    //     emitter.startFollow(logo);
    // }

 // var controlConfig = {
 //        left: cursors.left,
 //        right: cursors.right,
 //        up: cursors.up,
 //        down: cursors.down,
 //        p1attack: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
 //    };

    // controls = new Phaser.Cameras.Controls.Smoothed(controlConfig);

    // else
    // {
    //     player.setVelocityX(0);

    //     player.anims.play('turn');
    // }
}


