AcquaRush.PreLoad = {
        preload: function() {
        this.ready = false;  
        game.load.image('title', 'assets/welcomeTitle.png');
        game.load.spritesheet('jelly', 'assets/jelly.png',280, 312,4);
        game.load.image('bubble', 'assets/bubble.png');
        game.load.image('bubbleStar', 'assets/bubbleStar.png');
        game.load.image('menu', 'assets/menu.png');
        game.load.image('again', 'assets/again.png');
        game.load.image('new', 'assets/new.png');
        game.load.image('option', 'assets/option.png');
        game.load.spritesheet('octoSprite', 'assets/octopusSprite.png', 125, 40, 3);   
        game.load.audio('pop', 'assets/sounds/pop.ogg');
        game.load.audio('argh', 'assets/sounds/argh.wav');
        game.load.audio('under', 'assets/sounds/under.wav');
            
            
        if (this.game.device.desktop && !this.game.device.firefox)
        game.load.spritesheet('sharkSprite', 'assets/sharkSprite.png', 423, 163, 10);   
        else
        game.load.spritesheet('sharkSprite', 'assets/sharkSprite.png', 202, 79, 10);   
            
            
        this.load.onLoadComplete.add(this.onLoadComplete, this);

    },
    create: function() {

    },
    update: function() {
    if(this.ready === true) {
      this.state.start('Menu');
    }
        },
    onLoadComplete: function() {
    this.ready = true;
  }
    };