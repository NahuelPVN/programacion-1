// Práctico: 6 Funciones y Strings (parte 1)
// 1) Implementar una función que convierta la edad de un perro en “años humanos”, multiplicándose por 7
let añosPerro = Number(prompt("Ingrese edad en años perro"));
let conversorAñosHumanos = function(edad) {
    return edad * 7;
}
alert(conversorAñosHumanos(añosPerro));

// 2) Implementar la función Buzz, que recibe un número natural n y retorna la palabra "buzz", si el número es múltiplo de 3 o de 5; en otro caso retorna el mismo número.
let comprobarBuzz = function(n) {
    if ( (n % 5 == 0) || (n % 3 == 0)) {
        return("buzz");
    } else {
        return(n);
    }
}
alert(comprobarBuzz(Number(prompt("Ingrese un número a comprobar"))));

//  3) Implementar la función convertirCelsius(grados), que recibe una cantidad de grados en Fahrenheit y los convierte a Celsius. (fórmula: (grados-32)*5/9)
let gradosFahrenheit = Number(prompt("Ingrese grados Fahrenheit"));
let convertirCelsius = function(x) {
    return( (x - 32) * (5/9) )
}
alert(convertirCelsius(gradosFahrenheit));

// 4) Hacer una función que retorne la circunferencia a partir del radio.
function calcularCircunferencia(radio) {
    return ( (2 * radio) * Math.PI );
}

// 5) Implementar function invertir(palabra) Recibe una palabra y la retorna invertida. Ej: recibe: ‘hola mundo’, retorna : ‘odnum aloh’
let invertir = function(palabra) {
    let arrayPalabraInvertida = [];
    let arrayPalabra = palabra.split("");
    for (let i = 0; i < arrayPalabra.length; i++) {
        arrayPalabraInvertida.unshift(arrayPalabra[i]);
    }
    return arrayPalabraInvertida.join("");
}
alert(invertir(prompt("Ingrese palabra")));

// 6) Implementar function vecesLetra(frase, letra) Recibe una frase y una letra, retorna cuántas cuántas veces aparece esa letra en la frase recibida. Ejemplo: recibe: “hoy es viernes” y “a”, retorna 0.


// 7) Implementar function cantidadPalabras(frase) Recibe una frase, retorna la cantidad de palabras que contiene. Una palabra se considera separada de otra por un espacio en blanco exclusivamente.
// 8) Implementar function empiezaYTermina(texto) Recibe un texto y retorna si empieza y termina con la misma letra

