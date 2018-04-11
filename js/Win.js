var winState = {

	create: function(){
		victory = game.add.sound('victory');

		if(currentLevel <4)
		{
		victory.play()
		var winLabel = game.add.text(400, 80, 'WAVE COMPLETE', {font: '50px Arial', fill: '#00FF00'});
		console.log(currentLevel)
		var startLabel = game.add.text(80, game.world.height - 80, 'press the "enter" key to continue', {font: '25px Arial', fill: '#ffffff'});	
		} else
		{
			finalVictory.play();
			var finalWinLabel = game.add.text(250, 80, "YOU'VE DEFEATED THE BOSS!", {font: '50px Arial', fill: '#00FF00'});
			var finalWinLabel2 = game.add.text(140, 200, "YOU WIN!", {font: '200px Arial', fill: '#ffffff'});
		}

		var startLabel = game.add.text(80, game.world.height - 80, 'press the "enter" key to continue', {font: '25px Arial', fill: '#ffffff'});	
		var enterkey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

		enterkey.onDown.addOnce(this.restart, this);
	},

	restart: function(){
		mainbgm.stop();
		finalVictory.stop();
		if(currentLevel < 4)
		{
			game.state.start('play')
		} else {
			game.state.start('menu')
		}
	}
}