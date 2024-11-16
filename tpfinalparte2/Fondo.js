class Fondo{
  constructor(){
 this.x = 0;
 this.y = 0;
 this.fondo = imagen[5];
}

dibujar(){
  image (this.fondo,this.x,this.y,640,480);
}
}
