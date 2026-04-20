import { Cuadrado, Linea, Sticker } from "./figuras.js";

const canvas = document.querySelector("#lienzo");
const ctx = canvas.getContext("2d");
const figuras = [];

const posicionesCursor = {
    iniciales: { x: 0, y: 0 },
    finales: { x: 0, y: 0 }
}

let presionado = false;

canvas.addEventListener("mousedown", (event) => alPresionarClick(event));
canvas.addEventListener("mousemove", (event) => mientrasPrecionaClick(event));
canvas.addEventListener("mouseup", (event) => alSoltarClick(event));

/*
ctx.fillRect();
ctx.strokeRect(); 
ctx.arc()
ctx.fill()
ctx.stroke()
ctx.moveTo()
ctx.lineTo()

ctx.fillStyle
ctx.strokeStyle
ctx.lineWidth

ctx.beginPath(


ctx.font = "48px serif";
ctx.strokeText("hola", 800, 800);
ctx.fillText("hola", 800, 800)

const imagen = new Image();
imagen.src = "../recursos/pikachu.png";
imagen.onload = () => {
    ctx.drawImage(imagen, 0, 0, imagen.width, imagen.height,
        0, 0, 500, 500
    );
    // imagen, sx, sy, 
}
*/

function alPresionarClick(event) {
    console.log("se presino el boton click en el lienzo");
    posicionesCursor.iniciales.x = event.offsetX;
    posicionesCursor.iniciales.y = event.offsetY;
    presionado = true;
}

function mientrasPrecionaClick(event) {
    console.log("Mientras el cursor esta sobre el lienzo");
    //dibujarLinea();
    posicionesCursor.finales.x = event.offsetX;
    posicionesCursor.finales.y = event.offsetY;
    if (presionado) {
        const linea = new Linea(posicionesCursor, "blue");
        linea.Dibujar(ctx);
        //al finalizar el trazo de una linea le 
        //decimo que el punto inicial de la siguiente es el final
        posicionesCursor.iniciales.x = posicionesCursor.finales.x;
        posicionesCursor.iniciales.y = posicionesCursor.finales.y;
    }
    //console.log(posicionesCursor);
}

function alSoltarClick(event) {
    console.log("se solto el boton click en el lienzo");
    posicionesCursor.finales.x = event.offsetX;
    posicionesCursor.finales.y = event.offsetY;

    const sticker = new Sticker(posicionesCursor, "../recursos/pikachu.png");
    sticker.Dibujar(ctx);

    //const linea = new Linea(posicionesCursor, "blue");
    //linea.Dibujar(ctx);
    /* const cuadro = new Cuadrado(
         posicionesCursor, "green", "red", 10
     );
 
     figuras.push(cuadro);
 
     cuadro.Dibujar(ctx);
 
     console.log(figuras);*/
    presionado = false;
}



function dibujarLinea() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    ctx.beginPath();
    ctx.moveTo(posicionesCursor.iniciales.x, posicionesCursor.iniciales.y);
    ctx.lineTo(posicionesCursor.finales.x, posicionesCursor.finales.y);
    ctx.stroke();
}

