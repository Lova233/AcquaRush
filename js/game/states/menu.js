AcquaRush.Menu = {
    create: function() {
        console.log("menuee")
        let style = { font: "2rem Roboto", fill: "#FFFFFF", align: "center" };
        this.background = game.add.tileSprite(0, 0, game.width, game.height - 1, 'background');
        this.background.autoScroll(-30, -0);
        this.title = game.add.sprite(8, 60, 'title').scale.setTo(0.5, 0.5);
          

    
    
    
    }

}