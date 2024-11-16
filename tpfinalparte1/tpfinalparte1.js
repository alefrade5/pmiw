//Priscila Fernandez
//Alessandro Frade

function setup() {
createCanvas (640,480);
estado = 0;
}

function draw(){
  
  if (estado == 0){
  portadasa(0,0);
  } else if (estado == 1){
  pagina (0,0,0);
  cuadrotxt (0,25,0,0);
  flecha (540,440,50);
  }else if (estado == 2){
  pagina (1,0,0);
  cuadrotxt (1,20,0,0);
  flecha (540,440,50);
  }else if (estado == 3){
  caminos (0,0);
  }else if (estado == 4){
  pagina (3,0,0);
  cuadrotxt (2,25,0,0);
  flecha (540,440,50);
  }else if (estado == 5){
  pagina (4,0,0);
  cuadrotxt (3,25,0,0);
  flecha (540,440,50);
  }else if (estado == 6){
  pagina (5,0,0);
  cuadrotxt (4,25,0,0);
  flecha (540,440,50);
  }else if (estado == 7){
  pagina (6,0,0);
  cuadrotxt (5,25,0,0);
  flecha (540,440,50);
  }else if (estado == 8){
  pagina (7,0,0);
  cuadrotxt (6,25,0,0);
  flecha (540,440,50);
  }else if (estado == 9){
  pagina (8,0,0);
  cuadrotxt (7,25,0,0);
  flecha (540,440,50);
  }else if (estado == 10){
  pagina (9,0,0);
  cuadrotxt (8,25,0,0);
  flecha (540,440,50);
  }else if (estado == 11){
  pagina (10,0,0);
  cuadrotxt (9,25,0,0);
  flecha (540,440,50);
  }else if (estado == 12){
  pagina (11,0,0);
  cuadrotxt (10,25,0,0);
  flecha (540,440,50);
  }else if (estado == 13){
  pagina (12,0,0);
  cuadrotxt (11,25,0,0);
  flecha (540,440,50);
  }else if (estado == 14){
  pagina (13,0,0);
  flecha (540,440,50);
  }else if (estado == 15){
  pagina (14,0,0);
  flecha (540,440,50);
  }else if (estado == 16){
  pagina (15,0,0);
  flecha (540,440,50);
  }else if (estado == 17){ 
  pagina (16,0,0);
  cuadrotxt (12,25,0,0);
  flecha (540,440,50);
  }else if (estado == 18){
  pagina (17,0,0);
  cuadrotxt (13,25,0,0);
  flecha (540,440,50);
  }else if (estado == 19){
  pagina (18,0,0);
  flecha (540,440,50);
  }else if (estado == 20){
  pagina (19,0,0);
  cuadrotxt (14,25,0,0);
  flecha (540,440,50);
  }else if (estado == 21){
  pagina (20,0,0);
  cuadrotxt (15,25,0,0);
  flecha (540,440,50);
  }else if (estado == 22){
  pagina (21,0,0);
  cuadrotxt (16,25,0,0);
  flecha (540,440,50);
  }else if (estado == 23){
  pagina (22,0,0);
  cuadrotxt (17,25,0,0);
  flecha (540,440,50);
  }else if (estado == 24){
  pagina (22,0,0);  
  cuadrotxt(18,25,0,0);
  flecha (540,440,50);
  }else if (estado == 25){
  pagina (23,0,0);
  cuadrotxt (19,25,0,0);
  flecha (540,440,50);
  }else if (estado == 26){
  pagina (24,0,0);
  cuadrotxt (20,25,0,0);
  fin (540,440,50);
  }else if (estado == 27){
  pagina (25,0,0);
  cuadrotxt (21,25,0,0);
  flecha (540,440,50);
  }else if (estado == 28){
  pagina (26,0,0);
  cuadrotxt (22,25,0,0);
  flecha (540,440,50);
  }else if (estado == 29){
  pagina (27,0,0);
  cuadrotxt (23,25,0,0);
  flecha (540,440,50);
  }else if (estado == 30){
  pagina (28,0,0);
  cuadrotxt (24,25,0,0);
  flecha (540,440,50);
  }else if (estado == 31){
  pagina (29,0,0);
  cuadrotxt (25,25,0,0);
  flecha (540,440,50);
  }else if (estado == 32){
  pagina (30,0,0);
  cuadrotxt (26,25,0,0);
  fin (540,440,50);
  }else if (estado == 33){
  Pcreditos (0,0);
  flecha (540,440,50);
  }
}

function mouseClicked() {
  if (estado >= 0 && estado <= 33 && estado !== 3) {
    let flechaX = 540;
    let flechaY = 440;
    let flechaWidth = 50;
    let flechaHeight = 50;

     if (mouseX > flechaX && mouseX < flechaX + flechaWidth &&
    mouseY > flechaY && mouseY < flechaY + flechaHeight) {
    if (estado == 2) {
        estado = 3;
    } else {
        estado++;
    }
    if (estado == 27) {
        estado = 0;
    }else if (estado == 27){
      estado++;
    }
    if (estado > 32){
    estado = 0;
    }
    if (estado == 33){
     estado = 0;
    }
   return;
    }
 }
  if (estado == 0) {
    if (mouseX > 420 && mouseX < 520 && mouseY > 380 && mouseY < 430) {
      estado = 1; 
    } else if (mouseX > 20 && mouseX < 220 && mouseY > 380 && mouseY < 430) {
      estado = 33; 
    }
  }
   if (estado == 3) {
     if (mouseX > 50 && mouseX < 300 && mouseY > 250 && mouseY < 520) {
      estado = 4;
    }
    else if (mouseX > 350 && mouseX < 600 && mouseY > 250 && mouseY < 520) {
      estado = 27;
    }
  }

}
