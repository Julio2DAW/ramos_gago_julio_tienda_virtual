export class VistaCarrito{

    constructor(controlador, productos){

        this.controlador = controlador
        document.getElementById('verProductos').onclick = this.verProductos.bind(this)
        document.getElementById('idReg').onclick = this.validaciones.bind(this)
        //this.cargarProductosCarrito(productos)
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

        this.validarNIF()
        this.validacionEdad()

        document.getElementById('div-form').style.display = 'none'
        document.getElementById('producto-carrito').style.display = 'block'
    }
    
    validarNIF(dni){

        dni = document.getElementById('idNIF').value

        var numero, letr, letra, expresion_regular_dni
        expresion_regular_dni = /^\d{8}[a-zA-Z]$/
        
        if(expresion_regular_dni.test (dni) == true){
            numero = dni.substr(0,dni.length-1)
            letr = dni.substr(dni.length-1,1)
            numero = numero % 23
            letra='TRWAGMYFPDXBNJZSQVHLCKET'
            letra=letra.substring(numero,numero+1)

            if (letra!=letr.toUpperCase()){

                alert('Dni erroneo, la letra del NIF no se corresponde')
            }else{

                true
            }
        }else{
            
            alert('Dni erroneo, formato no válido')
        }
    }

    validacionEdad(fecha){

        fecha = document.getElementById('idFechNac').value
        let fechaActual = new Date()
        let fechaNac = new Date(fecha)
        //El método getFullYear() devuelve el año de la fecha indicada acorde a la hora local.
        let edadAnio = fechaActual.getFullYear() - fechaNac.getFullYear()
        //El método getMonth() devuelve el mes del objeto Date según la hora local, donde el número cero indica el primer mes del año.
        let edadMes = fechaActual.getMonth() - fechaNac.getMonth()
        if(edadMes<0 || (edadMes === 0 && fechaActual.getDate() < fechaNac.getDate())){

            edadAnio --
        }
       
        if(edadAnio>=18){

            console.log("Mayor de 18 años")
        }else{

            window.alert("Menor de 18 años")
        }   
    }

    recogerCarrito(producto){

        document.getElementById('producto-carrito').textContent = producto

        let cajas = document.createElement('div')
        producto-carrito.appendChild(cajas)
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
        }
    }
}