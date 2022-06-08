/**
 * @file productos.js
 * @brief Productos
 * @author Julio Antonio Ramos Gago <jramosgago.guadalupe@alumnado.fundacionloyola.net>
 * @version 1.0
 * @license GPL-3.0-or-later
 */

export class Producto{

    /**
     * Constructor de la clase Producto
     * @param {*} imagen 
     * @param {*} nombre 
     * @param {*} precio 
     * @param {*} oferta 
     */
    constructor(imagen, nombre, precio, oferta){

        this.imagen = imagen
        this.nombre = nombre
        this.precio = precio
        this.oferta = oferta
    }
}