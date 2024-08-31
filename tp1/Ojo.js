function ojo(){
  
//Movimiento con el mouse
rectMode(CENTER);
translate(height*1.5, width/4);
rotate(radians(mouseX));
rotate(radians(mouseY)); 
  
//Dibujo de un ojo
stroke(255);
strokeWeight(8);
fill(0);
ellipse(0, 0, 100, 100); 
ellipse(0, 0, 45, 95);   
strokeWeight(10);
ellipse(0, 0, 20, 20);
strokeWeight(6);
stroke(0);
noFill();
fill(255);
}
