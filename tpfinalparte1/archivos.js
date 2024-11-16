let paginas = [];
let pelea = [];
let blair = [];
let medusa = [];
let botones = [];
let texto = [];
let click; 

function preload (){
  //imagenes
portada = loadImage ('/data/portada.jpg');
Pagcreditos = loadImage ('/data/Pcreditos.png');

titulo = loadImage ('/data/titulo.png');
botones[0] = loadImage ('/data/creditos.png');
botones[1] = loadImage ('/data/comenzar.png');
botones[2] = loadImage ('/data/BC.png');
botones[3] = loadImage ('/data/BS.png');
botones[4] = loadImage ('/data/Flecha.png');
botones[5] = loadImage ('/data/fin.png');

paginas[0] = loadImage('/data/1.jpg');
paginas[1] = loadImage ('/data/2.jpg');
paginas[2] = loadImage ('/data/3.png');
paginas[3] = loadImage ('/data/4.jpg');
paginas[4] = loadImage ('/data/5.jpg');
paginas[5] = loadImage ('/data/6.jpg');
paginas[6] = loadImage ('/data/7.jpg');
paginas[7] = loadImage ('/data/8.jpg');
paginas[8] = loadImage ('/data/9.jpg');
paginas[9] = loadImage ('/data/10.jpg');
paginas[10] = loadImage ('/data/11.jpg');
paginas[11] = loadImage ('/data/12.jpg');
paginas[12] = loadImage ('/data/13.jpg');
paginas[13] = loadImage ('/data/pelea1.gif');
paginas[14] = loadImage ('/data/pelea2.gif');
paginas[15] = loadImage ('/data/pelea3.gif');
paginas[16] = loadImage ('/data/14.jpg');
paginas[17] = loadImage  ('/data/15.jpg');
paginas[18] = loadImage ('/data/16.png');
paginas[19] = loadImage ('/data/blair1.jpg');
paginas[20] = loadImage ('/data/blair2.jpg');
paginas[21] = loadImage ('/data/blair3.jpg');
paginas[22] = loadImage ('/data/blair4.jpg');
paginas[23] = loadImage ('/data/blair5.jpg');
paginas[24] = loadImage ('/data/blair6.jpg');
paginas[25] = loadImage ('/data/medu1.png');
paginas[26] = loadImage ('/data/medu2.png');
paginas[27] = loadImage ('/data/medu3.jpg');
paginas[28] = loadImage ('/data/medu4.jpg');
paginas[29] = loadImage ('/data/medu5.jpg');
paginas[30] = loadImage ('/data/medu6.jpg');
  
//textos
texto = loadStrings ('/data/lineas.txt');

click = loadSound('/data/click.mp3');

}
