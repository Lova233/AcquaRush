const AcquaRush = function() {};
AcquaRush.Boot = {
    preload: function() {
                game.load.image('background', 'assets/back2.jpg');
    },
    create: function() {
        this.state.start('PreLoad');
    }
};