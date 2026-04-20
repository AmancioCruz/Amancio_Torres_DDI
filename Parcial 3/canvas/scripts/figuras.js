class Figura {
    constructor(posicionesCursor, color_linea, color_relleno, grozor_linea
    ) {
        this.posicionesCursor = posicionesCursor || {
            iniciales: { x: 0, y: 0 },
            finales: { x: 0, y: 0 }
        }
        this.color_linea = color_linea
        this.color_relleno = color_relleno
        this.grozor_linea = grozor_linea
    }
}

export class Cuadrado extends Figura {
    constructor(posicionesCursor = {},
        color_linea = "black",
        color_relleno = "black",
        grozor_linea = 5) {

        super(posicionesCursor, color_linea, color_relleno, grozor_linea);

        this.x = Math.min(this.posicionesCursor.iniciales.x, this.posicionesCursor.finales.x)
        this.y = Math.min(this.posicionesCursor.iniciales.y, this.posicionesCursor.finales.y);

        this.alto = Math.abs(this.posicionesCursor.finales.y - this.posicionesCursor.iniciales.y)
        this.ancho = Math.abs(this.posicionesCursor.finales.x - this.posicionesCursor.iniciales.x);

    }
    Dibujar(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color_relleno
        ctx.strokeStyle = this.color_linea
        ctx.lineWidth = this.grozor_linea

        ctx.fillRect(this.x, this.y, this.ancho, this.alto);
        ctx.strokeRect(this.x, this.y, this.ancho, this.alto);
    }
}

export class Circulo extends Figura {
    constructor() {
        super();
    }
    Dibujar() {

    }
}

export class Linea {
    constructor(posicionesCursor = {}, color_linea = "black", grozor_linea = 5) {
        this.posicionesCursor = posicionesCursor || {
            iniciales: { x: 0, y: 0 },
            finales: { x: 0, y: 0 }
        }
        this.color_linea = color_linea
        this.grozor_linea = grozor_linea
    }
    Dibujar(ctx) {
        ctx.beginPath()
        ctx.lineCap = "round"
        ctx.lineJoin = "round"
        ctx.strokeStyle = this.color_linea
        ctx.lineWidth = this.grozor_linea
        ctx.moveTo(this.posicionesCursor.iniciales.x, this.posicionesCursor.iniciales.y)
        ctx.lineTo(this.posicionesCursor.finales.x, this.posicionesCursor.finales.y)
        ctx.stroke()
    }
}

export class Sticker {
    constructor(posicionesCursor, urlImagen) {
        this.posicionesCursor = posicionesCursor || {
            iniciales: { x: 0, y: 0 },
            finales: { x: 0, y: 0 }
        },
        this.imagen = new Image();
        this.imagen.src = urlImagen;
    }
    Dibujar(ctx) {
        ctx.beginPath()
        ctx.drawImage(this.imagen, 0,0, this.imagen.width, this.imagen.height,
            this.posicionesCursor.iniciales.x, this.posicionesCursor.iniciales.y, this.imagen.width/2, this.imagen.height/2 
        )
    }
}
