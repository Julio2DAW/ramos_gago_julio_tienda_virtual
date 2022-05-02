import {Producto} from "./productos.js"

export class Modelo{

    constructor(){

        this.productos = []
        this.carrito = []
        this.cargar()
        
    }

    cargar(){

        this.productos[0] = new Producto('../img/audi.jpg', 'Audi RS 3 Sedan', 78.840)
        this.productos[1] = new Producto('img2.jpg', 'Mercedes GLE Coupé', 91.644)
        this.productos[2] = new Producto('img3.jpg', 'BMW Z4', 52.600)
        this.productos[3] = new Producto('img4.jpg', 'Jaguar F-TYPE', 76.450)
        this.productos[4] = new Producto('img4.jpg', 'Maserati Levante', 98.050)
    }

    getProductos(){

        return this.productos
    }
}