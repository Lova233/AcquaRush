
let height = window.innerHeight / 1.2;

let width = window.innerWidth / 1.2;


var game = new Phaser.Game(width,height);


game.state.add('PreLoad', AcquaRush.PreLoad);
game.state.add('Boot', AcquaRush.Boot);
game.state.add('Menu', AcquaRush.Menu);
game.state.add('GameOver', AcquaRush.GameOver);
game.state.add('Game', AcquaRush.Game);
game.state.start('Boot');