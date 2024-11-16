class Enemigo{
constructor (posX,posY){
   this.x = posX;
   this.y = posY;
   this.tam = 170;
   this.medusa = imagen[2];
   this.vida = 100;
   this.bala;
  }
  
  dibujar(){
   image (this.medusa,this.x,this.y,this.tam,this.tam);
  }
  
  atacar(){
    
  }
  
  disparar(){
    
  }
  
}
