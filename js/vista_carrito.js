export class VistaCarrito{

    constructor(controlador){

        this.controlador = controlador
        document.getElementById('verProductos').onclick = this.verProductos.bind(this)
        document.getElementById('idReg').onclick = this.validaciones.bind(this)
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

    validaciones(){
        console.log('hola');
        /*
        let exp1 = document.getElementById("idNIF")
        let letra = exp1.value[8]
        let numeros= exp1.value.substring(0, exp1.value.length - 1);
        let comprobacion=parseInt(numeros)%23
        */
    }
}