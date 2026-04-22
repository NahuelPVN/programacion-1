/*

1) (Nivel básico, 7 puntos)
Se tiene información de los recorridos de los monopatines eléctricos. Hasta que el usuario lo
indique, se ingresará número de monopatín (se asume positivo). Debe verificarse que cada
número sea mayor que el previo. Si no está correcto, se vuelve a solicitar el dato hasta que lo
esté. Por cada número de monopatín, se ingresa la cantidad de usos que tuvo ese
monopatín y el total de km recorridos.
Al final del proceso de todos los datos, mostrar el total de km entre los monopatines que
fueron usados más de 20 veces.
*/
let inputNumeroMonopatin = 0;
let numeroMonopatin = 0;
let usosMonopatin = 0;
let kmMonopatin = 0;
let kmTotal = 0;
let continuar = true;

while (continuar) {
    while(true) {
        inputNumeroMonopatin = Number(prompt("Ingrese número de monopatín (-1 = finalizar)"));
        if (inputNumeroMonopatin == -1) {
            continuar = false;
            break;
        }
        if (inputNumeroMonopatin > numeroMonopatin) {
            break;
        } else {
            alert("Ingresa un número de monopatín mayor al anterior");
        }
    }
    if (!continuar) {
        break;
    }
    usosMonopatin = Number(prompt("Ingrese número de usos"));
    kmMonopatin = Number(prompt("Ingrese kilómetros del monopatín"));
    if (usosMonopatin > 20) {
        kmTotal += kmMonopatin;
    }
}

alert(`El total de kilómetros en monopatines con más de 20 usos es ` + kmTotal);

/*
2) (Nivel medio, 5 puntos)
Leer un string y genere uno nuevo donde cada letra esté repetida según su posición.
Ejemplo:
Lee: “hola”, genera: hoolllaaaa
Lee: “parcial”, genera: paarrrcccciiiiiaaaaaalllllll
Hacer un programa en JS que solicite el string, genere un nuevo string y lo muestre.
*/
let stringInput = prompt("Ingrese el string");
let nuevoString = ''
for (let i = 0; i < stringInput.length; i++) {
    for (let x = 0; x < i + 1; x++) {
        nuevoString += stringInput[i];
    }
}
alert(nuevoString);

/*
3) (Nivel avanzado, 3 puntos)
Dos contraseñas tienen el mismo patrón cuando la diferencia entre cada uno de sus dígitos
posición a posición es la misma. Se asumen del mismo largo.
Ejemplo: contraseñas 2406 y 5739 tienen el mismo patrón:
Explicación: 2 y 5 diferen en +3, 4 y 7 difieren en +3, 0 y 3 difieren en +3, 6 y 9 difieren en +3
Ejemplo: 75920 y 64831 no tienen el mismo patrón.
Implementar en JS la función verificar que recibe dos contraseñas y retorna el valor booleano
correspondiente. Anotar la invocación para probar en la consola con las contraseñas 2402 y
5523.
function patron (clave1, clave2)
*/
function patron(clave1, clave2) {
    let mismoPatron = true;
    let clave1String = clave1.toString();
    let clave2String = clave2.toString();

    for (let i = 0; i < clave1String.length - 1; i++) {
        let diferenciaActual =
            parseInt(clave1String[i]) - parseInt(clave2String[i]);
        let diferenciaSiguiente =
            parseInt(clave1String[i + 1]) - parseInt(clave2String[i + 1]);
        if (diferenciaActual !== diferenciaSiguiente) {
            mismoPatron = false;
        }
    }
    return mismoPatron;
}
console.log(patron(2402, 5523));