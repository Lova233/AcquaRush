
let height = window.innerHeight / 1.2;

let width = window.innerWidth / 1.2;

if (!this.desktop){
var game = new Phaser.Game(width,height);
}else{
var game = new Phaser.Game(window.screen.availWidth * window.devicePixelRatio, window.screen.availHeight * window.devicePixelRatio, Phaser.CANVAS, 'game');

} 



game.state.add('PreLoad', AcquaRush.PreLoad);
game.state.add('Boot', AcquaRush.Boot);
game.state.add('Menu', AcquaRush.Menu);
game.state.add('GameOver', AcquaRush.GameOver);
game.state.add('Game', AcquaRush.Game);
game.state.start('Boot');