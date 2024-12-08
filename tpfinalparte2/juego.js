class Juego {
  constructor() {
      this.estado = "Iniciar"
      this.personaje = new Personaje(width/2, height, 100)
      this.enemigos = []
      this.cantidadDeEnemigos  = 10
      for (let i = 0; i < this.cantidadDeEnemigos; i++) {
      this.enemigos[i] = new Enemigo(random(-width/2, width,100), random(height/2), random(100, 50))
    }
    this.fondo = loadImage("data/1.png")
    this.fondo2 = loadImage("data/3.png") 
    this.fondo3 = loadImage("data/5.png")
    this.fondo4 = loadImage("data/4.png") 
    this.fondo6 = loadImage("data/6.png")
    this.fondo7 = loadImage("data/7.jpg") 
    this.fondo8 = loadImage("data/8.jpg")
    this.boton = loadImage("data/9.png") 
  }

  actualizar() {
    stroke(255, 255, 0)
      strokeWeight(3)

      for (let i = 0; i < this.cantidadDeEnemigos; i++) {
      this.enemigos[i].mover()
    }
    for (let i = 0; i < this.cantidadDeEnemigos; i++) {
        if (dist(
        this.personaje.x,
        this.personaje.y,
        this.enemigos[i].x,
        this.enemigos[i].y) < this.personaje.tam/2 + this.enemigos[i].tam/2) {
        this.personaje.colision = true
        this.personaje.tam--
      }
    }

    if (this.personaje.tam <= 60) {
      this.estado = "Perdiste"
    }

    if (this.personaje.y <= 0) {
      this.estado = "Ganaste"
    }
  }

  dibujar() {
    if (this.estado == "Iniciar") {
      image(this.fondo8, 0, 0, width, height);
      textAlign(CENTER, CENTER);
      textSize(30);
      rectMode(CENTER);
      push();
      strokeWeight(2);
      stroke(255,5,0);
      fill(255,5,0);
      text("PRESIONA CUALQUIER TECLA", 315, 230);
      pop();
      stroke(0);
       fill(255,195,0);
      textSize(20);
       text("INSTRUCCIONES", 315, 380);
       text("Trata de escapacar de las brujas", 315, 400);
       text("Usando A, W, S, D para moverte", 315, 420);
          if (this.boton) {
      image(this.boton, 510, 390, 100, 100);

      // Verificar si el mouse está dentro del rectángulo
      if (mouseX > 510 && mouseX < 610 && mouseY > 440 && mouseY < 490) {
        // Cambiar el estado para ir a la pantalla de créditos
        if (mouseIsPressed) {
          this.estado = "Creditos";  // Cambiar el estado a la pantalla de créditos
        }
      }
          }
       
    } else if (this.estado == "Juego") {
      image(this.fondo, 0, 0, width, height)
        this.actualizar()
        this.personaje.actualizar()
        this.personaje.dibujar()
        for (let i = 0; i < this.cantidadDeEnemigos; i++) {
        this.enemigos[i].dibujar()
      }
    } else if (this.estado == "Ganaste" ) { 
     background(255,255,0);
    image(this.fondo7, 0, 0, width, height);
      textAlign(CENTER, CENTER);
      textSize(40);
       rectMode(CENTER);
    stroke(255);
      fill(0);
      text("¡HAS GANADO!", 315, 173);
      text("Presiona R para volver", 315, 230);
    }
    else if (this.estado == "Perdiste"){
      background(222,2,2);
      image(this.fondo6, 0, 0, width, height);
       textAlign(CENTER, CENTER);
      textSize(30);
       rectMode(CENTER);
    stroke(0);
      fill(255);
      text("¡PERDISTE!", 315, 173);
      text("Presiona R para reiniciar", 315, 220);
    }
     else if (this.estado == "Creditos") {
       background(0);
        textAlign(CENTER, CENTER);
      textSize(40);
       rectMode(CENTER);
    stroke(255);
      fill(255);
      text("CREDITOS", 315, 173);
      text("Hecho por Alessandro Frade", 315, 230);
      textSize(20);
      text("Presiona R para volver", 320, 430);
      
      if (key === 'r' || key === 'R') {  
      window.location.reload()
    }
  }
  }
 mousePressed() {
      if (pantalla == "menu" && mouseX > width/3+45 && mouseX < width/3+45 + comenzar.width && mouseY > 350 && mouseY < 350 + boton.height) {
    pantalla = "Creditos";  
}
  }
  keyPressed() {
    if (this.estado == "Iniciar") {
      this.estado = "Juego"
    }
    this.personaje.keyPressed()
  }
  keyReleased(){
    if (this.estado == "Iniciar") {
      this.estado = "Juego"
    }
  this.personaje.keyReleased()
}
}
