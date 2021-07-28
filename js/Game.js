class Game{

constructor(){}

getState(){
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data){

        gameState = data.val();

    })
}

update(state){

    database.ref("/").update({
        'gameState' : state

    })
}

async start(){
if(gameState === 0){
    player = new Player();
    var playerC = await database.ref("playerCount").once("value");
    if(playerC.exists()){
        playerCount = playerC.val();
        player.getCount();
    }
    
    form = new Form();
    form.display();

    }

    bike1 = createSprite(100,200);
    bike1.addImage(b1Img);
    bike2 = createSprite(300,200);
    bike2.addImage(b2Img);
    bikes = [bike1, bike2];
    
}

    play(){
        background("black");
        form.hide();
        //text("Game has started", 150, 100);

       Player.getPlayerInfo();
       console.log(allPlayers);

       if(allPlayers !== undefined){
        image(bgImg ,0,-displayHeight*4,displayWidth,displayHeight*5);
        var index = 0;
        var x = 0;
        var y = 0;

       // var displayposition = 130;
        console.log("inside if")
        for(var p in allPlayers){
        index = index + 1;
        x = x + 200;
        y = displayHeight-allPlayers[p].distance
        bikes[index-1].x = x;
        bikes[index-1].y = y;
            //console.log(p);
            if(index === player.index){
                bikes[index-1].shapeColor = "red";
                camera.position.x = displayWidth/2;
                camera.position.y = bikes[index-1].y;
            }
        }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();
        }
        drawSprites();
       }   
    }
    