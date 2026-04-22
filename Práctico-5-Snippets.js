// 1) Pedir la base y altura de un triángulo. Mostrar su área. Ej. si se lee 6 y 2, muestra 6.
let base = parseInt(prompt("Ingrese base"));
let altura = parseInt(prompt("Ingrese altura"));
alert("El área es " + ((base * altura) / 2));

// 2) Ingresar 3 valores enteros y mostrar el menor de ellos. Ej. si se lee: 1, -3, 5, mostrar: -3
let menor = Number.MAX_SAFE_INTEGER;
let entrada = 0;
for (let i = 0; i < 3; i++) {
    entrada = parseInt(prompt("Ingrese número"));
    if (entrada < menor) {
        menor = entrada;
    }
}
alert("El menor es " + menor);

// 3) Ingresar 3 datos y mostrar la suma de sus valores absolutos.
let dato = 0;
let sumaAbs = 0;
for (let i = 0; i < 3; i++) {
    dato = parseInt(prompt("Ingrese valor"));
    if (dato >= 0) {
        sumaAbs += dato;
    } else {
        sumaAbs -= dato;
    }
}
alert("La suma de sus valores absolutos es " + sumaAbs);

// 4) Pedir el ingreso de un número n. Mostrar la suma de todos los impares que sean múltiplos de 3 entre 1 y n. Ej. si se ingresa 16, se muestra 27.
let n = parseInt(prompt("Ingrese n"));
let sumaImpares = 0;
for (let i = 1; i <= n; i++) {
    if ( (i % 3 == 0) && (i % 2 != 0)) {
        sumaImpares += i;
    }
}
alert(sumaImpares);

// 5) Ingresar 10 números. Mostrar el promedio.
let numero = 0;
let suma10numeros = 0;
for (let i = 0; i < 10; i++) {
    numero = Number(prompt("Ingrese numero"));
    suma10numeros += numero;
}
alert(suma10numeros / 10);

// 6) Ingresar 10 números. Se asumen positivos. Indicar la diferencia entre el mayor y el menor
let temp = Number(prompt("Ingrese número"));
let mayorNum = temp;
let menorNum = temp;
temp = 0;
for (let i = 0; i < 9; i++) {
    temp = Number(prompt("Ingrese número"));
    if (temp < menorNum) {
        menorNum = temp;
    } else if (temp > mayorNum) {
        mayorNum = temp;
    }
}
alert("El mayor fue " + mayorNum + ", el menor fue " + menorNum);
alert("La diferencia entre el mayor y el menor es " + (mayorNum - menorNum));

// 8) Se ingresan los datos de dos personas que se sabe nacieron el mismo año. De cada una si indica nombre, dia y mes. Debe informarse quién de ellos es el mayor, o la indicación de que ambos nacieron en la misma fecha.
let nombre1 = prompt("Ingrese el nombre 1");
let dia1 = Number(prompt("Ingrese el primer día"));
let mes1 = Number(prompt("Ingrese el primer mes"));
let nombre2 = prompt("Ingrese el nombre 2");
let dia2 = Number(prompt("Ingrese el segundo día"));
let mes2  = Number(prompt("Ingrese el segundo mes"));

// Caso: mes distinto
if (mes2 > mes1) {
    alert(nombre1 + " es mayor");
} else if (mes2 < mes1) {
    alert(nombre2 + " es mayor");
} else {
    // Caso: ambos tienen mismo mes
    if (dia2 > dia1) {
        alert(nombre1 + " es mayor");
    } else if (dia2 < dia1) {
        alert(nombre2 + " es mayor");
    } else {
        alert("Nacieron el mismo día");
    }
}

// 9) Se ingresan 3 números y debe retornarse un texto con el signo del resultado del producto de los mismos (ej: 1, -4, 7 muestra “el signo es -”)
let resultado = 1;
let inputProducto = 0;
for (let i = 0; i < 3; i++) {
    inputProducto = Number(prompt("Ingrese número"));
    resultado *= inputProducto;
}

if (resultado > 0) {
    alert("El signo es positivo");
} else if (resultado < 0) {
    alert("El signo es negativo");
} else {
    alert("El resultado es 0 (neutro)");
}

// 10) Escribir un programa reciba un número de 3 dígitos e indique si es un número de Armstrong. Nota: un número de Armstrong es aquel en el cual la suma de cada uno de sus dìgitos elevado al número total de dìgitos es igual al a sí mismo. Ej: Si evaluamos 371 sería 33 + 73 +13 = 371

let numeroArmstrong = Number((prompt("Ingrese número")));
let digitosArmstrong = (numeroArmstrong.toString()).split('');
let sumaArmstrong = 0;
let largoArmstrong = digitosArmstrong.length;

for (let n of digitosArmstrong) {
    sumaArmstrong += (Number(n) ** (largoArmstrong));
}
alert("El resultado es " + sumaArmstrong);
if (numeroArmstrong == sumaArmstrong) {
    alert(numeroArmstrong + " es un número de Armstrong");
} else {
    alert(numeroArmstrong + " NO es un número de Armstrong");
}