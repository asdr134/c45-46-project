class Game {
    constructor() {

    }

    start() {
        player = new Player()
        playerCount = player.getCount()

        form = new Form();
        form.display();

        
        player1 = createSprite(200, 650, 20, 20)
        player1.addImage("player1",player1_Img)
        player2 = createSprite(1550, 650, 20, 20)
        player2.addImage("player2",player2_Img)

        players = [player1, player2]


    }

    getState() {
        //.ref() gives the path from where we have to read the data in the database.
        var gameStateRef = database.ref("gameState")
        // .on() is used to read the data continously from the database.
        gameStateRef.on("value", data => {
            gameState = data.val()
            //.val() is used to extact the data in a readable format.
        })
    }

    //write the gameState into the database
    update(state) {
        database.ref("/").update({
            gameState: state

        })
    }


    play(){
        drawSprites()
        
    }


}