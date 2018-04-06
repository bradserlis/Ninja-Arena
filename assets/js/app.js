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

var player;
var cursors;
var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('ground', 'assets/platform.png')
    this.load.image('backdrop', 'assets/qubodup-light_wood.png')
    this.load.spritesheet('ninja1', 
    'assets/ninja-small.png',
    { frameWidth: 130, frameHeight: 90 } 
    // this.load.spritesheet('ninja1', 
    // 'assets/ninja2.png',
    // { frameWidth: 200, frameHeight: 145 }
    // this.load.image('sky', 'assets/skies/space3.png');
    // this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    // this.load.image('red', 'assets/particles/red.png');
)}

function create()
{

    let bg = this.add.image('0', '0', 'backdrop');
    bg.setOrigin(0,0)
    
    player = this.physics.add.sprite(200, 500, 'ninja1');
    // player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    player.setScale(1, 1);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('ninja1', { start: 10, end: 14 }),
        frameRate: 15,
        repeat: 0
    });  

    this.anims.create({
        key: 'attack',
        frames: this.anims.generateFrameNumbers('ninja1', { start: 10, end: 14 }),
        frameRate: 15,
        repeat: 0
    });

    // this.anims.create({
    //     key: 'turn',
    //     frames: [ { key: 'ninja1', frame: 4 } ],
    //     frameRate: 2
    // });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('ninja1', { start: 10, end: 14 }),
        frameRate: 15,
        repeat: 0
    });

    this.anims.create({
        key:'up',
        frames: this.anims.generateFrameNumbers('ninja1', {start:0, end: 3}),
        frameRate: 15,
        repeat:0
    })

    cursors = this.input.keyboard.createCursorKeys();
    
    //will need this for collisions between players/enemies
    // this.physics.add.collider(player, platforms);
}

function update ()
{
    player.setVelocityX(0);
    player.setVelocityY(0);
    let direction;
    function directionCheck() {
        if(direction === 'left'){
            player.anims.play('left', true)
        } else {
            player.anims.play('right', true)
        }
    } 

    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);
        player.setScale(-1, 1);
        player.anims.play('left', true);
        direction = 'left';
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);
        player.setScale(1, 1);
        player.anims.play('right', true);
        direction = 'right';
    }
    else if (cursors.up.isDown)
    {
        player.setVelocityY(-160);
        // player.setScale(1, 1);
        directionCheck();

    }else if (cursors.down.isDown)
    {
        player.setVelocityY(160);
        // player.setScale(1, 1);
        directionCheck();
    }

    // else
    // {
    //     player.setVelocityX(0);

    //     player.anims.play('turn');
    // }
}


