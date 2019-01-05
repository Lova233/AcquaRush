
let height = window.innerHeight;
if(height>783) height=783
let width = window.innerWidth
if (width>1366*2) width=1366*2

var game = new Phaser.Game(width,height , Phaser.AUTO, '');
game.state.add('PreLoad', AcquaRush.PreLoad);
game.state.add('Boot', AcquaRush.Boot);
game.state.add('Menu', AcquaRush.Menu);
game.state.add('GameOver', AcquaRush.GameOver);
game.state.add('Game', AcquaRush.Game);
game.state.start('Boot');