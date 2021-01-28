class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greet = createElement('h2');
  }
  hide(){
    this.greet.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    //this. input = createInput("Name");
    //this. button = createButton('Play');
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.update()
      player.updateCount(playerCount);
      //var greeting = createElement('h3');
      this.greet.html("Hello " + player.name )
      this.greet.position(130, 160)
    });

  }
}
