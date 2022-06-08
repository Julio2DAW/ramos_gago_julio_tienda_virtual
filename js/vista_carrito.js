/**
 * @file vista_carrito.js
 * @brief Vista de carrito de compras => (Vista)
 * @author Julio Antonio Ramos Gago <jramosgago.guadalupe@alumnado.fundacionloyola.net>
 * @version 1.0
 * @license GPL-3.0-or-later
 */

export class VistaCarrito{

    /**
     * Constructor de la clase VistaCarrito
     * @param {*} controlador 
     * @param {*} productos 
     */
    constructor(controlador, productos){

        this.controlador = controlador
        document.getElementById('verProductos').onclick = this.verProductos.bind(this)
        document.getElementById('idReg').onclick = this.validaciones.bind(this)
        //this.cargarProductosCarrito(productos)
    }
    
    /**
     * Método para ocultar o no el carrito de productos
     * @param {*} ver 
     */
    mostrar(ver){

        if(ver){

            divCarrito.style.display = 'block'
        }else{

            divCarrito.style.display = 'none'
        }
    }

    /**
     * Método para cargar los productos del carrito
     */
    verProductos(){

        this.controlador.verProductos()
    }

    /**
     * Método para comprobar que todos los campos del formulario estén correctos
     * y oculte el formulario de registro para mostrar los productos del carrito
     */
    validaciones(){

        /* 
        this.validarNick() //Validación del nick
        this.validarEmail() //Validación del email
        this.validarPassword() //Validación de la contraseña
        this.validarNIF() //Validación del dni
        this.validacionEdad() //Validación de la edad 
        */

        if(this.validarNick() && this.validarEmail() && this.validarPassword() && this.validarNIF() && this.validacionEdad()){

            true
            document.getElementById('div-form').style.display = 'none'
            document.getElementById('producto_carrito').style.display = 'block'  
        }else{

            document.getElementById('div-form').style.display = 'block'
        }
    }
    
    /**
     * Método para validar el dni
     * @param {*} dni
     * @returns true false
     */
    validarNIF(dni){

        dni = document.getElementById('idNIF').value

        var numero, letr, letra, expresion_regular_dni
        expresion_regular_dni = /^\d{8}[a-zA-Z]$/ //Expresión regular para validar el dni
        
        //Comprobamos que el dni sea correcto
        if(expresion_regular_dni.test (dni) == true){
            numero = dni.substr(0,dni.length-1)
            letr = dni.substr(dni.length-1,1)
            numero = numero % 23
            letra='TRWAGMYFPDXBNJZSQVHLCKET'
            letra=letra.substring(numero,numero+1)

            if (letra!=letr.toUpperCase()){

                alert('Dni erroneo, la letra del NIF no se corresponde')
                return false
            }else{

                return true
            }
        }else{
            
            alert('Dni erroneo, formato no válido')
            return false
        }
    }

    /**
     * Método para validar la edad
     * @param {*} fecha 
     * @returns true false
     */
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

            //console.log("Mayor de 18 años")
            return true
        }else{

            window.alert("Menor de 18 años")
            return false
        }   
    }

    /**
     * Método para validar el nick
     * @param {*} nombre
     * @returns true false
     */
    validarNick(nombre){

        nombre = document.getElementById('idNick').value

        if(nombre.length == 0){

            alert('Nick no indicado')
            return false
        }else{

            return true
        }
    }

    /**
     * Método para validar el email
     * @param {*} correo
     * @returns true false
     */
    validarEmail(correo){

        correo = document.getElementById('idEmail').value

        //Expresión regular para validar el email
        var expresion_regular_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

        if(expresion_regular_email.test(correo) == true){

            return true
        }else{

            alert('Email erroneo')
            return false
        }
    }

    /**
     * Método para validar la password
     * @param {*} contrasena
     * @returns true false
     */
    validarPassword(contrasena){

        contrasena = document.getElementById('idPassword').value

        if(contrasena.length >= 6){

            return true
        }else{
                
            alert('La contraseña debe tener al menos 6 caracteres')
            return false
        }
    }

    /**
     * Método para cargar los productos del carrito
     * Le pasamos el array de productos del carrito y lo mostramos en el carrito
     * @param {*} producto 
     */
    recogerCarrito(producto){

        /*

            <div class="cajas2">
            <div class="caja2">
                <img src="img/audi.jpg" alt="Audi RS 3 Sedan" />
                <p>Audi RS 3 Sedan</p>
                <p>78.840,00 EUR</p>
                <p>Unidades: <span>1</span></p>
            </div>
            </div>
        */

        let cajas2 = document.createElement('div')
        producto_carrito.appendChild(cajas2)
        cajas2.classList.add('cajas2')

            let caja2 = document.createElement('div')
            cajas2.appendChild(caja2)
            caja2.classList.add('caja2')

                let img = document.createElement('img')
                caja2.appendChild(img)
                img.src=producto.imagen
                
                let p = document.createElement('p')
                caja2.appendChild(p)
                p.textContent = producto.nombre

                let p2 = document.createElement('p')
                caja2.appendChild(p2)
                p2.textContent = producto.precio
    }
}