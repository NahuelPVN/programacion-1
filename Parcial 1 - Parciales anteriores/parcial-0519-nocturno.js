/*
1) (Nivel básico, 7 puntos)
Realizar un programa en JS que solicite al usuario 30 datos. Cada dato corresponde a la
cantidad de lluvia de un día (se asume se ingresarán en forma ordenada y correlativa del día
1 al día 30). Si un dato de lluvia está fuera del rango 0 a 300, debe solicitarse nuevamente
hasta que esté correcto. Luego de ingresar todos los datos, indicar qué día tuvo la máxima
cantidad de lluvia (si hubiera varios con el mismo valor, el más cercano al comienzo del mes)
y la cantidad de días en que se dio ese máximo.
*/

let diaMasLluvia = 0;
let maximoLluvia = 0;
let inputI = 0;
let cantidadDiasMaximo = 0;
for(let i = 1; i <= 30; i++) {
    while(true) {
        inputI = parseInt(prompt("Ingrese el máximo en el día " + i));
        if (inputI < 0 || inputI > 300) {
            alert("La cantidad debe ser entre 0 y 300");
        } else {
            break;
        }
    }
    if (inputI > maximoLluvia) {
        maximoLluvia = inputI;
        diaMasLluvia = i;
        cantidadDiasMaximo = 1;
    } else if (inputI == maximoLluvia) {
        cantidadDiasMaximo++;
    }
}
alert("El máximo de lluvia fue " + maximoLluvia + " y corresponde al día " + diaMasLluvia);
alert("Este máximo se repitió " + cantidadDiasMaximo + " días");

/*
2) (Nivel medio, 5 puntos)
Una máquina recibe una secuencia de tareas. Realiza dos tipos de trabajo (“A” y “B”). El
trabajo “A” se realiza de a uno por vez y lleva siempre una unidad de tiempo. Cada trabajo de
tipo "B", se realiza de a uno por vez y si está inmediatamente precedido por un trabajo "A"
lleva 3 unidades de tiempo y sino lleva 2 unidades. Se sabe que la primera tarea siempre es
“A”.
Hacer un programa en JS que solicite el string que representa la secuencia (se asume válida)
y muestre el tiempo total de trabajo.
Ejemplos
secuencia: "AABABBAB" muestra: 15
secuencia: ABBB muestra: 8
*/

let tiempoTotal = 1;
let stringInput = prompt('Ingrese la secuencia');

for(let i = 1; i < stringInput.length; i++) {
    if (stringInput[i] == 'A') {
        tiempoTotal++;
    } else { // i es B
        if (stringInput[i - 1] == 'A') {
            tiempoTotal += 3;
        } else {
            tiempoTotal += 2;
        }
    }

}
alert(tiempoTotal);

/*
3) (Nivel avanzado, 3 puntos)
En una ciudad, la intendencia desea que todas las bicicletas tengan chapa con 3 dígitos. A
efectos de visualizarlas mejor, se trata que ninguna chapa tenga dígitos repetidos, así por
ejemplo, la placa 848 no sería válida. Se desea saber la cantidad de chapas que se pueden
fabricar entre dos números dados. Implementar en JS la función placas que recibe los dos
números y retorna la cantidad.
Ejemplos: Si recibe 105 y 127 retorna 11 (explicación: corresponde a las chapas 105, 106,
107, 108, 109, 120, 123, 124, 125,126 y 127, en total 11.)
Si recibe 989 y 999 retorna 0
Si recibe 122 y 125, retorna 3
Si recibe 234 y 234, retorna 1
Agregar la invocación a la función para que muestre el resultado para el caso de 105 y 127
utilizando alert.
function placas(desde, hasta)
*/

function placas(desde, hasta) {
    let cantidadValidas = 0;
    for(let i = desde; i <= hasta; i++) { // i = todos los numeros desde -> hasta
        let iString = i.toString();
        let digito0 = iString[0];
        let digito1 = iString[1];
        let digito2 = iString[2];
        if (digito0 != digito1 && digito0 != digito2 && digito1 != digito2) {
            cantidadValidas++;
        }  
    }
    return(cantidadValidas);
}
alert(placas(105, 127));