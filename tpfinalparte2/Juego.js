class Juego{
 constructor(){ 
  this.crearFondo(); 
  this.crearPersonaje();
  this.crearEnemigo();
 }
 
 dibujar(){
  this.Fondo.dibujar(); 
  this.Personaje.dibujar();
  this.Enemigo.dibujar();
  
 }

crearFondo(){
 this.Fondo = new Fondo(); 
}

crearPersonaje(){
  this.Personaje = new Personaje(490,305);
}

crearEnemigo(){
 this.Enemigo = new Enemigo(50,275); 
}

tecla(keyCode){
  this.Personaje.tecla(keyCode);
  }
}
