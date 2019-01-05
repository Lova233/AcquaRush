AcquaRush.Menu = {
    create: function() {
        console.log("menuee")
        let style = { font: "2rem Roboto", fill: "#FFFFFF", align: "center" };
        this.background = game.add.tileSprite(0, 0, game.width, game.height - 1, 'background');
        this.background.autoScroll(-30, -0);
        this.title = game.add.sprite(245, 60, 'title').scale.setTo(0.4, 0.4);
        this.option = game.add.sprite(670, 260, 'option');
	    game.add.tween(this.option).from( { y: -200 }, 2000, Phaser.Easing.Bounce.Out, true);
        this.new = game.add.sprite(370, 260, 'new');
        game.add.tween(this.new).from( { y: -200 }, 2000, Phaser.Easing.Bounce.Out, true);   
        this.fish = game.add.sprite(200, 245, 'jelly');
        this.fish.anchor.setTo(-0.2, 0.5);
        this.fish.scale.setTo(0.4, 0.4);
        var swim = this.fish.animations.add('swim');
        this.fish.animations.play('swim', 5, true);
        
        var octoSprite = game.add.sprite(600, 350, 'octoSprite');
        octoSprite.scale.setTo(1.2,1.2)
        var swim = octoSprite.animations.add('swim');
        octoSprite.animations.play('swim', 5, true);

        
        
        

        
        this.new.inputEnabled = true;
        this.new.events.onInputDown.add(this.start, this);
    
    },

start: function(){
        this.state.start('Game');

}

}