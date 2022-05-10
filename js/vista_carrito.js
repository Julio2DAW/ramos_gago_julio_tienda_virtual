export class VistaCarrito{

    constructor(controlador){

        this.controlador = controlador
        document.getElementById('verProductos').onclick = this.verProductos.bind(this)
    }
    
    mostrar(ver){

        if(ver){

            divCarrito.style.display = 'block'
        }else{

            divCarrito.style.display = 'none'
        }
    }

    verProductos(){

        this.controlador.verProductos()
    }

    productosCarrito(productos){

        let cajas = document.createElement('div')
        divCarrito.appendChild(cajas)
        cajas.classList.add('cajas')

        for (let producto of productos) {

            let caja = document.createElement('div')
            cajas.appendChild(caja)
            caja.classList.add('caja')

            let img = document.createElement('img')
            caja.appendChild(img)
            img.src=producto.imagen
            
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
}