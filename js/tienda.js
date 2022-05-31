import {VistaProductos} from './vista_productos.js'
import { VistaCarrito } from './vista_carrito.js'
import {Modelo} from './modelo.js'

class Tienda{

    constructor(){

        window.onload = this.iniciar.bind(this)
    }

    async iniciar(){

        this.modelo = new Modelo()
        //Espera el resultado de la promesa
        await this.modelo.cargar()
        this.vistaProductos = new VistaProductos(this, this.modelo.getProductos())
        this.vistaCarrito = new VistaCarrito(this)

        this.vistaProductos.mostrar(true)
    }

    async crearVista(){

        let datos = await this.modelo.cargar()
        console.log(datos)
        return datos
    }

    verCarrito(){

        this.vistaProductos.mostrar(false)
        this.vistaCarrito.mostrar(true)
    }

    verProductos(){

        this.vistaCarrito.mostrar(false)
        this.vistaProductos.mostrar(true)
    }

    anadirCarrito(producto){

        this.modelo.anadirCarrito(producto)
        this.vistaProductos.setNumProductosCarrito(this.modelo.carrito.length)
        this.vistaCarrito.recogerCarrito(producto)
    }
}

new Tienda()