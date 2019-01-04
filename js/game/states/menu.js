AcquaRush.Menu = {
    create: function() {
        console.log("menuee")
        let style = { font: "2rem Roboto", fill: "#FFFFFF", align: "center" };
        this.background = game.add.tileSprite(0, 0, game.width, game.height - 1, 'background');
        this.background.autoScroll(-30, -0);
        this.title = game.add.sprite(8, 60, 'title').scale.setTo(0.5, 0.5);
        
        this.option = game.add.sprite(500, 260, 'option');
	    game.add.tween(this.option).from( { y: -200 }, 2000, Phaser.Easing.Bounce.Out, true);
        this.new = game.add.sprite(270, 260, 'new');
        game.add.tween(this.new).from( { y: -200 }, 2000, Phaser.Easing.Bounce.Out, true);   
        
        
        this.new.inputEnabled = true;
        this.new.events.onInputDown.add(this.start, this);
    
    },

start: function(){
        this.state.start('Game');

}

}