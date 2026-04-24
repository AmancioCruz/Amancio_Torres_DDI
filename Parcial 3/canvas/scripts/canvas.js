import { Cuadrado, Linea, Sticker, Circulo } from "./figuras.js";

const canvas = document.querySelector("#lienzo");
const ctx = canvas.getContext("2d");
const elementos = [];
const opciones = {
    pincel: false,
    linea: false,
    circulo: false,
    cuadro: false,
    triangulo: false,
    borrador: false,
    sticker: false,
}

const posicionesCursor = {
    iniciales: { x: 0, y: 0 },
    finales: { x: 0, y: 0 }
}

let presionado = false;

canvas.addEventListener("mousedown", (event) => alPresionarClick(event));
canvas.addEventListener("mousemove", (event) => mientrasPrecionaClick(event));
canvas.addEventListener("mouseup", (event) => alSoltarClick(event));

document.querySelector("#btn_pincel").addEventListener("click", () => cambiarOpcion("pincel"))
document.querySelector("#btn_linea").addEventListener("click", () => cambiarOpcion("linea"))
document.querySelector("#btn_cuadro").addEventListener("click", () => cambiarOpcion("cuadro"))
document.querySelector("#btn_circulo").addEventListener("click", () => cambiarOpcion("circulo"))
document.querySelector("#btn_triangulo").addEventListener("click", () => cambiarOpcion("triangulo"))
document.querySelector("#btn_sticker").addEventListener("click", () => cambiarOpcion("sticker"))
document.querySelector("#btn_borrador").addEventListener("click", () => cambiarOpcion("borrador"))

function cambiarOpcion(opcion) {
    for (let clave in opciones) {
        opciones[clave] = false
    }
    opciones[opcion] = true;
    console.log(opciones);
}

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
        let elemento;
        if (opciones.pincel) {
            //opcion para dibujar con el pincel
        }
        else if (opciones.linea) {
            //opcion para dibujar linea
            elemento = new Linea(posicionesCursor,"blue", 5)
        }
        else if (opciones.cuadro) {
            //opcion para dibujar un cudro
            elemento = new Cuadrado(posicionesCursor,"blue", "red", 5);

        }
        else if (opciones.circulo) {
            //opcion para dibujar un circulo
            elemento = new Circulo(posicionesCursor,"blue", "red", 5);
        }
        else if (opciones.triangulo) {
            //opcion para dibujar un triangulo

        }
        else if (opciones.sticker) {
            //opcion para dibujar un sticker

        }
        else if (opciones.borrador) {
            //opcion para dibujar borrar

        }
        else {

        }

        /*const linea = new Linea(posicionesCursor, "blue");
        linea.Dibujar(ctx);*/
        //al finalizar el trazo de una linea le 
        //decimo que el punto inicial de la siguiente es el final

        ctx.clearRect(0,0, canvas.clientWidth, canvas.clientHeight)
        elemento.Dibujar(ctx);
        //posicionesCursor.iniciales.x = posicionesCursor.finales.x;
        //posicionesCursor.iniciales.y = posicionesCursor.finales.y;
    }
    //console.log(posicionesCursor);
}

function alSoltarClick(event) {
    console.log("se solto el boton click en el lienzo");
    posicionesCursor.finales.x = event.offsetX;
    posicionesCursor.finales.y = event.offsetY;

    console.log(opciones)
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

