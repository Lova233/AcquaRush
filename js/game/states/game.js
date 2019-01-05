// Create our 'main' state that will contain the game
AcquaRush.Game = {
    preload: function() {
    var bmpText;
    var count;
    var sharkvelocity;
    var bubblevelocity;
    var energy;
    var distance;
    var maxEnergy;
    var speed;
    var distanza;
    var life;
    },


    create: function() {
        
        
        game.scores = {
            distance: 0,
        }
        
        
        this.distanza = 0;
        this.maxEnergy = 100;
        this.bubblevelocity = -400;
        console.log(this.energy,"eccolo");
        this.energy = 30;
        this.life = 3;

        
        
        this.background = game.add.tileSprite(0, 0, game.width, game.height - 1, 'background');
        
        
        
        this.jumpSound = game.add.audio('jump');
        this.timer1 = game.time.events.loop(1000, this.addBubble, this);
        this.timer2 = game.time.events.loop(5000, this.changeGravity, this);
        //this.timer3 = game.time.events.loop(10000, this.changeVelocity, this);
        this.timer4 = game.time.events.loop(5000, this.addStarBubble, this);
        //this.timer5 = game.time.events.loop(10000, this.destroyBubble, this);
        this.timer6 = game.time.events.loop(700, this.addShark, this);
        this.timer7 = game.time.events.loop(2000, this.addOctopus, this);
        this.timer8 = game.time.events.loop(1000, this.getDistance, this)
        this.timer9 = game.time.events.loop(1000, this.changeVelocity, this)


        //    this.timer = game.time.event.loop(15000, this.changeDirection, this);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        
        this.sharks = game.add.group();
        this.bubbles = game.add.group();
        this.bubbleStars = game.add.group();
        this.octopuss = game.add.group();
        this.lifes = game.add.group();
        
        this.pop = game.add.audio('pop'); 
        this.loseLife = game.add.audio('lose'); 
        this.under = game.add.audio('under'); 
        this.under.play();

        this.fish = game.add.sprite(100, 245, 'jelly');
        this.fish.alive = true;
        this.fish.anchor.setTo(-0.2, 0.5);
        this.fish.scale.setTo(0.2, 0.2);
        game.physics.arcade.enable(this.fish);
        this.fish.body.collideWorldBounds=true;
        this.fish.body.bounce.setTo(0.9, 0.9);

        var swim = this.fish.animations.add('swim');
        this.fish.animations.play('swim', 5, true);
        
        
       // this.lifeImage = game.add.sprite(500, 20, 'life');
       //  this.lifeImage.scale.setTo(0.2, 0.2);

        
        let style = { font: "2rem Roboto", fill: "#FFFFFF", align: "center" };
        this.scoreEnergy = game.add.text(10, 10, 'ENERGY:' + this.energy , style);
        this.scoreDistance = game.add.text(200, 10, 'DISTANCE:' + this.distance, style)
        this.totalLife = game.add.text(420, 10, 'LIFE:' + this.life , style);


        this.fish.body.gravity.y = 900;

        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        var tap =  game.input.onTap.add(this.jump, this)     
        spaceKey.onDown.add(this.jump, this);
        
    },

    update: function() {
        let style = { font: "2rem Roboto", fill: "#FFFFFF", align: "center" };
        this.scoreEnergy.destroy();
        this.scoreDistance.destroy();
        this.totalLife.destroy();
        this.scoreEnergy = game.add.text(10, 10, 'SPEED:' + this.energy , style);
        this.scoreDistance = game.add.text(200, 10, 'DISTANCE:' + game.scores.distance , style);
        this.totalLife = game.add.text(420, 10, 'LIFE:' + this.life , style);
        if(this.life < 0){
            this.restartGame()
        }
        game.physics.arcade.overlap(this.bubbles, this.fish, this.getBubble, null, this);
        game.physics.arcade.overlap(this.bubbleStars, this.fish, this.getBubbleStar, null, this);
        game.physics.arcade.overlap(this.sharks, this.fish, this.sharksGetBird, null, this);
        this.background.autoScroll(this.changeSpeed(this.energy), -0);
  
    },
    
    
    addStarBubble: function(x,y){
        x = this.game.width + 100;
        y = 420 - (200 * Math.floor(Math.random() * 3));
        let bubbleStar = game.add.sprite(x, y, 'bubbleStar');
        bubbleStar.scale.setTo(0.12, 0.12);
        game.physics.arcade.enableBody(bubbleStar);
        bubbleStar.body.gravity.y = 50; 
        game.physics.enable([bubbleStar, this.fish], Phaser.Physics.ARCADE)
        bubbleStar.body.velocity.x = -550;
        this.bubbleStars.add(bubbleStar);

    },

    addBubble: function(x, y) {
        let maxMin = (Math.random() * (0.12 - 0.0200) + 0.08).toFixed(4);
        console.log(maxMin,"quello che cerchi");
        x = this.game.width + 100;
        y = 420 - (200 * Math.floor(Math.random() * 3));
        let bubble = game.add.sprite(x, y, 'bubble');
        bubble.scale.setTo(maxMin,maxMin);
        game.physics.arcade.enableBody(bubble);
        bubble.body.gravity.y = 10; 
        game.physics.enable([bubble, this.fish], Phaser.Physics.ARCADE)
        bubble.body.velocity.x = this.bubblevelocity;
        this.bubbles.add(bubble);
       
    },
    
    addShark: function(x, y) {
        let maxMinScale = (Math.random() * (0.5 - 0.0200) + 0.2).toFixed(4);
        let maxMinGravity = Math.random() * 20 - 10; 
        x = this.game.width + 100;
        y = Math.random()*450;
        console.log(y,"questa è y")
        var sharkSprite = game.add.sprite(x, y, 'sharkSprite');
        sharkSprite.scale.setTo(maxMinScale,maxMinScale)
        var swim = sharkSprite.animations.add('swim');
        sharkSprite.animations.play('swim', 30, true);
        game.physics.arcade.enableBody(sharkSprite);
        sharkSprite.body.gravity.y = maxMinGravity; 
        sharkSprite.body.velocity.x = this.changeVelocity();
        this.sharks.add(sharkSprite);
        sharkSprite.outOfBoundsKill = true;
    },
    
    addOctopus: function(x,y){
        let maxMinScale = (Math.random() * (1.2 - 0.9) + 0.9    ).toFixed(10);
        let maxMinGravity = Math.random() * 20 - 10; 
        x = this.game.width + 100;
        y = Math.random()*450;
        console.log(y,"questa è y")
        var octoSprite = game.add.sprite(x, y, 'octoSprite');
        octoSprite.scale.setTo(maxMinScale,maxMinScale)
        var swim = octoSprite.animations.add('swim');
        octoSprite.animations.play('swim', 5, true);
        game.physics.arcade.enableBody(octoSprite);
        octoSprite.body.gravity.y = maxMinGravity; 
        octoSprite.body.velocity.x = this.sharkvelocity;
        this.octopuss.add(octoSprite);
        octoSprite.outOfBoundsKill = true;
    },

    destroyBubble: function(bubble){
    this.bubbles.children.map((bubble)=>bubble.destroy());
        console.log("done")
    },


    getBubble: function(bird, bubble) {
        this.pop.play();
        bubble.destroy();
        this.energy+=15 ;
    },
    
    getBubbleStar: function(bird, bubbleStar) {
        this.pop.play();
        bubbleStar.destroy();
        this.energy+=40;
    },
    
    getDistance: function(){
        this.distanza = this.distanza + (this.energy / 10);
        game.scores.distance = Math.round(this.distanza);
        console.log(this.distance,"asdasd")
    },

    
    
    sharksGetBird: function(bird, sharkSprite){
        if(!sharkSprite.HasEaten){     
        this.life -=1; 
        this.loseLife.play();
        sharkSprite.HasEaten = true;
        }},
        


    jump: function() {
        if (this.fish.alive == false)
        return;
        this.fish.body.velocity.y = -350;
        game.add.tween(this.fish).to({
            angle: -20
        }, 100).start()
    },

    // Restart the game
    restartGame: function() {
    this.state.start('GameOver',true, false, this.distance);
    },
    
    
    changeVelocity: function(){
    return -( 500 + (this.energy * 3));
    },
    
    changeSpeed: function(){ 
     return this.energy - (4 * this.energy);
    },
    
    
    changeGravity: function(){
        if (this.bubbles.children.gravity < 0){
        this.bubbles.children.map((bubble)=>bubble.body.gravity.y = 50);
        this.bubbleStars.children.map((bubbleStar)=>bubbleStar.body.gravity.y = 70)
        }
        else{
        this.bubbles.children.map((bubble)=>bubble.body.gravity.y = -100);
        this.bubbleStars.children.map((bubbleStar)=>bubbleStar.body.gravity.y = -80)}
        }
       
    };




