var menuState = {
	create: function(){
		var menubg = game.add.sprite(150, 100, 'ninja-menu');
		var nameLabel = game.add.text(450, 35, 'Ninja Arena', {font: '60px Arial', fill: '#ffffff'});
		var startLabel = game.add.text(80, game.world.height - 80, 'press the "ENTER" key to start', {font: '25px Arial', fill: '#ffffff'});
		var instructionLabel = game.add.text(80, game.world.height - 40, 'press A to ATTACK! Use your ARROWS to MOVE!', {font: '25px Arial', fill: '#ffffff'});
		var enterkey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

		enterkey.onDown.addOnce(this.start, this);

		bgm = game.add.audio('menu');
		bgm.play('', 0, 1, false)
	},

	start: function(){
		bgm.stop();
		if(currentLevel < 4)
		{
		game.state.start('play');	
		} else 
		{
			return;
		}
	}


}