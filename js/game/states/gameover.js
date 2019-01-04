AcquaRush.GameOver = {
    create: function() {
        let style = { font: "2rem Roboto", fill: "#FFFFFF", align: "center" };
        this.background = game.add.tileSprite(0, 0, game.width, game.height - 1, 'background');
        this.background.autoScroll(-30, -0);
        this.again = game.add.sprite(500, 245, 'again');
	    game.add.tween(this.again).from( { y: -200 }, 2000, Phaser.Easing.Bounce.Out, true);
        this.menu = game.add.sprite(270, 245, 'menu');
        game.add.tween(this.menu).from( { y: -200 }, 2000, Phaser.Easing.Bounce.Out, true);    
        this.scoreDistance = game.add.text(370, 100, 'DISTANCE:' + this.distance , style);
        
        this.menu.inputEnabled = true;
        this.menu.events.onInputDown.add(this.menuStart, this);
                
        this.again.inputEnabled = true;
        this.again.events.onInputDown.add(this.newGame, this);
    
    },

        menuStart: function(){
        this.state.start('Menu');

},
        newGame: function(){
        this.state.start('Game');

},
    update: function() {
   
    }
}