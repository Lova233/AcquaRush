const AcquaRush = function() {};
AcquaRush.Boot = {
	preload: function() {
		game.load.image('background', 'assets/back2.jpg');
	},
	create: function() {
      game.scale.fullScreenScaleMode = Phaser.ScaleManager.NO_SCALE;
		this.state.start('PreLoad');
	}
};