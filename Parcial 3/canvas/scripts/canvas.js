import { Cuadrado, Linea, Sticker, Circulo } from "./figuras.js";

const canvas = document.querySelector("#lienzo");
const ctx = canvas.getContext("2d");
const elementos = [];
const opciones = {
    pincel: true,
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
            elemento = new Linea(posicionesCursor, "blue", 5)
        }
        else if (opciones.cuadro) {
            //opcion para dibujar un cudro
            elemento = new Cuadrado(posicionesCursor, "blue", "red", 5);

        }
        else if (opciones.circulo) {
            //opcion para dibujar un circulo
            elemento = new Circulo(posicionesCursor, "blue", "red", 5);
        }
        else if (opciones.triangulo) {
            //opcion para dibujar un triangulo

        }
        else if (opciones.sticker) {
            //opcion para dibujar un sticker
            elemento = new Sticker(posicionesCursor, "../recursos/pikachu.png")

        }
        else if (opciones.borrador) {
            //opcion para dibujar borrar

        }
        else {
            console.error("Error: Opcion seleccionada no valida");
        }
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        elemento.Dibujar(ctx, canvas);
        //posicionesCursor.iniciales.x = posicionesCursor.finales.x;
        //posicionesCursor.iniciales.y = posicionesCursor.finales.y;
    }


    //console.log(posicionesCursor);
}

function alSoltarClick(event) {
    console.log("se solto el boton click en el lienzo");
    let elemento;
    posicionesCursor.finales.x = event.offsetX;
    posicionesCursor.finales.y = event.offsetY;

    //filtros color rojo

    const imgData = ctx.getImageData(0, 0, canvas.clientWidth, canvas.clientHeight);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
        let rojo = data[i] // rojo
        let verde = data[i + 1] //verde
        let azul = data[i + 2] //azul
        let alfa = data[i + 3] //transparencia

        data[i] = rojo + 50;
        data[i + 1] = verde * .8;
        data[i + 2] = azul * .8;
        data[i + 3] = alfa;
    }

    ctx.putImageData(imgData, 0, 0)

    if (opciones.pincel) {
        //opcion para dibujar con el pincel
    }
    else if (opciones.linea) {
        //opcion para dibujar linea
        elementos.push(new Linea(posicionesCursor, "blue", 5));
    }
    else if (opciones.cuadro) {
        //opcion para dibujar un cudro
        elementos.push(new Cuadrado(posicionesCursor, "blue", "red", 5));

    }
    else if (opciones.circulo) {
        //opcion para dibujar un circulo
        elementos.push(new Circulo(posicionesCursor, "blue", "red", 5));
    }
    else if (opciones.triangulo) {
        //opcion para dibujar un triangulo

    }
    else if (opciones.sticker) {
        //opcion para dibujar un sticker
        elementos.push(new Sticker(posicionesCursor, "../recursos/pikachu.png"))

    }
    else if (opciones.borrador) {
        //opcion para dibujar borrar

    }
    else {

    }
    console.log(elementos);

    RenderizarElementos();
    presionado = false;
}


function RenderizarElementos() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    for (let i = 0; i < elementos.length; i++) {
        elementos[i].Dibujar(ctx);
    }
}

function Limpiar() {
    elementos = [];
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}