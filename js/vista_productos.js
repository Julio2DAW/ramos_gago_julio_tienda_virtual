export class VistaProductos{

    constructor(controlador, productos){

        this.controlador = controlador
        document.getElementById('verCarrito').onclick = this.verCarrito.bind(this);
        this.cargarProductos(productos)
    }

    mostrar(ver){

        if(ver){

            divProducto.style.display = 'block'
        }else {

            divProducto.style.display = 'none';
        }
    }

    verCarrito(){

        this.controlador.verCarrito()
    }

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
        divProducto. appendChild(cajas)
        cajas.classList.add('cajas')

            for (let producto of productos) {

                let caja = document.createElement('div')
                cajas.appendChild(caja)
                caja.classList.add('caja')

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
            }
    }

    anadirCarrito(producto){

        this.controlador.anadirCarrito(producto)
    }
}