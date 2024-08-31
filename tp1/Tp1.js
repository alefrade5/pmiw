//Alessandro Frade, Comision 2
//https://www.youtube.com/watch

//Declaracion de variables
let imagen;
let pantalla;
let numCirculos = 6; 
let creciendo = true;
let radioOriginal = 50;

function preload(){
 imagen = loadImage ("data/imagen.jpg");
}

function setup(){
 createCanvas (800, 400);
 imagen.resize (400, 400);
 strokeWeight(3);
 background(255);
}

function draw(){
  
circulos();

image (imagen, 0, 0);

ojo();

}

//Reinicio de las variables
function keyPressed() {
 if (key == 'R' || key == 'r') {
mouseX = 50;
mouseY = 50;
}
}
