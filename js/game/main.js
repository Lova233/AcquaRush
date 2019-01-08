
let height = window.innerHeight;

let width = window.innerWidth


var game = new Phaser.Game(width,height , Phaser.CANVAS , '');
game.state.add('PreLoad', AcquaRush.PreLoad);
game.state.add('Boot', AcquaRush.Boot);
game.state.add('Menu', AcquaRush.Menu);
game.state.add('GameOver', AcquaRush.GameOver);
game.state.add('Game', AcquaRush.Game);
game.state.start('Boot');