var loadState = {

	preload: function(){
		var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

    game.load.image('arena', '/assets/gladiator.png');
    game.load.image('ninja-menu', '/assets/ninja-menu.jpg');
    game.load.spritesheet('ninja1', '/assets/ninja-small.png', 130, 90);
    game.load.spritesheet('slime1', '/assets/slime.png', 32, 34);
    game.load.audio('menu', 'assets/menu.wav'); 
    game.load.audio('hop', 'assets/hop.wav'); 
    game.load.audio('sword-swipe', 'assets/sword-swipe.wav'); 
    game.load.audio('main-bgm', 'assets/main.mp3'); 


	},

	create: function(){
		game.state.start('menu');
	}
};
