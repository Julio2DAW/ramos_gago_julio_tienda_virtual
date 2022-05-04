import {Producto} from "./productos.js"

export class Modelo{

    constructor(){

        this.productos = []
        this.carrito = []
        this.cargar()
        
    }

    cargar(){

        this.productos[0] = new Producto('./img/audi.jpg', 'Audi RS 3 Ranchera', 78.840)
        this.productos[1] = new Producto('./img/mercedes.jpg', 'Mercedes GLE Coupé', 91.644)
        this.productos[2] = new Producto('./img/bmw.jpg', 'BMW Z4', 52.600, true)
        this.productos[3] = new Producto('./img/jaguar.jpg', 'Jaguar F-TYPE', 76.450)
        this.productos[4] = new Producto('./img/maserati.jpg', 'Maserati Levante', 98.050, false)
        
    }

    getProductos(){

        return this.productos
    }

    anadirCarrito(producto){

        this.carrito.push(producto)
    }
}