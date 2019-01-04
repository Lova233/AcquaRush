const AcquaRush = function() {};
AcquaRush.Boot = {
    preload: function() {
                game.load.image('background', 'assets/background.png');
    },
    create: function() {
        this.state.start('PreLoad');
    }
};