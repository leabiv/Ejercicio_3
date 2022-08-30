const myPromesas = new Promise((resuelto, rechazado) => {
    let coneccion = true;
    if (coneccion) {
        resuelto('Conexion Exitosa')
    } else {
        rechazado('Conexion Fallida')
    }
});
/*
myPromesas.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
});
*/

// hacer una función que tome un solo parámetro
// y devuelve una nueva promesa. usando setTimeout,
// después de 500 milisegundos, la promesa será
// resolver o rechazar. si la entrada es una cadena,
// la promesa se resuelve con esa misma cadena
// en mayúsculas. si la entrada es cualquier cosa menos una cadena
// rechaza con esa misma entrada
//
// llamar a la función delayUpperCase


//const cadena = document.getElementById('cadena').value;

/**
 * @param {string} resolve - cumplida 
 * @param {string} reject - rechazada
 * @return {string} 
 */
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (delayedUpperCase(parametro)) {
            resolve(parametro.toUpperCase())
        } else {
            reject(parametro);
        }
    }, 500);
});

/**
 * function que recibe la cadena
 * @param {string} parametro - cadena
 * @return {boolean} retorna true o false
 */
let parametro = 'cadena';
function delayedUpperCase(parametro) {
        return typeof parametro === 'string' || parametro instanceof String;
}

myPromise.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
});