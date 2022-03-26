//Ciclos:

//While:

let i = 1;
while (i > 0 && i < 10) {
  //hago algo
  i++;
}

//Do while

do {
  //hago algo
  i++;
} while (i > 0 && i < 10);

//for

for (let i = 0; i > 0 && i < 10; i++) {}

//Array

const numeros = [5, 10, 20, 30, 100];

//Recorrer y sumar el array

// let sumaTotal = 0

// for (let i = 0; i < numeros.length; i++) {
//     sumaTotal += numeros[i]
//     console.log(`sumaTotal en la posicion ${i} que vale ${numeros[i]} es : ${sumaTotal}`);
// }
// console.log("Total :" + sumaTotal);

//Agregar datos a un array

// numeros.push(2)
// console.log(numeros);

//Agregar datos a un array con un prompt

// const numeroDesdeUsuario = Number(prompt('Ingresa un numero :'))

// numeros.push(numeroDesdeUsuario)
// console.log(numeros);

//Agregar datos a un array con 5 prompt

let arregloDeNumeros = [];
for (let i = 0; i < 5; i++) {
  const numero = Number(prompt("Ingrese un numero : "));
  arregloDeNumeros.push(numero);
}

console.log(arregloDeNumeros);
