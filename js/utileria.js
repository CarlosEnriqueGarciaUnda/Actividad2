
/**
 * 1. Valida el formato de un correo electrónico mediante expresión regular.
 * @param {string} correo 
 * @returns {boolean} 
 */
function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

/**
 * 2. Comprueba que una cadena contenga únicamente letras y espacios (incluye acentos y Ñ).
 * @param {string} texto 
 * @returns {boolean} 
 */
function soloLetras(texto) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto);
}

/**
 * 3. Valida que un número no sobrepase una cantidad máxima de dígitos.
 * @param {number|string} numero 
 * @param {number} maxLongitud 
 * @returns {boolean} 
 */
function validarLongitud(numero, maxLongitud) {
    return numero.toString().length <= maxLongitud;
}

/**
 * 4. Calcula la edad cumplida en años a partir de una fecha dada.
 * @param {string} fechaNacimiento 
 * @returns {number} 
 */
function calcularEdad(fechaNacimiento) {
    if (!fechaNacimiento) return 0;
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

    return Math.max(0, edad);
}

/**
 * 5. Comprueba si una persona es mayor de edad (18 años o más).
 * @param {string} fechaNacimiento 
 * @returns {boolean} 
 */
function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

/**
 * 6. Valida criterios de seguridad de contraseña (mayúscula, minúscula, número, especial, mín 8 car.).
 * @param {string} password 
 * @returns {boolean} 
 */
function validarPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!\%*?&]{8,}$/;
    return regex.test(password);
}

/**Funciones propias */

/**
 * 7. Elimina espacios dobles intermedios y espacios en blanco en los extremos.
 * @param {string} texto 
 * @returns {string} 
 */
function limpiarEspacios(texto) {
    return texto.trim().replace(/\s+/g, ' ');
}

/**
 * 8. Genera un código de usuario único basado en su nombre, año de nacimiento y caracteres aleatorios.
 * @param {string} nombre 
 * @param {string} fechaNacimiento 
 * @returns {string} 
 */
function generarCodigoUsuario(nombre, fechaNacimiento) {
    if (!nombre || !fechaNacimiento) return "";
    const prefijo = limpiarEspacios(nombre).substring(0, 3).toUpperCase();
    const año = fechaNacimiento.split('-')[0];
    const aleatorio = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `${prefijo}-${año}-${aleatorio}`;
}