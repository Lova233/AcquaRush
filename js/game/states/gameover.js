AcquaRush.GameOver = {
    create: function() {
        let style = { font: "3rem Roboto", fill: "#FFFFFF", align: "center" };
        this.background = game.add.tileSprite(0, 0, game.width, game.height - 1, 'background');
        this.background.autoScroll(-30, -0);
        this.again = game.add.sprite(game.width / 2 - 300, 260, 'again');
	    game.add.tween(this.again).from( { y: -300 }, 2000, Phaser.Easing.Bounce.Out, true);
        this.menu = game.add.sprite(game.width / 2 + 100, 260, 'menu');
        game.add.tween(this.menu).from( { y: -200 }, 2000, Phaser.Easing.Bounce.Out, true);    
        this.scoreDistance = game.add.text(game.width / 2 - 300, 150, 'BEST DISTANCE:' + game.scores.distance , style);
        this.menu.inputEnabled = true;
        this.menu.events.onInputDown.add(this.menuStart, this);
        this.again.inputEnabled = true;
        this.again.events.onInputDown.add(this.newGame, this);
        this.under = game.add.audio('under',1,true); 
        this.fail = game.add.audio('fail');
        this.fail.play();
        this.under.play();

    },

        menuStart: function(){
        this.state.start('Menu');

},
        newGame: function(){
            game.scale.startFullScreen(false);
        game.time.reset();
        this.resetGame();
        this.state.start('Game');

},

resetGame: function(){
    game.scores = {
            distance: 0,
            energy: 30,
            difficulty: game.scores.difficulty,
    }}};
