/**
 * @file vista_productos.js
 * @brief Vista de productos => (Vista)
 * @author Julio Antonio Ramos Gago <jramosgago.guadalupe@alumnado.fundacionloyola.net>
 * @version 1.0
 * @license GPL-3.0-or-later
 */

export class VistaProductos{

    /**
     * Constructor de la clase VistaProductos
     * @param {*} controlador 
     * @param {*} productos 
     */
    constructor(controlador, productos){

        this.controlador = controlador
        document.getElementById('verCarrito').onclick = this.verCarrito.bind(this);
        this.cargarProductos(productos)
    }

    /**
     * Método para ocultar o no los productos
     * @param {*} ver 
     */
    mostrar(ver){

        if(ver){

            divProducto.style.display = 'block'
        }else {

            divProducto.style.display = 'none';
        }
    }

    /**
     * Método para mostrar el carrito
     */
    verCarrito(){

        this.controlador.verCarrito()
    }

    /**
     * Método para cargar los productos
     * Le pasa el array de productos y los mostramos
     * @param {*} productos 
     */
    cargarProductos(productos){

        /**
         * 
         * <div class="cajas">
                <div class="caja">
                    <img src="img/audi.jpg" alt="Audi RS 3 Sedan" />
                    <p>Audi RS 3 Sedan</p>
                    <p>78.840,00 EUR</p>
                    <button>Añadir</button>
                </div>
            </div>
         */

        let cajas = document.createElement('div')
        divProducto.appendChild(cajas)
        cajas.classList.add('cajas')

        //Recorro el array de productos del JSON
        productos.forEach(producto => {

            let caja = document.createElement('div')
            cajas.appendChild(caja)
            caja.classList.add('caja')

            /**
             * Solo muestra los productos que se encuentran en oferta.
             */
            if (producto.oferta) {
                caja.onmouseover = this.mostrarOferta.bind(this, producto, caja) //asignar una función
                caja.onmouseout = this.ocultarOferta.bind(this, caja)
                /**
                caja.onmouseout = function () {
    
                    console.log('Adios JavaScript');
                }
                */
            }

            /**
            caja.onmouseover = function(){
                console.log('Hola JavaScript');
            }
            */
            let img = document.createElement('img')
            caja.appendChild(img)
            img.src=producto.imagen
            //img.textContent = producto.imagen
            
            let p = document.createElement('p')
            caja.appendChild(p)
            p.textContent = producto.nombre

            let p2 = document.createElement('p')
            caja.appendChild(p2)
            p2.textContent = producto.precio

            let button = document.createElement('button')
            caja.appendChild(button)
            button.textContent = 'Añadir'
            
            
            button.onclick = this.anadirCarrito.bind(this, producto)
        });
    }

    /**
     * Método para mostrar la oferta de los productos cuando pasamos el ratón por encima
     * @param {*} producto 
     * @param {*} caja 
     */
    mostrarOferta(producto, caja){

        let divOferta = document.createElement('div')
        caja.appendChild(divOferta)
        divOferta.classList.add('oferta-class')

        let pOferta = document.createElement('p')
        divOferta.appendChild(pOferta)
        pOferta.textContent = 'Oferta: ' + producto.oferta

    }

    /**
     * Método para ocultar la oferta de los productos cuando quitamos el ratón de encima
     * @param {*} caja 
     */
    ocultarOferta(caja){

        //Oculta el div de oferta, con remove lo eliminio.
        caja.getElementsByClassName('oferta-class')[0].remove()
    }

    /**
     * Método para añadir un producto al carrito
     * @param {*} producto 
     */
    anadirCarrito(producto){

        //console.log('Pulsado');
        //console.log(producto);
        this.controlador.anadirCarrito(producto)
    }

    /**
     * Método para mostrar en el carrito el total de los productos seleccionados
     * @param {*} numProducto 
     */
    setNumProductosCarrito(numProducto){

        document.getElementById('menucarrito').textContent = numProducto
        //console.log(numProducto)
    }
}