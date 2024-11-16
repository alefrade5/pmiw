class Personaje{
 constructor (posX,posY){
   this.x = posX;
   this.y = posY;
   this.tam = 140;
   this.maka = imagen[0];
   this.vida = 100;
   this.vel = 10;
  }

dibujar(){
  image(this.maka,this.x,this.y,this.tam,this.tam);
 }
 
 saltar(){
   this.y = this.y - this.vel;
   if (this.y <= 100){
     this.vel = -10;
   }
   if (this.y >= posY){
     this.vel = 0;
   }
 }
 
 atacar(){
 this.maka = imagen[1];
 this.y = 285;
 this.x = 466;
 }

tecla(keyisPressed){
    if (keyCode == UP_ARROW){
    this.saltar();
  }else{
    (keyCode == RIGHT_ARROW)
    this.atacar();
  }
}
}
