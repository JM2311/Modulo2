//TAREAS DE LA HOJA DE EJERCICIOS DEL CAMPUS "TEMA BUCLES"
// DESDE EL EJERCICIO 3

// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// let textoGuardado = [];
// let i = 0;
// let confirmacion;
// do {
//   textoGuardado[i] = prompt("Ingrese una palabra : ");
//   i++;
// } while ((confirmacion = confirm("Desea seguir ingresando palabras?") == true));

// console.log(textoGuardado);

// const mostrarTexto = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     document.write(arr[i] + " - ");
//   }
// };
// mostrarTexto(textoGuardado);

//--------------------------------------------------------------------

/* 4- Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/
// let solicitudAlUsuario = 0;

// let numerosIngresados = [];
// for (let i = 0; confirm("Desea ingresar un numero?"); i++) {
//   let numeros = Number(prompt("Ingrese un numero : "));
//   if (isNaN(numeros)) {
//     alert("Ingrese un numero valido");
//   } else {
//     numerosIngresados.push(numeros);
//   }
// }
// let sumaTotal = 0;
// for (let i = 0; i < numerosIngresados.length; i++) {
//   sumaTotal += numerosIngresados[i];
//   console.log(
//     `sumaTotal en la posicion ${i} que vale es ${numerosIngresados[i]} es : ${sumaTotal} `
//   );
// }
// console.log("La suma total de todos los numeros ingresados es : " + sumaTotal);

// console.log(numerosIngresados);

//--------------------------------------------------------------------
/*5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :
El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».*/

// let numeroIngresado = [];
// for (let i = 0; confirm("Desea ingresar un numero de DNI?"); i++) {
//   let numero = Number(prompt("Ingrese un numero de DNI : "));
//   if (numero > 99999999 || numero < 10000000) {
//     alert("Ingrese un numero de DNI valido");
//   } else {
//     numeroIngresado.push(numero);
//   }
//   switch (numeroIngresado[i] % 23) {
//     case 0:
//       console.log("Le Corresponde la letra T");
//       break;
//     case 1:
//       console.log("Le Corresponde la letra R");
//       break;
//     case 2:
//       console.log("Le Corresponde la letra W");
//       break;
//     case 3:
//       console.log("Le Corresponde la letra A");
//       break;
//     case 4:
//       console.log("Le Corresponde la letra G");
//       break;
//     case 5:
//       console.log("Le Corresponde la letra M");
//       break;
//     case 6:
//       console.log("Le Corresponde la letra Y");
//       break;
//     case 7:
//       console.log("Le Corresponde la letra F");
//       break;
//     case 8:
//       console.log("Le Corresponde la letra P");
//       break;
//     case 9:
//       console.log("Le Corresponde la letra D");
//       break;
//     case 10:
//       console.log("Le Corresponde la letra X");
//       break;
//     case 11:
//       console.log("Le Corresponde la letra B");
//       break;
//     case 12:
//       console.log("Le Corresponde la letra N");
//       break;
//     case 13:
//       console.log("Le Corresponde la letra J");
//       break;
//     case 14:
//       console.log("Le Corresponde la letra Z");
//       break;
//     case 15:
//       console.log("Le Corresponde la letra S");
//       break;
//     case 16:
//       console.log("Le Corresponde la letra Q");
//       break;
//     case 17:
//       console.log("Le Corresponde la letra V");
//       break;
//     case 18:
//       console.log("Le Corresponde la letra H");
//       break;
//     case 19:
//       console.log("Le Corresponde la letra L");
//       break;
//     case 20:
//       console.log("Le Corresponde la letra C ");
//       break;
//     case 21:
//       console.log("Le Corresponde la letra K");
//       break;
//     case 22:
//       console.log("Le Corresponde la letra E");
//       break;
//     default:
//       break;
//   }
// }
// console.log(numeroIngresado);
//--------------------------------------------------------------------
// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….

// let i;
// let repeticion;
// for (i = 1; i <= 30; i++) {
//   for (repeticion = 0; repeticion < i; repeticion++) {
//     document.write(i);
//   }
//   document.write("<br/>");
// }
//--------------------------------------------------------------------
// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario
// (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1
// let numeroIngresado = Number(prompt("Ingrese un numero : "));

