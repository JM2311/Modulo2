// TAREAS ARREGLOS Y FUNCIONES DEL CAMPUS

// ARREGLOS

// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año.
// Mostrar por pantalla en forma de lista  los doce nombres del arreglo.

// const meses = [
//   "enero",
//   "febrero",
//   "marzo",
//   "abril",
//   "mayo",
//   "junio",
//   "julio",
//   "agosto",
//   "septiembre",
//   "octubre",
//   "noviembre",
//   "diciembre",
// ];

// let mostrarMeses = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br>");
//   }
// };

// mostrarMeses(meses);

// -------------------------------------------------------------------------------------

// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades
// y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado,
// luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

// let ciudades = [];
// do {
//   let peticionAlUsuario = prompt("Ingrese el nombre de una ciudad :");
//   ciudades.push(peticionAlUsuario);
// } while (confirm("Desea ingresar otra ciudad?"));

// console.log(ciudades);
// // Longitud del arreglo
// console.log(ciudades.length);
// // Posiciones primera,tercera y ultima.
// document.write(ciudades[1] + "<br>");
// document.write(ciudades[3] + "<br>");
// let i = ciudades.length - 1;
// document.write(ciudades[i]);
// // Añadir en ultima posicion a Paris
// let paris = "Paris";
// ciudades.push(paris);
// // Escribir por pantalla la segunda posicion
// document.write(ciudades[2]);
// // Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'
// ciudades[2] = "Barcelona";

// -------------------------------------------------------------------------------------

// 3- Escribir un script que simule el lanzamiento de dos dados.
//  Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6
//  para cada uno de los lanzamientos de los dados.
//  Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma,
//  repitiendo 50 veces esta operación.
// let i = 0;
// while (i < 50) {
//   let dado1 = Math.round(
//     Math.random(Number(confirm("Lanza el primer dado"))) * 6
//   );
//   let dado2 = Math.round(
//     Math.random(Number(confirm("Lanza el segundo dado"))) * 6
//   );

//   console.log(dado1);
//   console.log(dado2);

//   let resultadosSumaDados = [];

//   const sumarDados = (x, y) => {
//     let suma = x + y;
//     resultadosSumaDados.push(suma);
//   };
//   sumarDados(dado1, dado2);
//   console.log(resultadosSumaDados);
//   i++;
// }

// -------------------------------------------------------------------------------------

// FUNCIONES

// 1- Escribir el código de una función a la que se pasa como parámetro un número entero
// y devuelve como resultado una cadena de texto que indica si el número es par o impar.
// Mostrar por pantalla el resultado devuelto por la función.

// let numero = Number(prompt("Ingrese un numero : ", 0));

// let parOImpar = (number) => {
//   if (number % 2 == 0) {
//     document.write(`el numero ${number} es par`);
//   } else {
//     document.write(`el numero ${number} es impar`);
//   }
// };
// parOImpar(numero)

// -------------------------------------------------------------------------------------

// 2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
//A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas,
//sólo por minúsculas o por una mezcla de ambas.

// let textoDelUsuario = prompt("Ingrese un texto : ");

// let textoAnalizado = (text) => {
//   if (text == text.toUpperCase()) {
//     document.write(`${text} esta formado solo por mayusculas`);
//   } else if (text == text.toLowerCase()) {
//     document.write(`${text} esta formado solo por minusculas`);
//   }else{
//     document.write(`${text} esta formado solo por minusculas`);
//   }
    
  
// };
// textoAnalizado(textoDelUsuario);

// -------------------------------------------------------------------------------------

// 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
// luego crear una función para calcular su perímetro y mostrarlo por pantalla.
// La fórmula del perímetro  es p = 2*(a + b)

// let primerValor = Number(
//   prompt("Ingrese el valor de un lado (ancho) del rectangulo")
// );
// let segundoValor = Number(
//   prompt("Ingrese el valor de un lado (alto) del rectangulo")
// );

// const calculoPerimetro = (a, b) => {
//   let p = 2 * (a + b);
//   return p;
// };

// document.write(
//   `El perimetro del rectangulo es ${calculoPerimetro(
//     primerValor,
//     segundoValor
//   )}`
// );

// -------------------------------------------------------------------------------------

// 4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla,
// la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10
// del número elegido por el usuario.

// let numeroIngresado = Number(
//   prompt("La tabla de multiplicacion de que numero quisiera saber: ", 0)
// );

// const tablaDelNumero = (number) => {
//   for (let i = 0; i <= 10; i++) {
//     document.write(`${i} x ${number} =` + i * number +"<br>");
//   }
// };
// tablaDelNumero(numeroIngresado);
