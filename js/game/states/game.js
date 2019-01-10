AcquaRush.Game = {
  preload: function() {
    let sharkvelocity;
    let bubblevelocity;
    let currentDistance;
    let life;
    let bubbleVelocity;
    let pufferVelocity;
  },
  create: function() {
    this.currentDistance = 0;
    this.maxEnergy = 100;
    this.bubbleVelocity = -400;
    this.pufferVelocity = -300;
    this.life = 3;


    game.physics.startSystem(Phaser.Physics.ARCADE);

    this.background = game.add.tileSprite(0, 0, game.width, game.height - 1, 'background');

    this.jumpSound = game.add.audio('jump');
    this.timer1 = game.time.events.loop(1000, this.addBubble, this);
    this.timer2 = game.time.events.loop(5000, this.changeGravity, this);
    this.timer3 = game.time.events.loop(5000, this.addStarBubble, this);
    this.timer4 = game.time.events.loop(this.getSharkFrequency(), this.addShark, this);
    this.timer5 = game.time.events.loop(5000, this.addOctopus, this);
    this.timer6 = game.time.events.loop(1000, this.getDistance, this);
    this.timer7 = game.time.events.loop(1000, this.changeVelocity, this);
    this.timer8 = game.time.events.loop(10000, this.addLife, this);
    this.timer9 = game.time.events.loop(10000, this.addPuffer, this)
      
    this.sharks = game.add.group();
    this.sharks.enableBody = true;
    this.bubbles = game.add.group();
    this.bubbleStars = game.add.group();
    this.octopuss = game.add.group();
    this.lifes = game.add.group();
    this.puffers = game.add.group();

    this.pop = game.add.audio('pop');
    this.loseLife = game.add.audio('lose');
    this.under = game.add.audio('under', 1, true);
    this.lifeUp = game.add.audio('lifeUp');
    this.boing = game.add.audio('boing');
    this.loseEnergy = game.add.audio('loseEnergy');
    this.under.play();

    this.fish = game.add.sprite(100, 245, 'jelly');
    game.physics.arcade.enable(this.fish);
    this.fish.alive = true;
    this.fish.scale.setTo(0.2, 0.2);
    this.fish.anchor.setTo(-0.2, 0.5);
    this.fish.body.collideWorldBounds = true;
    this.fish.body.bounce.setTo(0.9, 0.9);
    this.fish.body.gravity.y = 900;
    var swim = this.fish.animations.add('swim');
    this.fish.animations.play('swim', 5, true);

    let style = {
      font: "2rem Roboto",
      fill: "#FFFFFF",
      align: "center"
    };
    this.scoreEnergy = game.add.text(10, 10, 'ENERGY:' + this.energy, style);
    this.scoreDistance = game.add.text(200, 10, 'DISTANCE:' + this.distance, style)
    this.totalLife = game.add.text(420, 10, 'LIFE:' + this.life, style);



    var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    var tap = game.input.onTap.add(this.jump, this)
    spaceKey.onDown.add(this.jump, this);

  },

  update: function() {
    let style = {
      font: "2rem Roboto",
      fill: "#FFFFFF",
      align: "center"
    };

    this.scoreEnergy.destroy();
    this.scoreDistance.destroy();
    this.totalLife.destroy();
    this.scoreEnergy = game.add.text(10, 10, 'SPEED:' + game.scores.energy, style);
    this.scoreDistance = game.add.text(200, 10, 'DISTANCE:' + game.scores.distance, style);
    this.totalLife = game.add.text(600, 10, 'LIFE:' + this.life, style);
    if (this.life < 0) {
      this.restartGame()
    }
    if (this.fish.angle < 20) {
      this.fish.angle += 1;
    }
    this.addsOverlap();
    this.background.autoScroll(this.changeSpeed(game.scores.energy), -0);
  },

  addStarBubble: function(x, y) {
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
  addLife: function(x, y) {
    x = this.game.width + 100;
    y = 420 - (200 * Math.floor(Math.random() * 3));
    let newLife = game.add.sprite(x, y, 'life');
    newLife.scale.setTo(0.5, 0.5);
    game.physics.arcade.enableBody(newLife);
    newLife.body.gravity.y = 10;
    game.physics.enable([newLife, this.fish], Phaser.Physics.ARCADE)
    newLife.body.velocity.x = this.bubbleVelocity;
    this.lifes.add(newLife);

  },

  addBubble: function(x, y) {
    let maxMin = (Math.random() * (0.12 - 0.0200) + 0.08).toFixed(4);
    x = this.game.width + 100;
    y = 420 - (200 * Math.floor(Math.random() * 3));
    let bubble = game.add.sprite(x, y, 'bubble');
    bubble.scale.setTo(maxMin, maxMin);
    game.physics.arcade.enableBody(bubble);
    bubble.body.gravity.y = 10;
    game.physics.enable([bubble, this.fish], Phaser.Physics.ARCADE)
    bubble.body.velocity.x = this.bubbleVelocity;
    this.bubbles.add(bubble);

  },
  addPuffer: function(x, y) {
    if (this.game.time.totalElapsedSeconds() < +30) return;
    let maxMinGravity = Math.random() * 20 - 10;
    x = this.game.width + 100;
    y = this.game.height - (200 * Math.floor(Math.random() * 3));
    let puffSprite = game.add.sprite(x, y, 'puffer');
    puffSprite.scale.setTo(0.7, 0.7);
    game.physics.arcade.enableBody(puffSprite);
    puffSprite.animations.add('swim');
    puffSprite.animations.play('swim', 8, true);
    puffSprite.scale.x *= -1;
    puffSprite.body.gravity.y = maxMinGravity;
    puffSprite.body.velocity.x = this.pufferVelocity;
    this.puffers.add(puffSprite);
    puffSprite.outOfBoundsKill = true;
  },

  addShark: function(x, y) {
    let maxMinScale = (Math.random() * (0.5 - 0.0200) + 0.2).toFixed(4);
    let maxMinGravity = Math.random() * 20 - 10;
    x = this.game.width + 100;
    y = (this.game.height / 5) * Math.random() * 5;
    var sharkSprite = game.add.sprite(x, y, 'sharkSprite');
    game.physics.arcade.enableBody(sharkSprite);
    sharkSprite.body.width = 46;
    sharkSprite.body.height = 82;
    sharkSprite.scale.setTo(maxMinScale, maxMinScale);
    var swim = sharkSprite.animations.add('swim');
    sharkSprite.animations.play('swim', 30, true);
    sharkSprite.body.gravity.y = maxMinGravity;
    sharkSprite.body.velocity.x = this.changeVelocity();
    this.sharks.add(sharkSprite);
    sharkSprite.outOfBoundsKill = true;
  },

  addOctopus: function(x, y) {
    if (this.game.time.totalElapsedSeconds() < +20) return;
    let maxMinScale = (Math.random() * (1.2 - 0.9) + 0.9).toFixed(10);
    let maxMinGravity = Math.random() * 20 - 10;
    x = this.game.width + 100;
    y = this.game.height / 10 * Math.random(10);
    var octoSprite = game.add.sprite(x, y, 'octoSprite');
    game.physics.arcade.enableBody(octoSprite);
    octoSprite.scale.setTo(maxMinScale, maxMinScale)
    var swim = octoSprite.animations.add('swim');
    octoSprite.animations.play('swim', 5, true);
    octoSprite.body.gravity.y = maxMinGravity;
    octoSprite.body.velocity.x = this.changeVelocity();
    this.octopuss.add(octoSprite);
    octoSprite.outOfBoundsKill = true;
  },

  destroyBubble: function(bubble) {
    this.bubbles.children.map((bubble) => bubble.destroy());
  },

  getBubble: function(bird, bubble) {
    this.pop.play();
    bubble.destroy();
    game.scores.energy += 10;
  },
  getLife: function(bird, newLife) {
    this.lifeUp.play();
    newLife.destroy();
    this.life += 1;
  },

  getBubbleStar: function(bird, bubbleStar) {
    this.pop.play();
    bubbleStar.destroy();
    game.scores.energy += 20;
  },

  getDistance: function() {
    this.currentDistance = this.currentDistance + (game.scores.energy / 10);
    game.scores.distance = Math.round(this.currentDistance);
  },

  getSharkFrequency: function() {
    return 900 - this.game.time.totalElapsedSeconds() * 3;

  },
    
  sharksGetBird: function(bird, sharkSprite) {
    if (!sharkSprite.HasEaten) {
      this.life -= 1;
      game.scores.energy = Math.round(game.scores.energy / 2);
      this.loseLife.play();
      sharkSprite.HasEaten = true;
    }
  },

  octoGetBird: function(bird, octoSprite) {
    if (!octoSprite.HasEaten) {
      game.scores.energy = Math.round(game.scores.energy / 2);
      this.loseEnergy.play();
      octoSprite.HasEaten = true;
    }
  },
  pufferGetBird: function(bird, pufferSprite) {
    if (!pufferSprite.HasEaten) {
      game.scores.energy = Math.round(game.scores.energy / 0.5);
      this.boing.play();
      pufferSprite.HasEaten = true;
    }
  },

  jump: function() {
    if (this.fish.alive == false)
      return;
    this.fish.body.velocity.y = -350;
    game.add.tween(this.fish).to({
      angle: -20
    }, 100).start()
  },

  restartGame: function() {
    this.state.start('GameOver', true, false, this.distance);
  },

  changeVelocity: function() {
    return -((500 + (game.scores.energy * 3)) * game.scores.difficulty);
  },

  changeSpeed: function() {
    return game.scores.energy - (4 * game.scores.energy);
  },


  changeGravity: function() {
    if (this.bubbles.children.gravity < 0) {
      this.bubbles.children.map((bubble) => bubble.body.gravity.y = 50);
      this.bubbleStars.children.map((bubbleStar) => bubbleStar.body.gravity.y = 70)
    } else {
      this.bubbles.children.map((bubble) => bubble.body.gravity.y = -100);
      this.bubbleStars.children.map((bubbleStar) => bubbleStar.body.gravity.y = -80)
    }
  },

  addsOverlap: function() {
    game.physics.arcade.overlap(this.bubbles, this.fish, this.getBubble, null, this);
    game.physics.arcade.overlap(this.bubbleStars, this.fish, this.getBubbleStar, null, this);
    game.physics.arcade.overlap(this.lifes, this.fish, this.getLife, null, this);
    game.physics.arcade.overlap(this.sharks, this.fish, this.sharksGetBird, null, this);
    game.physics.arcade.overlap(this.octopuss, this.fish, this.octoGetBird, null, this);
    game.physics.arcade.overlap(this.puffers, this.fish, this.pufferGetBird, null, this);
  },

  render: function() {
    //game.debug.text('Elapsed seconds: ' + this.game.time.totalElapsedSeconds(), 32, 32);
    //game.debug.body(this.fish);
    //this.sharks.children.forEach(shark=> game.debug.body(shark));
    //game.debug.body(this.sharks);
  },


};