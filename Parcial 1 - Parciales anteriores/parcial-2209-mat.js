/*
EJ 1 – PUNTAJE 7
Un teatro ofrece un show musical solidario. Las entradas pueden ser "P" platea o "T" tribuna.
El programa solicita primero la cantidad disponible de plateas y de tribunas. Luego se ingresa cada
cantidad que se desea comprar (0 indica fin de ingreso) y el tipo ("P" o "T"). Si fue el fin de ingreso, no
se solicita el tipo. Por cada compra, si hay disponibilidad para vender esa cantidad, se realiza la venta
(informar que se realizó). En otro caso, se informa que no se puede hacer la venta.
Al final, indicar cuántos lugares quedan disponibles en platea, cuántos en tribuna y cuál fue la máxima
cantidad de entradas de platea que efectivamente se vendieron en una venta.
Hacer un programa en JS para ser probado en un snippet que cumpla lo solicitado. Las respuestas
mostrarlas con alert. Los datos se asumen válidos.
*/

let plateaDisponibles = parseInt(prompt('Ingrese la cantidad de entradas disponibles en platea'));
let tribunaDisponibles = parseInt(prompt('Ingrese la cantidad de entradas disponibles en tribuna'));
let cantidadComprar = 0;
let tipoComprar = 0;
let maximoPlatea = 0;

while (true) {
    cantidadComprar = parseInt(prompt('Ingrese la cantidad de entradas a comprar'));
    if (cantidadComprar == 0) break;
    tipoComprar = prompt('Ingrese el tipo de entradas a comprar (P / T)');
    if (tipoComprar == 'P' && cantidadComprar > plateaDisponibles || 
        tipoComprar == 'T' && cantidadComprar > tribunaDisponibles) {
        alert('No quedan suficientes entradas de ese tipo');
    } else {
        if (tipoComprar == 'P') {
            plateaDisponibles -= cantidadComprar;
            if (cantidadComprar > maximoPlatea) maximoPlatea = cantidadComprar;
        } else if (tipoComprar == 'T') {
            tribunaDisponibles -= cantidadComprar;
        }
        alert('Venta realizada');
    }
}

alert('Disponibles en platea: ' + plateaDisponibles);
alert('Disponibles en tribuna: ' + tribunaDisponibles);
alert('Máximo entradas de platea en una venta: ' + maximoPlatea);   
/*
EJ 2 – PUNTAJE 4
Se desea implementar una función que recibe un string que contiene dígitos y los signos de "+" y "-" y
retorna el resultado de esa expresión. Asumir el string es válido y comienza con dígito.
Ejemplo: recibe "3+4-6+5-1", retorna 5
a) Escribir en JS la función calcular que recibe el string y devuelve el número correspondiente.
b) Implementar un programa en JS para ser probado en un snippet que lea 5 strings y muestre por cada
uno en consola el resultado asumiendo disponible y usando la función anterior.
*/

function calcular(string) {
    let stringSumas = string[0];
    let stringRestas = '';
    let sumasTotal = 0;
    let restasTotal = 0;
    for (let i = 1; i < string.length; i += 2) {
        if (string[i] == '+') {
            stringSumas += (string[i + 1]);
        } else if (string[i] == '-') {
            stringRestas += (string[i + 1]);
        }
    }
    for (let j = 0; j < stringSumas.length; j++) {
        sumasTotal += parseInt(stringSumas[j]);
    }
    for (let k = 0; k < stringRestas.length; k++) {
        restasTotal += parseInt(stringRestas[k]);
    }
    return sumasTotal - restasTotal;
}

/*
EJ 3 – PUNTAJE 4
Una persona hace un depósito y va ahorrando todos los meses una misma cantidad. Desea saber
cuánto dinero tendrá en cada mes de los próximos años. Se ingresa el monto inicial, el ahorro de cada
mes y la cantidad de años a mostrar:
Ejemplo: se ingresa como depósito inicial 1000, ahorro a depositar: 20, durante 3 años y debe mostrar:

Año 1: 1000 1020 1040 1060 1080 1100 1120 1240 1160 1180 1200 1220
Año 2: 1240 1260 1280 1300 1320 1340 1360 1380 1400 1420 1440 1460
Año 3: 1480 1500 1520 1540 1560 1580 1600 1620 1640 1660 1680 1700

Implementar un programa en JS para ser probado en un snippet que solicite los 3 datos y muestre por
consola.
*/