/*
EJ 1 – PUNTAJE 7
Para subir una foto en una red social hay restricciones de tamaño. El tamaño mínimo es C*C, siendo
C el lado de un cuadrado. Ana tiene N fotos para subir. De cada una ingresará el ancho A y largo L.
Cuando sube cada foto puede ocurrir que:
- si el ancho y/o el largo es menor a C, el programa debe indicar “MUY CHICA”
- si las medidas son ambas iguales o superiores a C, tiene el tamaño válido, pero debe informarse
en el caso de que ambas sean iguales a C que es “PERFECTA” o en otro caso debe indicar
“DEBE RECORTARSE”.
Hacer un programa en JS para ser probado en un snippet que: ingrese primero el lado C, luego ingrese
la cantidad N de fotos y luego de cada una, ingrese Ancho y Largo. Al ingresar cada foto el programa
informa si es “MUY CHICA”, “PERFECTA” o “DEBE RECORTARSE”. Al final, indicar el porcentaje de
fotos que fueron “MUY CHICA”.
Las respuestas mostrarlas con alert. Los datos a ingresar se asumen correctos.
*/

let ancho = 0;
let largo = 0;
let cantidadChica = 0;
let c = parseInt(prompt('Ingrese el tamaño c'));
let n = parseInt(prompt('Ingrese la cantidad de fotos'));
for (let i = 0; i < n; i++) {
    ancho = parseInt(prompt('Ingrese el ancho'));
    largo = parseInt(prompt('Ingrese el largo'));
    if (ancho == c && largo == c) {
        alert('PERFECTA');
    } else if (ancho >= c && largo >= c) {
        alert('DEBE RECORTARSE');
    } else {
        alert('MUY CHICA');
        cantidadChica++
    }
}

alert('El ' + ((cantidadChica*100) / n) + "% de las fotos fueron chicas");

/*
EJ 2 – PUNTAJE 4
Un número pentagonal está definido por la fórmula: n*(3*n-1)/2 para n = 1, 2, 3, 4, .... Los primeros
números pentagonales son 1, 5, 12, 22, ...
a) Escribir en JS la función pentagonal que recibe n y devuelve el número correspondiente. Por
ejemplo, si recibe 4, retorna 22.
b) Implementar un programa en JS para ser probado en un snippet que lee una cantidad m (si es
0 o negativo debe solicitarse nuevamente hasta que sea válido) y muestra de a uno por línea en
consola los primeros m números pentagonales, asumiendo disponible y usando la función de a)
*/

function pentagonal(n) {
    return(n*(3*n-1)/2);
}
let m = 0;
while (true) {
    m = parseInt(prompt('Ingrese la cantidad m'));
    if (m <= 0) {
        alert('El numero debe ser mayor y distinto de 0');
    } else {
        break;
    }
}
for (let i = 1; i <= m; i++) {
    console.log(pentagonal(i));
}


/*
EJ 3 – PUNTAJE 4
Ana tiene muchos banderines, cada uno con una letra en mayúscula. Quiere saber cuántas veces podrá
armar una palabra dada (se asume no tiene letras repetidas), usando una vez cada banderín.
Ejemplos: Si los banderines son:
C-L-A-L-D-E-K-O-A-E-S-O-J-S-L-D-U-P-E-O-A-O-W
(representado por el string “CLALDEKOAESOJSLDUPEOAOW”) y la palabra es “SOL” puede armarla
2 veces.
Si los banderines fueran:
E-L-S-A-E-N-F-O-R-L
(representado por el string es “ELSAENFORL”) y la palabra es “DIAL”, puede armarla 0 veces.
Implementar en JS la función “armarCartel” que recibe un string conteniendo los banderines y un string
con la palabra a formar y retorna la cantidad de carteles que puede armar. Los string se asumen válidos.
*/

function armarCartel(banderines, palabra) {

    let maximoVeces = Number.MAX_SAFE_INTEGER;
    let repeticionesLetra = 0;

    for (let i = 0; i < palabra.length; i++) { // va por cada letra de la palabra a formar [i]
        repeticionesLetra = 0;
        for(let j = 0; j < banderines.length; j++) { // trabaja con cada letra de banderines [j]
            if (palabra[i] == banderines[j]) {
                repeticionesLetra++;
            }
        }
        if (repeticionesLetra < maximoVeces) {
            maximoVeces = repeticionesLetra;
        }
    }
    return(maximoVeces);
}
