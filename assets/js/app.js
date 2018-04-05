var config = {
    type: Phaser.AUTO,
    width: 800,
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
    this.add.image('400', '400', 'backdrop')
    
    player = this.physics.add.sprite(150, 200, 'ninja1');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    player.setScale(1, 1);

    this.anims.create({
        key: 'left',
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

}

function update ()
{
    player.setVelocityX(0);

    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);
        player.setScale(-1, 1);
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);
        player.setScale(1, 1);
        player.anims.play('right', true);
    }
    // else
    // {
    //     player.setVelocityX(0);

    //     player.anims.play('turn');
    // }

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }
}