// while (numeroIngresado > 50 || numeroIngresado < 0 || isNaN(numeroIngresado)) {
//   numeroIngresado = Number(prompt("Ingrese un numero : "));
// }
// let i;
// let rep;
// for (i = numeroIngresado; i >= 1; i--) {
//   for (rep = i; rep >= 1; rep--) {
//     document.write(i);
//   }
//   document.write("<br/>");
// }
// let numberIngresado = Number(prompt("Ingrese un numero : "));
// do {
//   if (Number(numberIngresado) == numberIngresado) {
//     if (numberIngresado > 0 && numberIngresado <= 50) {
//       let i;
//       let rep;
//       for (i = numberIngresado; i >= 1; i--) {
//         for (rep = i; rep >= 1; rep--) {
//           document.write(i);
//         }
//         document.write("<br/>");
//       }
//     } else {
//       alert(`Ingrese un numero menor a 50`);
//     }
//   } else {
//     alert("error no es numero");
//   }
// } while (numberIngresado > 50);
//--------------------------------------------------------------------
// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50)

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

// let numeroDelUsuario = prompt("Ingrese un numero : ", 0);
// if (
//   numeroDelUsuario > 0 &&
//   numeroDelUsuario <= 50 &&
//   Number(numeroDelUsuario) == numeroDelUsuario
// ) {
//   console.log(numeroDelUsuario);
//   let i;
//   let rep;
//   for (i = 1; i <= numeroDelUsuario; i++) {
//     for (let rep = 0; rep <= i; rep++) {
//       document.write(rep);
//     }
//     document.write("<br/>");
//   }
// } else {
//   alert("Ingrese un numero menor a 50 o un numero valido");
// }
//--------------------------------------------------------------------
// 9- Crea un script que escriba los números del 1 al 500,
// que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal.
// Por ejemplo :

// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5-
// ————————————————————-

// 6
// 7
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// 10

// for (let i = 1; i <= 500; i++) {
//   document.write(i);
//   if (i % 4 == 0) {
//     document.write(` es multiplo de 4`);
//   } else if (i % 9 == 0) {
//     document.write(` es multiplo de 9`);
//   }
//   if (i % 5 == 0) {
//     document.write("<hr>");
//   }
//   document.write("<br>");
// }
//--------------------------------------------------------------------

// 10- Realiza un script que pida número de filas y columnas y escriba una tabla.
// Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente.
// Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

// var i;
// var j;

// let filas = Number(prompt("Ingrese el numero de filas : ", 0));
// let columns = Number(prompt("Ingrese el numero de columnas : ", 0));
// let resultado = filas * columns;
// document.write("<table border>");
// for (i = 0; i < filas; i++) {
//   document.write("<tr>");
//   for (j = 0; j < columns; j++) {
//     document.write("<td>");
//     document.write(resultado);
//     resultado--;
//     document.write("</td>");
//   }
//   document.write("</tr>");
// }
// document.write("</table>");
//--------------------------------------------------------------------

// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

// let nombre1 = prompt("Ingrese el primer nombre : ");
// let edad1 = Number(prompt("Ingrese su edad : ", 0));
// let nombre2 = prompt("Ingrese el segundo nombre : ");
// let edad2 = Number(prompt("Ingrese su edad : ", 0));
// let nombre3 = prompt("Ingrese el tercer nombre : ");
// let edad3 = Number(prompt("Ingrese su edad : ", 0));

// let mayorEdad = Math.max(edad1, edad2, edad3);
// if (mayorEdad == edad1) {
//   alert(`${nombre1} es el/la mayor con ${edad1} años`);
// } else if (mayorEdad == edad2) {
//   alert(`${nombre2} es el/la mayor con ${edad2} años`);
// } else if (mayorEdad == edad3) {
//   alert(`${nombre3} es el/la mayor con ${edad3} años`);
// }
// alert(Math.max.apply(null,edades))
//--------------------------------------------------------------------

// 12- Realiza un script que genere un número aleatorio entre 1 y 99

// let peticion = confirm("Desea un numero aleatorio?");

// if (peticion == true) {
//   alert(Math.round(Math.random() * 100));
// }
//--------------------------------------------------------------------

// 13- Realiza un script que pida un texto y lo muestre en mayúsculas.

// let peticionAlUsuario = prompt("Ingrese un texto : ");
// alert(peticionAlUsuario.toUpperCase());
//--------------------------------------------------------------------

