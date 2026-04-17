class Figura {
    constructor(posicionesCursor = {}, color_linea = "black", color_relleno = "black", grozor_linea = 5
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
    Dibujar(ctx) {

        const x = Math.min(posicionesCursor.iniciales.x, posicionesCursor.finales.x)
        const y = Math.min(posicionesCursor.iniciales.y, posicionesCursor.finales.y);

        const alto = Math.abs(posicionesCursor.finales.y - posicionesCursor.iniciales.y)
        const ancho = Math.abs(posicionesCursor.finales.x - posicionesCursor.iniciales.x);


        ctx.beginPath();
        ctx.fillStyle = this.color_relleno
        ctx.strokeStyle = this.color_linea
        ctx.lineWidth = this.grozor_linea

        ctx.fillRect(x, y, ancho, alto);
        ctx.strokeRect(x, y, ancho, alto);
    }
}
