/*
(Nivel básico, 7 puntos)
Realizar un programa en JS para eventos. Se ingresarán datos de eventos hasta que el
usuario indique la palabra “fin”. De cada evento se solicita al usuario su tipo ("público" o
"privado") y la cantidad de personas que asistieron a ese evento particular. Se asume que
todos los datos ingresados son válidos. Al final, indicar cuál tipo de evento tuvo en total más
participantes o si ambos tipos tuvieron la misma cantidad total. Si no hubo ningún dato,
indicarlo. Además, si hubo datos, informar el promedio de asistencia de personas en los
eventos de tipo "privado".
*/

let numeroPublico = 0;
let countPublico = 0;
let numeroPrivado = 0;
let countPrivado = 0;
while (true) {
    let tipo = prompt("Tipo de evento? -> ");
    if (tipo != "fin") {
        let numero = parseInt(prompt("Cantidad de invitados? -> "));
        if (tipo == "público") {
            numeroPublico += numero;
            countPublico++;
        } else {
            numeroPrivado += numero;
            countPrivado++;
        }
    } else {
        break;
    }
}

if (countPublico || countPrivado) {
    if (numeroPublico > numeroPrivado) {
        alert("Los eventos públicos tuvieron más participantes");
    } else if (numeroPublico < numeroPrivado) {
        alert("Los eventos privados tuvieron más participantes");
    } else {
        alert("Los eventos públicos y privados tuvieron la misma cantidad total de participantes");
    }
}

alert(`El promedio de asistencia en los eventos privados fue de ${numeroPrivado / countPrivado}`);

/*
2) (Nivel medio, 5 puntos)
Leer un string que representa un párrafo. Indicar si es válido. Se considera válido si tiene
más de 20 caracteres y cada vez que hay una coma, el siguiente carácter es un espacio.
Ejemplos:
Se ingresa: “Este es el texto. Para revisar, mañana sin falta.” Es válido
Se ingresa: “Esta frase aunque larga,no es ok, opss” No es válida
Se ingresa: “Frase larga y también incorrecta,” No es válida
*/

let stringLectura = prompt("Ingrese la frase");
let stringValido = true;
if (stringLectura.length > 20) {
    for (let i = 0; i < stringLectura.length; i++) {
        if ( (stringLectura[i] == ',') && (stringLectura[i + 1] != ' ') ) {
            stringValido = false;
        }
    }
} else {
    stringValido = false
}
if (stringValido) {
    alert("El string es válido");
} else {
    alert("El string no es válido");
}

/*
3) (Nivel avanzado, 3 puntos)
Realizar en JS una función de nombre "sinCeros" que recibe dos números naturales mayores
que 0 y retorna su suma sin los ceros.
Ejemplos: si los números fueran 14 y 6, la suma da 20 y retorna 2.
para otros números, si la suma da 2000308, retorna 238;
si la suma es 1900, retorna 19;
si la suma es 15432, retorna 15432.
Agregar la invocación de la función para los números 12800 y 42, mostrando el resultado en
consola.
function sinCeros (dato1, dato2)
*/

function sinCeros(dato1, dato2) {
    let conCeros = dato1 + dato2;
    console.log(conCeros); 
    conCeros.split(',');
    console.log(conCeros);
}

sinCeros(14,6);