/*
1) (Nivel básico, 7 puntos)
Realizar un programa en JS que permita ingresar los datos de 100 infracciones tomadas en
un día por una cámara de control de velocidad y cruce con luz roja. De cada infracción se
solicitará la hora (0 a 23), los minutos (0 a 59), y el tipo de infracción (“V”: velocidad, “R”: luz
roja). Todos los datos se asumen correctos. Al final del ingreso, debe indicarse el total de
infracciones en general, el total de cada tipo e indicar si hay más infracciones en horario
escolar (de 7:30 a 17:30) que en el resto del día o es la misma cantidad.
*/

let infraVel = 0;
let infraLuz = 0;
let hora = 0;
let minutos = 0;
let tipoInfra = '';
let infraEscolar = 0;
let infraNormal = 0;

for (let i = 0; i < 100; i++) {
    tipoInfra = prompt('Ingrese el tipo de infracción (V/R)');
    if (tipoInfra == 'V') {
        infraVel++;
    } else {
        infraLuz++;
    }
    hora = parseInt(prompt('Ingrese la hora'));
    minutos= parseInt(prompt('Ingrese los minutos'));
    if (
        (hora == 7 && minutos >= 30 || 
        hora > 7 && hora < 17 ||
        hora == 17 && minutos <= 30) 
    ) {
        infraEscolar++;
    } else {
        infraNormal++;
    }
}
alert('El total de infracciones fue 100');
alert(infraVel + ' fueron de velocidad y ' + infraLuz + ' fueron de luz roja');
if (infraEscolar > infraNormal) {
    alert('Hubo más infracciones en horario escolar');
} else if(infraNormal > infraEscolar) {
    alert('Hubo más infracciones fuera de horario escolar');
} else {
    alert('Hubo las mismas infracciones dentro y fuera de horario escolar');
}

/*
2) (Nivel medio, 5 puntos)
En un grupo de Whatsapp se agregaron varias personas (representadas por su inicial en
mayúscula, sin repetidos) y se dieron de baja otras. Se tiene un string con la secuencia de
agregados/eliminados. El signo “+” indica que se agregó la siguiente persona. El signo “-“
indica que se bajó la siguiente persona. Ejemplo: +A+C-A+D se agregaron A, C y D y se bajó
A, el grupo queda con C y D.
Hacer un programa en JS que lea la secuencia de movimientos e indique los integrantes
finales del grupo (en cualquier orden). Inicialmente el grupo está vacío. No hay
inconsistencias.
Ejemplo
Se ingresa: +F+H-H+G-F-G
Se muestra: Grupo vacío
Se ingresa: +A+C+N-C+B+C
Se muestra: ACNB (en ese u otro orden)
*/

/*
3) (Nivel avanzado, 3 puntos)
Se tienen las notas de un estudiante. Cada nota es un entero del 1 al 10, sin 0 adicionales.
Por error, en vez de ingresarlas de a una por vez, se ingresaron todas juntas. Ejemplo:
“31310110”, que corresponde a las notas: 3, 1, 3, 10, 1, 10. Se desea calcular el promedio.
Implementar la funcion promedio que recibe la secuencia y retorna el promedio con dos
dígitos decimales. Agregar la invocación a la función para que muestre el resultado para el
caso de “31310110” utilizando alert.
function promedio(secuencia)
Ejemplos:
Si recibe: “10910” retorna: 9.67
Si recibe: “222222223”, retorna 2.11
Si recibe: “310110”, retorna 6.00
*/

