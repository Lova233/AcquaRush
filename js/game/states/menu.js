AcquaRush.Menu = {
    create: function() {
        
        this.ready = false;  
        game.scores = {
            distance: 0,
            energy: 30,
            difficulty:1,
        }
        let style = { font: "2rem Roboto", fill: "#FFFFFF", align: "center" };
        this.background = game.add.tileSprite(0, 0, game.width, game.height - 1, 'background');
        this.background.autoScroll(-30, -0);
        this.title = game.add.sprite(this.game.width / 2 - 370, 60, 'title').scale.setTo(0.4, 0.4);
        this.normal = game.add.sprite(game.width / 2 - 200, 260, 'normal');
        game.add.tween(this.normal).from( { y: -200 }, 2000, Phaser.Easing.Bounce.Out, true);   
        this.hard = game.add.sprite(game.width / 2 - 50, 260, 'hard');
        game.add.tween(this.hard).from( { y: -200 }, 2000, Phaser.Easing.Bounce.Out, true);   
        this.insane = game.add.sprite(game.width / 2 + 100, 260, 'insane');
        game.add.tween(this.insane).from( { y: -200 }, 2000, Phaser.Easing.Bounce.Out, true);   
        this.fish = game.add.sprite(game.width / 2 - 30, 370, 'jelly');
        this.fish.anchor.setTo(-0.2, 0.5);
        this.fish.scale.setTo(0.2, 0.2);
        this.fish.animations.add('swim');
        this.fish.animations.play('swim', 5, true);  
        
        let octoSprite = game.add.sprite(game.width / 2 - 200, 370, 'octoSprite');
        octoSprite.scale.setTo(0.9,0.9)
        octoSprite.animations.add('swim');
        octoSprite.animations.play('swim', 5, true);
        
        
        let puffer = game.add.sprite(game.width / 2 + 100,320,'puffer');
        puffer.scale.setTo(0.4,0.4);
        let puff = puffer.animations.add('puff');
        puffer.animations.play('puff',8,true);
       
        this.under = game.add.audio('under',1,true); 
        this.under.play();

        
        

        
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
        this.state.start('Game');
},
startHard: function(){
        game.time.reset();
        this.resetGame()
        game.scores.difficulty = 1.3;
        this.state.start('Game');
},
startInsane: function(){
        game.time.reset();
        game.scores.difficulty = 2
        this.state.start('Game');
},
    
    
resetGame: function(){
    game.scores = {
            distance: 0,
            energy: 30,
    }
}
    
    
    

}