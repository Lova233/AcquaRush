var game = new Phaser.Game(1000, 490);
game.state.add('GameOver', AcquaRush.GameOver);
game.state.add('PreLoad', AcquaRush.PreLoad);
game.state.add('Boot', AcquaRush.Boot);
game.state.add('Menu', AcquaRush.Menu);
game.state.add('Game', AcquaRush.Game);
game.state.start('Boot');