// 14- Realiza un script que pida una cadena de texto
// y lo muestre poniendo el signo – entre cada carácter sin usar el método replace.
// Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

// let peticionAlUsuario = prompt("Ingrese un texto :");

// let longCaracteres = peticionAlUsuario.length;
// let caracter;
// let i;
// // for (i = 0; i < longCaracteres; i++) {
// //   caracter = peticionAlUsuario.charAt(i);
// //     document.write(caracter + "-");
// // }

// for (i = 0; i < longCaracteres; i++) {
//   caracter = peticionAlUsuario.charAt(i);
//   document.write(`${caracter}-`);
// }
//--------------------------------------------------------------------

// 15- Realiza un script que cuente el número de vocales que tiene un texto.

// const peticion = prompt("Ingrese un texto : ");
// let cantidadVocales = [];
// let sumaVocales = 0;
// while (Number(peticion)) {
//   peticion = prompt("Ingrese un texto : ");
// }
// document.write(peticion + "<br>");
// for (let i = 0; i < peticion.length; i++) {
//   if (peticion.charAt(i) == "a" || peticion.charAt(i) == "A") {
//     document.write("tiene la vocal a <br>");
//     cantidadVocales.push(1);
//   } else if (peticion.charAt(i) == "e" || peticion.charAt(i) == "E") {
//     document.write("tiene la vocal e <br>");
//     cantidadVocales.push(1);
//   } else if (peticion.charAt(i) == "i" || peticion.charAt(i) == "I") {
//     document.write("tiene la vocal i <br>");
//     cantidadVocales.push(1);
//   } else if (peticion.charAt(i) == "o" || peticion.charAt(i) == "O") {
//     document.write("tiene la vocal o <br>");
//     cantidadVocales.push(1);
//   } else if (peticion.charAt(i) == "u" || peticion.charAt(i) == "U") {
//     document.write("tiene la vocal u <br>");
//     cantidadVocales.push(1);
//   } else {
//   }
// }
// for (let i = 0; i < cantidadVocales.length; i++) {
//   sumaVocales = sumaVocales + cantidadVocales[i];
// }
// document.write(`La suma total de sus vocales es : ${sumaVocales}`);
//--------------------------------------------------------------------

// 16- Realiza un script que pida una cadena de texto y la devuelva al revés.
// Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

// let peticionAlUsuario = [prompt("Ingrese un texto : ")]
// // let mensajeSeparadoLetra = peticionAlUsuario.split("")
// // let letrasReves = mensajeSeparadoLetra.reverse()
// // let MensajeUnidoReves = letrasReves.join("")
// console.log(peticionAlReves);
//--------------------------------------------------------------------

// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

// let peticionAlUsuario = prompt("Ingrese un texto :");
// let vocales = ["a", "e", "i", "o", "u"];
// let peticionMinuscula = peticionAlUsuario.toLowerCase();
// let posicion = 0;
// let parar = false;
// document.write(peticionAlUsuario + "<br>");
// for (let i = 0; i < peticionMinuscula.length; i++) {
//   for (let v = 0; v < vocales.length; v++) {
//     if (vocales[v] == peticionMinuscula.charAt(i)) {
//       posicion = i;
//       parar = true;
//       break;
//     }
//   }
//   if (parar) {
//     break;
//   }
// }
// document.write(`la primera vocal esta en la posicion ${posicion}`);

// for (let i = 0; i < peticionAlUsuario.length; i++) {
//   if (
//     peticionAlUsuario.charAt(i) == "a" ||
//     peticionAlUsuario.charAt(i) == "A" ||
//     peticionAlUsuario.charAt(i) == "e" ||
//     peticionAlUsuario.charAt(i) == "E" ||
//     peticionAlUsuario.charAt(i) == "i" ||
//     peticionAlUsuario.charAt(i) == "I" ||
//     peticionAlUsuario.charAt(i) == "o" ||
//     peticionAlUsuario.charAt(i) == "O" ||
//     peticionAlUsuario.charAt(i) == "u" ||
//     peticionAlUsuario.charAt(i) == "U"
//   ) {
//     document.write(
//       `la vocal ${peticionAlUsuario.charAt(i)} se encuentra en la posicion ${i}`
//     );
//   } else {
//   }

// }
