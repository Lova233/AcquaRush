AcquaRush.GameOver = {
    create: function() {
        console.log("over")
        this.background = game.add.tileSprite(0, 0, game.width, game.height - 1, 'background');
        this.background.autoScroll(-30, -0);
    },
    update: function() {
    }
}