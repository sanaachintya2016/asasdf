class Form {
constructor(){
this.title = createElement("h2");
this.input = createInput("name");
this.button = createButton("play");
this.greeting = createElement("h2");


}
hideForm(){
this.input.hide();
this.button.hide();
this.greeting.hide();

}

display(){
this.title.html("Car Racing Game");
this.title.position(490,50);
this.input.position(450,200);

this.button.position(650,200);

this.button.mousePressed(()=>
{
this.input.hide();
this.button.hide();

player.name = this.input.value();
playerCount = playerCount + 1;
player.index = playerCount;
player.updateCount(playerCount);
this.greeting.html("Hello " + player.name);
this.greeting.position(500,200 );
})
}

}