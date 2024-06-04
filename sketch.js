function setup() {
    createCanvas(500, 500);
    background("#DA98AE");
  }
  
  function draw() {
   
    stroke ("#070707");
    fill ("rg#0096886,230,230)");
    
    //console.log(mouseIsPressed)
    
    if(mouseIsPressed){
    rect (mouseX, mouseY ,20, 35);
    }
    
  }