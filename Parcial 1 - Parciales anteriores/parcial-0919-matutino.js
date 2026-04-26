/*
1) (Nivel básico, 7 puntos)
Realizar un programa en JS que permita obtener estadísticas de un torneo de tenis en el que
participaron más de 50 jugadores. Se juega a dos rondas y el puntaje total de cada jugador es
la suma de sus dos rondas. De cada participante, se ingresará el nombre, el puntaje que obtuvo
en la primera ronda y el puntaje que obtuvo en la segunda. No hay datos incorrectos. El fin de
ingreso está dado por el nombre: “FIN” y ambos puntajes en 0. Al final, indicar cuántos
jugadores mejoraron su desempeño de la primera a la segunda ronda (o sea, tuvieron mejor
puntaje en la segunda ronda), cuál fue el puntaje total máximo del torneo, nombre de un
jugador que obtuvo ese puntaje total máximo (si hubiera varios, cualquiera de ellos) y cantidad
de jugadores que obtuvieron ese puntaje total máximo.
*/
let nombreJugador = '';
let puntajeTotal = 0;
let puntajeMaximo = 0;
let jugadorPuntajeMaximo = '';
let cantidadJugadoresMaximo = 0;
let cantidadJugadoresMejoraron = 0;
let puntajeRonda1 = 0;
let puntajeRonda2 = 0;

while (true) {
    nombreJugador = prompt('Ingrese nombre del jugador');
    if (nombreJugador == 'FIN') {
        break;
    }
    puntajeRonda1 = parseInt(prompt('Ingrese puntaje ronda 1'));
    puntajeRonda2 = parseInt(prompt('Ingrese puntaje ronda 2'));
    puntajeTotal = puntajeRonda1 + puntajeRonda2;
    if (puntajeRonda2 > puntajeRonda1) {
        cantidadJugadoresMejoraron++;
    }
    if (puntajeTotal > puntajeMaximo) {
        puntajeMaximo = puntajeTotal;
        jugadorPuntajeMaximo = nombreJugador;
        cantidadJugadoresMaximo = 1;
    } else if (puntajeTotal == puntajeMaximo) {
        cantidadJugadoresMaximo++;
    }
}

alert('El puntaje total máximo fue ' + puntajeMaximo + ' por ' + jugadorPuntajeMaximo);
alert(cantidadJugadoresMaximo + ' jugadores obtuvieron ese máximo');
alert(cantidadJugadoresMejoraron + ' jugadores mejoraron en la segunda ronda');

/*
2) (Nivel medio, 5 puntos)
En una cierta dieta, cada día se debe comer solamente alimentos de los indicados, sin importar
las cantidades. Cada alimento está representado por una letra mayúscula diferente. Realizar
un programa en JS que solicite 3 strings: el primero representa la dieta, el segundo lo ingerido
en el almuerzo y el tercero lo ingerido en la cena e indique si ese día se cumplió con la dieta o
no. Se asume se ingresarán en mayúsculas.
Ejemplos
Dieta: “BNACDE”
Almuerzo: “AEF”
Cena: “BBCABJ”
Mostrar: No se cumplió
Dieta: “BTEAG”
Almuerzo: “GGGGGT”
Cena: “BA”
Mostrar: Se cumplió
*/

let dieta = prompt('Ingrese la dieta');
let almuerzo = prompt('Ingrese el almuerzo');
let cena = prompt('Ingrese la cena');
let comidaValida = true;
for(let i = 0; i < almuerzo.length; i++) {
    if (dieta.includes(almuerzo[i])) {
        continue;
    } else {
        comidaValida = false;
    }
}
if (comidaValida) {
    for(let j = 0; j < cena.length; j++) {
    if (dieta.includes(cena[j])) {
        continue;
    } else {
        comidaValida = false;
    }
    }
}
if (comidaValida) {
    alert("Se cumplió");
} else {
    alert("No se cumplió");
}

/*
3) (Nivel avanzado, 3 puntos)
Un camión hace repartos. Debe entregar una cierta cantidad de paquetes, pero no puede
superar el peso máximo en cada viaje. Deben entregarse en el mismo orden que se reciben.
Ningún paquete supera la carga máxima del camión. Implementar una función en JS que reciba
el peso máximo y la cantidad de paquetes como parámetro. Dentro de la función se debe
solicitar el ingreso del peso de cada uno de esos paquetes y retornar la cantidad mínima de
viajes que debe hacer.
Agregar la invocación por consola a la función para llevar 5 paquetes en un camión de 100
kilos.
function viajes(cantidadPaquetes, cargaMaxima)
Ejemplos:
Se recibe como cantidad 3 paquetes y la carga máxima 10. Los paquetes que se ingresaron
son: 3 2 3, debe retornar 1.
Se recibe 6 paquetes y la carga máxima es 10. Los paquetes ingresados son: 5 4 3 2 1 8, debe
retornar 3.
*/

function viajes(cantidadPaquetes, cargaMaxima) {
    let cantidadViajes = 1;
    let paquete = 0;
    let pesoViaje = 0;

    for(let i = 0; i < cantidadPaquetes; i++) {
        paquete = parseInt(prompt('Ingrese el peso del paquete'));
        if (pesoViaje + paquete <= cargaMaxima) {
            pesoViaje += paquete;
        } else {
            cantidadViajes++;
            pesoViaje = paquete;
        }
    }
    return(cantidadViajes);
}
console.log(viajes(5, 100));