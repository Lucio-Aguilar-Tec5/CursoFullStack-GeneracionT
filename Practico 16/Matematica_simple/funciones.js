
//Una función que se llame triplicador que tome un número como input (osea, como Parámetro) y retorne el triple de ese valor.

let n1 = prompt("ingrese el numero que desea triplicar: ");

function triplicador(n1){
    return n1 * 3;
}
alert("Tu numero triplicado es: " + triplicador(n1));

//Una función multiplicador que tome dos números como Parámetros y devuelva el producto de los dos.

let n2 = prompt("Ingrese un numero: ");
let n3 = prompt("Ingrese otro numero: ");

function multiplicador(n2, n3){
    let producto;
    producto = n2 * n3;
    return producto;
}
alert("El producto de esos numeros es: " + multiplicador(n2, n3));

//Una función division que tome dos números como Parámetros y devuelva el resultado de dividir el primero por el segundo.

let n4 = prompt("Ingrese el numero al que se va dividir: ");
let n5 = prompt("Ingrese el numero que lo divide: ");

function divisor(n4, n5){
    let dividir = n4 / n5;
    return dividir;
}
alert("EL resultado es: " + divisor(n4, n5));

//Una función resto que tome dos números como Parámetros y devuelva el resultado del módulo del primero sobre el segundo.

let n6 = prompt("Ingrese un numero para restar: ");
let n7 = prompt("Ingrese otro numero: ");

function resto(n6, n7){
    let resto = n6 - n7;
    return resto;
}

alert("EL resultado de la resta es: " + resto(n6, n7));

//Por último, calculá el valor de triplicar 5, luego multiplicar eso por 12, dividir por 12 y encontrar el resto de dividir eso en 3.

function final (aux){

    let x = aux*3;
    let y = x * 12;
    let z = y / 12;
    let i = z / 3;
    return i;
}
alert("El numero es: " + final(5));

