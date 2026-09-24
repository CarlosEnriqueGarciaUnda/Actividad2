// 1ra Funcion Vamos a validar el correo

/**
 * @param {String} correo
 * @returns {boolean}
 */

function validarCorreo(correo){
    const regex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

// 2da Funcion Validar que la cadena solo contenga letras
/**
 * @param {String} texto
 * @returns {boolean}
 */

function soloLetras(texto){
    const regex= /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto);
}

// 3ra Funcion Validar la longitud de un numero que no exceda un limite
/**
 * @param {number | string} numero
 * @param {number} maxLongitud
 * @returns {boolean}
 */

function validarLongitud(numero, maxLongitud){
    return numero.toString().length<=maxLongitud;
}


//5ta Funcion Calcular la edad apartir de una fecha de nacimiento
/**
 * @param {String} fechaDeNacimiento
 * @returns {number}
 */

function calcularEdad(fechaDeNacimiento){
    const hoy= new Date();
    const nacimiento= new Date(fechaDeNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear;
    const mes= hoy.getMonth()-nacimiento.getMonth;

    if(mes < 0 || (mes===0 && hoy.getDate() < nacimiento.getDate())){
        edad--;
    }

    return Math.max(0,edad);
}

// 6ta Funcion Validar que la contraseña sea segura
/**
 * @param {String} Contrasena
 * @returns {boolean}
 */

function validarContraseña(Contrasena){
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(Contrasena);
}

//7ma Funcion Formatear un numero como moneda
/**
 * @param {number} cantidad
 * @returns {String}
 */

function formatearMoneda(cantidad){
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN'
    }).format(cantidad);
}

// 8va Funcion Limpiar espacios dobles o saltos de linea extra en un texto
/**
 * @param {String} texto
 * @returns {string}
 */

function limparEspacios(texto){
    return texto.trim().replace(/\s+/g, ' ');
}
