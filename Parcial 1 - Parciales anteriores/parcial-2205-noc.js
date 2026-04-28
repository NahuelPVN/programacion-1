/*
EJ 1 – PUNTAJE 7
Hay dos tipos de taxis: los “en línea” (que se contratan a través de una aplicación) y los “clásicos”,
que se toman directamente en la calle. Cobran diferente:
- Los en línea cobran C pesos por el primer kilómetro y luego D pesos por cada kilómetro
restante recorrido, sin importar el tiempo.
- El costo de los clásicos es la suma de M pesos por cada minuto de recorrido y K pesos
por cada kilómetro.
Al comienzo del programa se ingresarán los valores C, D, M y K. Mientras el usuario lo indique, se
ingresa los datos de una consulta. De cada una, se ingresa distancia a recorrer y el tiempo del
viaje. Debe informarse qué tipo de taxi sería más barato para ese viaje (“en línea”, “clásico”, o
“igual”).
Al final de todos los ingresos, informar el total de consultas realizadas.
Se pide implementar en JS un programa para ser probado en un snippet que realice el proceso
descripto y muestre los resultados en consola. Se asumen datos correctos.
*/

let c = parseInt(prompt('Ingresar coste primer kilómetro (en linea)'));
let d = parseInt(prompt('Ingresar coste por kilómetro (en linea)'));
let m = parseInt(prompt('Ingresar coste por minuto (clásico)'));
let k = parseInt(prompt('Ingresar coste por kilómetro (clásico)'));
let distancia = 0;
let tiempo = 0;
let costeEnLinea = 0;
let costeClasico = 0;
let consultas = 0;

while (true) {
    distancia = parseInt(prompt('Ingresar la distancia a recorrer (km), para terminar: "fin"'));
    if (isNaN(distancia)) {
        break;
    }
    tiempo = parseInt(prompt('Ingresar el tiempo del recorrido (min)'));
    costeEnLinea = c + (d*(distancia - 1));
    costeClasico = (m*tiempo) + (k*distancia);
    if (costeEnLinea > costeClasico) {
        console.log('El taxi Clásico es más barato');
    } else if (costeClasico > costeEnLinea) {
        console.log('El taxi En Linea es más barato');
    } else {
        console.log('El taxi En Linea y el Clásico cuestan lo mismo');
    }
    consultas++
}

console.log('Total consultas: ' + consultas);

/*
EJ 2 – PUNTAJE 4
Dado un string, las vocales que están en posición par suman 5 y las que están en posición impar
restan 2.
a) Implementar la función valorTotal en JS que recibe un string y retorna su valor.
Ejemplo: recibe “HOLA que tal”, retorna 4, pues hay 3 vocales en posición impar (-6) y dos en
posición par (10), total 4
b) Implementar un programa en JS para ser probado en un snippet que solicita una palabra y
muestra con alert el valor, invocando a la función valorTotal.
*/

function valorTotal(string) {
    string = string.toLowerCase();
    let vocalesPar = 0;
    let vocalesImpar = 0;
    let calculo = 0;
    for (let i = 1; i < string.length; i += 2) {
        if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u') {
            vocalesPar++
        }
    }
    for (let j = 0; j < string.length; j += 2) {
        if (string[j] == 'a' || string[j] == 'e' || string[j] == 'i' || string[j] == 'o' || string[j] == 'u') {
            vocalesImpar++
        }
    }
    return vocalesPar * 5 - vocalesImpar * 2;
}

palabra = prompt('Ingrese la palabra a comprobar');
alert(valorTotal(palabra));

/*
EJ 3 – PUNTAJE 4
Implementar en JS un programa para ser probado en un snippet que solicite un dígito (1 a 9, se
asume válido) y muestre por consola una escalera, según el patrón. Ver ejemplos:
si el dígito es 8: 
8
89

si el dígito es 1:
1
12
123
1234
12345
123456
1234567
12345678
123456789
*/

let digito = parseInt(prompt('Ingrese el digito'));
let string = ''

for (let i = 1; i <= 10 - digito; i++) { // define la cantidad de lineas que hay, 8 -> 10 - 8 = 2 (0 y 1)
    for (let j = 1; j <= i; j++) { // define cantidad de digitos de tal linea
        if (string.length < j) {
            string += (digito + (j - 1));
        }
    }
    console.log(parseInt(string));
}