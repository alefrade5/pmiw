function comenzar(x,y,t){
  image (botones [1],x,y,t+100,t);
}
function creditos(x,y,t){
  image (botones [0],x,y,t+100,t);
}
function flecha (x,y,t){
   image (botones[4],x,y,t+50,t)
}

function fin (x,y,t){
 image (botones [5],x,y,t+50,t); 
}

function cuadrotxt (txt,tam,x,y){
  fill (150,0,0);
  rect (x,y+380,640,480);
  fill (255);
  textSize (tam);
  text (texto[txt],50,400,590,460);
}


function portadasa (x,y){
  image (portada,x,y,640,480);
  image (titulo, width/4,300,width/2,70);
  comenzar(420,380,100);
  creditos (20,380,100);
}

function Pcreditos (x,y){
 image (Pagcreditos,x,y);
  }

function pagina (img,x,y){
  image (paginas[img],x,y,640,480); 
  
}

function caminos (x,y){
  image (paginas[2],x,y,640,480);
  image (botones[2],50,250,250,270);
  image (botones[3],350,250,250,270)
}

function mousePressed() {
  if (click.isPlaying()) {
    click.pause();
  } else {
    click.play();
  }
}
