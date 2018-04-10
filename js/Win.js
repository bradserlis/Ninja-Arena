var winState = {

	create: function(){
		
		victory = game.add.sound('victory');
		victory.play()
		var winLabel = game.add.text(80, 80, 'WAVE COMPLETE', {font: '50px Arial', fill: '#00FF00'});
		console.log(currentLevel)
		var startLabel = game.add.text(80, game.world.height - 80, 'press the "enter" key to continue', {font: '25px Arial', fill: '#ffffff'});

		var enterkey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

		enterkey.onDown.addOnce(this.restart, this);
	},

	restart: function(){
		mainbgm.stop();
		game.state.start('play')
	}
}