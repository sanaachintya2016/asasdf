var gameState = 0;
var db;
var playerCount;
var game , player , form;
var allPlayers;
function setup(){
    createCanvas(500,500);

    db = firebase.database();
game = new Game();
game.getState();
game.start();
}

function draw(){

    if(playerCount === 4){

        game.updateState(1)
    }
if(gameState===1){

game.play()

}    
}



