import {VistaProductos} from './vista_productos.js'
import { VistaCarrito } from './vista_carrito.js'
import {Modelo} from './modelo.js'

class Tienda{

    constructor(){

        window.onload = this.iniciar.bind(this)
    }

    iniciar(){

        this.modelo = new Modelo()
        this.vistaProductos = new VistaProductos(this, this.modelo.getProductos())
        this.vistaCarrito = new VistaCarrito(this)

        this.vistaProductos.mostrar(true)
    }

    crearVista(){

        //Crear la vista aquí   
        //Iniciar recibe del json los datos del modelo
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