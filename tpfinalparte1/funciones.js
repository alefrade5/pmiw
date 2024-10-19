function comenzar(x,y,t){
  image (botones [1],x,y,t+100,t);
}
function creditos(x,y,t){
  image (botones [0],x,y,t+100,t);
}
function flecha (x,y,t){
   image (botones[4],x,y,t+50,t);
}

function cuadrodetexto (x1,y1,x2,y2){
  fill (150,0,0);
  rect (x1,y1,x2,y2);
  fill (200,200,0);
  rect (0,y1,x2/5,y2/10);
}

function Pcreditos (x,y){
 fill (150,0,0);
 rect (x,y,640,480); 
 fill (224);
 textSize (30);
 textAlign (CENTER);
 text (textocrd,640,480);
}
