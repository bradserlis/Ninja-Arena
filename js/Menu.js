var menuState = {
	create: function(){
		// var menubg = this.add.image(0, 0, 600, 600, 'ninja-menu');

		var nameLabel = game.add.text(80, 80, 'My First Game', {font: '50px Arial', fill: '#ffffff'});

		var startLabel = game.add.text(80, game.world.height - 80, 'press the "enter" key to start', {font: '25px Arial', fill: '#ffffff'});

		var enterkey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

		enterkey.onDown.addOnce(this.start, this);

		bgm = game.add.audio('menu');
		bgm.play('', 0, 1, false)
	},

	start: function(){
		game.state.start('play');
	}


}