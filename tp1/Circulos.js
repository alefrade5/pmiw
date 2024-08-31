function circulos(){

 //Variables
 let espacio = 100; 
 let cantidadX = width/espacio;
 let cantidadY = 800/espacio;

 //Cantidades y Posines de los circulos
 for (let x = 0; x < cantidadX; x++) {
 for (let y = 0; y < cantidadY; y++) {
 let posX = x * espacio + espacio / 2 + width/2 - 50; 
 let posY = y * espacio + espacio / 2 - 26; 
 for (let i = numCirculos; i > 0; i--) {
 let nuevoRadio = map(mouseX, mouseY, width, radioOriginal, 100);
 let tamEllipse = i * (nuevoRadio * 2 / numCirculos);

 //Ciruculos de Illusion Optica
 ellipse(posX, posY, tamEllipse, tamEllipse);
}
}
}

 //Cantidades y Posines de los circulos
 for (let x = 0; x < cantidadX; x++) {
 for (let y = 0; y < cantidadY; y++) {
 let posX = x * espacio + espacio / 2 + width/2 - 1; 
 let posY = y * espacio + espacio / 2 - 75; 
 for (let i = numCirculos; i > 0; i--) {
 nuevoRadio = map(mouseX, mouseY, width, radioOriginal, 100);
 let tamEllipse = i * (nuevoRadio * 2 / numCirculos);
 
 //Ciruculos de Illusion Optica
 ellipse(posX, posY, tamEllipse, tamEllipse);      
}
}
}
}
