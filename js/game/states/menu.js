AcquaRush.Menu = {
    create: function() {
        
        this.ready = false;  
        game.scores = {
            distance: 0,
            energy: 30,
            difficulty:1,
        }
        

        console.log("menuee")
        let style = { font: "2rem Roboto", fill: "#FFFFFF", align: "center" };
        this.background = game.add.tileSprite(0, 0, game.width, game.height - 1, 'background');
        this.background.autoScroll(-30, -0);
        this.title = game.add.sprite(245, 60, 'title').scale.setTo(0.4, 0.4);
        //this.option = game.add.sprite(670, 260, 'option');
	    //game.add.tween(this.option).from( { y: -200 }, 2000, Phaser.Easing.Bounce.Out, true);
        //this.new = game.add.sprite(370, 260, 'new');
        //game.add.tween(this.new).from( { y: -200 }, 2000, Phaser.Easing.Bounce.Out, true);   
        this.normal = game.add.sprite(game.width / 2 - 200, 260, 'normal');
        game.add.tween(this.normal).from( { y: -200 }, 2000, Phaser.Easing.Bounce.Out, true);   
        this.hard = game.add.sprite(game.width / 2 - 50, 260, 'hard');
        game.add.tween(this.hard).from( { y: -200 }, 2000, Phaser.Easing.Bounce.Out, true);   
        this.insane = game.add.sprite(game.width / 2 + 100, 260, 'insane');
        game.add.tween(this.insane).from( { y: -200 }, 2000, Phaser.Easing.Bounce.Out, true);   
        this.fish = game.add.sprite(200, 245, 'jelly');
        this.fish.anchor.setTo(-0.2, 0.5);
        this.fish.scale.setTo(0.4, 0.4);
        this.fish.animations.add('swim');
        this.fish.animations.play('swim', 5, true);  
        
        let octoSprite = game.add.sprite(600, 350, 'octoSprite');
        octoSprite.scale.setTo(1.2,1.2)
        octoSprite.animations.add('swim');
        octoSprite.animations.play('swim', 5, true);
        
        
        let puffer = game.add.sprite(840,190,'puffer');
        puffer.scale.setTo(0.7,0.7);
        let puff = puffer.animations.add('puff');
        puffer.animations.play('puff',8,true);
       
        
        
        
        

        
        this.normal.inputEnabled = true;
        this.normal.events.onInputDown.add(this.startNormal, this);
        this.hard.inputEnabled = true;
        this.hard.events.onInputDown.add(this.startHard, this);
        this.insane.inputEnabled = true;
        this.insane.events.onInputDown.add(this.startInsane, this);
    },

startNormal: function(){
        game.time.reset();
        this.resetGame()
        game.scores.difficulty = 0.9;
        game.scale.startFullScreen(false);
        this.state.start('Game');
},
startHard: function(){
        game.time.reset();
        this.resetGame()
        game.scores.difficulty = 1.3;
        game.scale.startFullScreen(false);
        this.state.start('Game');
},
startInsane: function(){
        game.time.reset();
        game.scores.difficulty = 2
        game.scale.startFullScreen(false);
        this.state.start('Game');
},
    
    
resetGame: function(){
    game.scores = {
            distance: 0,
            energy: 30,
    }
}
    
    
    

}