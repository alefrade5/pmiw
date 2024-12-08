//Alessandro Frade 
//Legajo: 94736/1
//Comision 2
//Soul Eater 
//Link: https://www.youtube.com/watch?v=9GHJJBGHF9

let juego

function setup() {
  createCanvas(640,480)
  juego = new Juego()
}

function draw() {
  juego.dibujar()
}

function keyPressed(){
    juego.keyPressed()
}
function keyReleased(){
    juego.keyReleased()()
}
