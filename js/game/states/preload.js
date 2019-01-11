AcquaRush.PreLoad = {
        preload: function() {
      

        game.load.image('title', 'assets/title.png');
        game.load.spritesheet('jelly', 'assets/jelly.png',280,270,4);
        game.load.image('bubble', 'assets/bubble.png');
        game.load.image('life', 'assets/life.png');
        game.load.image('bubbleStar', 'assets/bubbleStar.png');
        game.load.image('menu', 'assets/menu.png');
        game.load.image('again', 'assets/again.png');
        game.load.image('new', 'assets/new.png');
        game.load.image('option', 'assets/option.png');
        game.load.image('normal', 'assets/normal.png');
        game.load.image('hard', 'assets/hard.png');
        game.load.image('insane', 'assets/insane.png'); 
        game.load.spritesheet('puffer', 'assets/pufferFishSmall.png', 279.5, 279, 14)
       // game.load.image('sharkSprite', 'assets/sharky.png');
        game.load.spritesheet('octoSprite', 'assets/octopusSprite.png', 125, 40, 3);   
        game.load.audio('pop', 'assets/sounds/pop.ogg');
        game.load.audio('lose', 'assets/sounds/lose.wav');
        game.load.audio('under', 'assets/sounds/under.wav');
        game.load.audio('lifeUp', 'assets/sounds/lifeUp.wav');
        game.load.audio('loseEnergy','assets/sounds/loseEnergy.wav');
        game.load.audio('boing','assets/sounds/boing.wav');
        game.load.audio('fail','assets/sounds/fail.wav');
            
        if (this.game.device.desktop && !this.game.device.firefox)
        game.load.spritesheet('sharkSprite', 'assets/sharkSprite.png', 422, 150, 10);      
        else
        game.load.spritesheet('sharkSprite', 'assets/sharkSpriteSmall.png', 200, 79, 10);   
        this.load.onLoadComplete.add(this.onLoadComplete, this);            
        

    },
    create: function() {

    },
    update: function() {
    if(this.ready === true) {
      this.state.start('Menu');
    }
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.scale.refresh();
        },
    onLoadComplete: function() {
    this.ready = true;
  }
    };