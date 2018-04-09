Game.Preloader = function(game){
	this.preloader=null;
};


Game.Preloader.prototype = {
	preload:function(){

		this.preLoadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');

		this.preLoadBar.anchor.setTo(0.5, 0.5);
		this.time.advancedTiming = true;

		this.load.setPreloadSprite(this.preloadBar);

		//Load all assets


	},



	create:function(){
		this.state.start(MainMenu)
	}
}