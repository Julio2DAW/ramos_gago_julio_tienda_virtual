import {Producto} from "./productos.js"

export class Modelo{

    constructor(){

        this.carrito = []
        this.productos = []
        //this.cargar()
        console.log(this.cargar());
    }

    async cargar(){

        await fetch('./json/producto.json')
            .then(respuesta => respuesta.json())
            .then(producto => {console.log(producto)
                this.setProductos(producto)
            })
            .catch(error => console.log(error))
            /* console.log(respuesta);
            return respuesta */
        
        /* this.productos[0] = new Producto('./img/audi.jpg', 'Audi RS 3 Ranchera', 78.840, true)
        this.productos[1] = new Producto('./img/mercedes.jpg', 'Mercedes GLE Coupé', 91.644, false)
        this.productos[2] = new Producto('./img/bmw.jpg', 'BMW Z4', 52.600, true)
        this.productos[3] = new Producto('./img/jaguar.jpg', 'Jaguar F-TYPE', 76.450, false)
        this.productos[4] = new Producto('./img/maserati.jpg', 'Maserati Levante', 98.050, false) */
        
    }

    getProductos(){

        return this.productos
    }

    setProductos(producto){

        this.productos = producto
    }

    anadirCarrito(producto){

        this.carrito.push(producto)
    }
}