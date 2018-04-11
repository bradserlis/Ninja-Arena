var gameoverState = {

	create: function(){
		var loseLabel = game.add.text(215, 80, 'Your Ninja has been vanquished...', {font: '50px Arial', fill: '#00FF00'});
		console.log(currentLevel)
		var startoverLabel = game.add.text(80, game.world.height - 80, 'press the "enter" key to continue', {font: '25px Arial', fill: '#ffffff'});

		var enterkey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

		enterkey.onDown.addOnce(this.restart, this);
	},

	restart: function(){
		game.state.start('play')
	}
}