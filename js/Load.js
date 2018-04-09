var loadState = {

	preload: function(){
		var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

	game.load.image('ground', '/assets/platform.png');
    game.load.image('arena', '/assets/gladiator.png');
    game.load.image('backdrop', '/assets/qubodup-light_wood.png');
    game.load.spritesheet('ninja1', '/assets/ninja-small.png', 130, 90);
    game.load.spritesheet('slime1', '/assets/slime.png', 32, 34);
	},

	create: function(){
		game.state.start('menu');
	}
};