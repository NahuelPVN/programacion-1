/*
1) (Nivel básico, 7 puntos)
Se tiene información sobre el estado de los contenedores de residuos de la ciudad. De cada
uno de los 500 contenedores se ingresará su estado (“Bueno”, “Regular”, “Malo”). Se asume
no hay errores en el ingreso.
Luego del ingreso de todos los datos, indicar cuántos contenedores hay en cada estado y si
hay algún estado que supere en cantidad a cada uno de los otros dos o no (ej. “la cantidad
de contenedores en estado bueno supera a la cantidad de contenedores en estado regular y
supera a la cantidad de contenedores en estado malo”).
*/
let estado = '';
let buenos = 0;
let regulares = 0;
let malos = 0;

for (let i = 0; i < 500; i++) {
    estado = prompt("Ingrese el estado del contenedor (Bueno/Regular/Malo)");
    if (estado == 'Bueno') {
        buenos++;
    } else if (estado == 'Regular') {
        regulares++;
    } else {
        malos++
    }
}
alert("Buenos: " + buenos + ", Regulares: " + regulares + ", Malos: " + malos);
if (buenos > regulares && buenos > malos) {
    alert('Hay más contenedores en estado Bueno que en Regular y Malo');
} else if (regulares > buenos && regulares > malos) {
    alert('Hay más contenedores en estado Regular que en Bueno y Malo');
} else if (malos > buenos && malos > regulares) {
    alert('Hay más contenedores en estado Malo que en Regular y Bueno');
} else {
    alert("No hay más contenedores en una categoría que en las otras dos");
}

/*
2) (Nivel medio, 5 puntos)
Un string es armónico si la cantidad de letras “a” en posiciones pares es igual a la cantidad
de letras “b” en posiciones impares.
Ej. “AfgBmbasAabxb” no es armónico ya que hay 3 letras A en posiciones pares (posiciones:
0,6,8) y 2 letras “B” en posiciones impares (posiciones: 3,5).
Hacer un programa en JS que solicite un string e indique si es armónico o no.
*/
let string = prompt("Ingrese el string a comprobar");
string = string.toLowerCase();
let aEnPar = 0;
let bEnImpar = 0;

for(let i = 0; i < string.length; i += 2) {
    if (string[i] == 'a') {
        aEnPar++;
    }
}
for(let j = 1; j < string.length; j += 2) {
    if (string[j] == 'b') {
        bEnPar++;
    }
}

if (aEnPar == bEnPar) {
    alert("Es armónico");
} else {
    alert("No es armónico");
}

/*
3) (Nivel avanzado, 3 puntos)
En un club se asigna como contraseña a cada socio un string generado de la siguiente
forma: comienza con las letras “CA” (contraseña asignada) y luego 18 dígitos, los cuales
inician con ceros (eventualmente ninguno) y terminan con el número de socio particular.
Ejemplos: CA000000000000012340 es del socio 12340
CA123456789012345678 es del socio 123456789012345678
CA000000000000000100 es del socio 100
CA12345 es inválida
12345678901234567890 es inválida
Implementar una función que recibe la contraseña y retorna el número de socio particular o el
aviso de que no es válida. Ejemplificar la invocación con la contraseña CA12345
function proceso(contraseña)
*/
function proceso(contraseña) {
    let contraseñaSinCA = contraseña.slice(2);
    let numeroSocio = Number(contraseñaSinCA);
    if (contraseña.length == 20 && contraseña.startsWith('CA') && !isNaN(contraseñaSinCA)) {
        return(numeroSocio);
    }
    return("La contraseña no es válida");
}
console.log(proceso("CA12345"));