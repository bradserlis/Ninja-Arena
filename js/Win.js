var winState = {

	create: function(){
		var winLabel = game.add.text(80, 80, 'WAVE COMPLETE', {font: '50px Arial', fill: '#00FF00'});
		console.log(currentLevel)
		var startLabel = game.add.text(80, game.world.height - 80, 'press the "enter" key to continue', {font: '25px Arial', fill: '#ffffff'});

		var enterkey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

		enterkey.onDown.addOnce(this.restart, this);
	},

	restart: function(){
		game.state.start('play')
	}
}