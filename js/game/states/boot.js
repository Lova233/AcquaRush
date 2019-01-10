const AcquaRush = function() {};
AcquaRush.Boot = {
	preload: function() {
		game.load.image('background', 'assets/back2.jpg');
	},
	create: function() {
      game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.state.start('PreLoad');
	}
};