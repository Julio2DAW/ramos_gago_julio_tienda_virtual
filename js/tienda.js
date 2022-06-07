/**
 * @file tienda.js
 * @brief Tienda de productos => (Controlador)
 * @author Julio Antonio Ramos Gago <jramosgago.guadalupe@alumnado.fundacionloyola.net>
 * @version 1.0
 * @license GPL-3.0-or-later
 */

import {VistaProductos} from './vista_productos.js'
import { VistaCarrito } from './vista_carrito.js'
import {Modelo} from './modelo.js'

class Tienda{

    /**
     * Constructor de la clase Tienda(Controlador)
     */
    constructor(){

        window.onload = this.iniciar.bind(this)
    }

    /**
     * Método para iniciar la aplicación
     */
    async iniciar(){

        this.modelo = new Modelo()
        //Espera el resultado de la promesa
        await this.modelo.cargar()
        this.vistaProductos = new VistaProductos(this, this.modelo.getProductos())
        this.vistaCarrito = new VistaCarrito(this)

        this.vistaProductos.mostrar(true)
    }

    /**
     * Método para cargar los productos
     * @returns datos
     */
    async crearVista(){

        let datos = await this.modelo.cargar()
        console.log(datos)
        return datos
    }

    /**
     * Método para cargar la vista de carrito
     */
    verCarrito(){

        this.vistaProductos.mostrar(false)
        this.vistaCarrito.mostrar(true)
    }

    /**
     * Método para cargar los productos
     */
    verProductos(){

        this.vistaCarrito.mostrar(false)
        this.vistaProductos.mostrar(true)
    }

    /**
     * Método para añadir un producto al carrito
     * @param {*} producto 
     */
    anadirCarrito(producto){

        this.modelo.anadirCarrito(producto)
        this.vistaProductos.setNumProductosCarrito(this.modelo.carrito.length)
        this.vistaCarrito.recogerCarrito(producto)
    }
}

new Tienda()