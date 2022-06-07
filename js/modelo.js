/**
 * @file modelo.js
 * @brief Modelo => (Modelo)
 * @author Julio Antonio Ramos Gago <jramosgago.guadalupe@alumnado.fundacionloyola.net>
 * @version 1.0
 * @license GPL-3.0-or-later
 */

import {Producto} from "./productos.js"

export class Modelo{

    /**
     * Constructor de la clase Modelo
     */
    constructor(){

        this.carrito = []
        this.productos = []
        //this.cargar()
        console.log(this.cargar());
    }

    /**
     * Método para cargar los productos cogidos del JSON
     */
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

    /**
     * Método para obtener los productos
     * @returns this.productos
     */
    getProductos(){

        return this.productos
    }

    /**
     * Método para coger los productos
     * @param {*} producto 
     */
    setProductos(producto){

        this.productos = producto
    }

    /**
     * Método para añadir un producto al carrito
     * @param {*} producto 
     */
    anadirCarrito(producto){

        this.carrito.push(producto)
    }
}