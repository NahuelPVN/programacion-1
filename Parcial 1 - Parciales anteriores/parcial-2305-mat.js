/*
EJ 1 – PUNTAJE 7
En una agencia de viajes desean procesar los pedidos de asientos y de comida para obtener
estadísticas.
Hacer un programa en JS que ingrese primero la cantidad de datos de pasajeros a ingresar. Por cada
pasajero se solicita la ubicación deseada ("V" es ventanilla, "P" pasillo, "C" central) y el tipo de comida
("G" vegetariano, "S" standard). La unica verificación a realizar es que el tipo de comida sea "G" o "S",
si es otro, se asume que es "G". La ubicación se asume correcta.
Al final indicar:
- si hay mayor cantidad de "V" (ventanillas) que de las otras en general ("P" pasillo y "C" central) o no
- porcentaje de pedidos de comida vegetariana en el total
Las respuestas mostrarlas por consola.
*/

let cantidadPasajeros = parseInt(prompt('Ingrese cantidad de pasajeros'));
let cantidadVen = 0;
let cantidadPas = 0;
let cantidadCen = 0;
let cantidadVeg = 0;
let cantidadSta = 0;
let seleccionComida = '';
let seleccionUbicacion = '';

for (let i = 0; i < cantidadPasajeros; i++) {
    seleccionUbicacion = prompt('Ingrese ubicación');
    if (seleccionUbicacion == 'V') {
        cantidadVen++;
    } else if (seleccionUbicacion == 'P') {
        cantidadPas++;
    } else {
        cantidadCen++;
    }
    seleccionComida = prompt('Ingrese tipo de comida');
    if (seleccionComida == 'S') {
        cantidadSta++;
    } else {
        cantidadVeg++;
    }
}
if (cantidadVen > (cantidadPas + cantidadCen)) {
    console.log('Hay más pasajeros en Ventana que en Pasillo y en Central');
} else {
    console.log('No hay más pasajeros en Ventana que en el resto');
}
console.log('El ' + ((cantidadVeg * 100) / cantidadPasajeros) + '% de las comidas fueron veganas');

/*
EJ 2 – PUNTAJE 4
En un sitio web indican que la contraseña debe tener exactamente 6 dígitos (del 1 al 9) y que debe
cumplirse que de izquierda a derecha, los dígitos nunca disminuyen (solo aumentan o quedan
igual, ej. "111235", "245789")
Hacer un programa en JS que lea una contraseña y muestre con alert la cantidad de contraseñas
válidas mayores a ella podrían formarse.
*/

let contraseña = parseInt(prompt('Ingrese contraseña inicial'));
let contraseñasValidas = 0;

for (let i = contraseña + 1; i <= 999999; i++) {
    let contraseñaValida = true;
    let actual = i.toString();
    if (actual.length != 6) {
        contraseñaValida = false;
    }
    for (let j = 0; j < 5; j++) {
        if ( !(actual[j + 1] >= actual[j]) ) {
            contraseñaValida = false;
            break;
        }
    }
    if (contraseñaValida) {
        contraseñasValidas++;
    }
}
alert(contraseñasValidas);

/*
EJ 3 – PUNTAJE 4
Implementar en JS la función "verificar" que recibe 4 parámetros:
minimo (entero), maximo (entero), letra (un caracter) y frase (un string)
Debe retornar true si la frase contiene la letra indicada una cantidad de veces entre el mínimo y el
máximo indicados (ambos inclusive), o falso si no es así. Los datos se asumen válidos.
Ejemplos:
recibe: 1, 3, "a", "esta es la casa", retorna false
recibe: 2, 5, "b", "buenos dias en Buenos Aires", retorna true.
Firma: function verificar (minimo, maximo, letra, frase)
*/

function verificar(minimo, maximo, letra, frase) {
    let cantidadRepeticiones = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == letra) {
            cantidadRepeticiones++;
        }
    }
    if (cantidadRepeticiones >= minimo && cantidadRepeticiones <= maximo) {
        return true;
    } else {
        return false;
    }
}