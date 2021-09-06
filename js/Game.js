class Game {
constructor(){




}

getState(){ // this function to read in the database
var gameStateRef = db.ref("gameState");
 gameStateRef.on("value" , function(data){gameState = data.val()})

}   
updateState(state){ // function updateState update the database file (write)
db.ref("/").update({gameState:state})//"/" refers to the main database inside which gamestate in created
    
}

async start(){
if(gameState === 0){
player = new Player();

var playerCountRef = await db.ref('playerCount').once("value");
if(playerCountRef.exists()){
playerCount = playerCountRef.val();
player.getCount();

}

form = new Form();
form.display();

}

}
play(){
form.hideForm();

textSize(20);
fill("red");
text("GAME START",120,100);
player.getPlayerInfo();
if(allPlayers!== undefined){
    var display_position = 130;
    for(var plr in allPlayers)
    {
    if(plr === "player" + player.index)
    {
    fill("red");
}
else
{
    fill("black");
    }
    text(allPlayers[plr].name + ":" + allPlayers[plr].distance , 120 , display_position);
    display_position = display_position + 20;
    }

    }
if(keyIsDown(UP_ARROW)){
    player.distance = player.distance + 50;
    player.updateNameDistance();

}
}

}