//Priscila Fernandez
//Alessandro Frade
//Aún nos quedan muchas cosas por arreglar y agregar.
function setup() {
createCanvas (640,480);
estado = 0;

}
function draw(){
  
  if (estado == 0){
  image (portada,0,0,640,480);
  image (titulo, width/4,300,width/2,70);
  comenzar(420,380,100);
  creditos (20,380,100);
  } else if (estado == 1){
  image (paginas[0],0,0,640,480);
  flecha (540,440,50);
  }else if (estado == 2){
  image (paginas[1],0,0,640,480); 
  cuadrodetexto (0,350,640,480);
  flecha (540,440,50);
  }else if (estado == 3){
  image (paginas[2],0,0,640,480); 
  image (botones [2],20,380,200,100);
  image (botones [3],420,380,200,100);
  }else if (estado == 4 ){
   image (paginas[3],0,0,640,480); 
   flecha (540,440,50);
  }else if (estado == 5){
   image (paginas[4],0,0,640,480); 
   flecha (540,440,50);
  }else if (estado == 6){
   image (paginas[5],0,0,640,480); 
   flecha (540,440,50);
  }else if (estado == 7){
   image (paginas[6],0,0,640,480); 
   flecha (540,440,50);
  }else if (estado == 8){
   image (paginas[7],0,0,640,480); 
   flecha (540,440,50);
  }else if (estado == 9){
   image (paginas[8],0,0,640,480); 
   flecha (540,440,50);
  }else if (estado == 10){
   image (paginas[9],0,0,640,480); 
   flecha (540,440,50);
  }else if (estado == 11){
   image (paginas[10],0,0,640,480); 
   flecha (540,440,50);
  }else if (estado == 12){
   image (paginas[11],0,0,640,480); 
   flecha (540,440,50);
  }else if (estado == 13){
   image (paginas[12],0,0,640,480); 
   flecha (540,440,50);
  }else if (estado == 14){
   image (paginas[13],0,0,640,480); 
   flecha (540,440,50);
  }else if (estado == 15){
   image (paginas[14],0,0,640,480); 
   flecha (540,440,50);
  }else if (estado == 16){
   image (paginas[15],0,0,640,480); 
   flecha (540,440,50);
  }else if (estado == 16){
   image (blair[0],0,0,640,480); 
   flecha (540,440,50);
  }else if (estado == 17){
   image (blair[1],0,0,640,480); 
   flecha (540,440,50);
  }else if (estado == 18){
   image (blair[2],0,0,640,480); 
   flecha (540,440,50);
  }else if (estado == 19){
   image (blair[3],0,0,640,480); 
   flecha (540,440,50);
  }else if (estado == 20){
   image (blair[4],0,0,640,480); 
   flecha (540,440,50);
  }else if (estado == 21){
   image (blair[5],0,0,640,480); 
   flecha (540,440,50);
  }else if (estado == 22){
   image (medusa[0],0,0,640,480); 
   flecha (540,440,50);
  }else if (estado == 23){
   image (medusa[1],0,0,640,480); 
   flecha (540,440,50);
  }else if (estado == 24){
   image (medusa[2],0,0,640,480); 
   flecha (540,440,50);
  }else if (estado == 25){
   image (medusa[3],0,0,640,480); 
   flecha (540,440,50);
  }else if (estado == 26){
   image (medusa[4],0,0,640,480); 
   flecha (540,440,50);
  }else if (estado == 27){
   image (medusa[5],0,0,640,480); 
   flecha (540,440,50);
  }
  
  
}

function mouseClicked() {
  // Verifica si la flecha está en la última posición
  if (estado >= 0 && estado <= 27) {
    // Coordenadas de la flecha
    let flechaX = 540;
    let flechaY = 440;
    let flechaWidth = 50;
    let flechaHeight = 50;

    // Comprobar si se ha hecho clic en la flecha
    if (mouseX > flechaX && mouseX < flechaX + flechaWidth &&
        mouseY > flechaY && mouseY < flechaY + flechaHeight) {
      estado++; // Avanza al siguiente estado
      // Evita que el estado exceda el número total de páginas o imágenes
      if (estado > 27) {
        estado = 0; // Opcional: vuelve al estado inicial si se excede
      }
    }
  }

  if (estado == 0) {
    if (mouseX > 420 && mouseX < 520 && mouseY > 380 && mouseY < 430) {
      estado = 1;
    } else if (mouseX > 20 && mouseX < 220 && mouseY > 380 && mouseY < 430) {
      Pcreditos(0, 0);
    }
  }
}
