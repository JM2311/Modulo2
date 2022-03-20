//TAREAS
//Lo de Mejorar codiciones anidadas
//Convertir lo de condiciones anidadas a switch
//Hacer las tareas del campus

//PRIMERA TAREA

// let numeroIngresado = Number(prompt("Ingrese un numero : "));
// //Mejorar si no es un numero, no haga nada (no evalue/ no entre al if)
// console.log(numeroIngresado);
// if (isNaN(numeroIngresado)) {
// } else if (numeroIngresado < 18) {
//   console.log("El numero es menor a 18");
// } else if (numeroIngresado === 18) {
//   console.log("El numero es igual a 18");
// } else {
//   console.log("El numero es mayor a 18");
// }
//Otra solucion

// if (numeroIngresado < 18) {
//   console.log("El numero es menor a 18");
// } else if (numeroIngresado === 18) {
//   console.log("El numero es igual a 18");
// } else if (isNaN(numeroIngresado)) {
// } else {
//   console.log("El numero es mayor a 18");
// }

// //SEGUNDA TAREA
// let numeroIngresado = Number(prompt("Ingrese un numero : "));
// if (numeroIngresado == "") {
//   alert("No has introducido ningun numero");
// }
// switch (numeroIngresado) {
//   case 1:
//     console.log("Numero menor a 10");
//     break;
//   case 2:
//     console.log("Numero menor a 10");
//     break;
//   case 3:
//     console.log("Numero menor a 10");
//     break;
//   case 4:
//     console.log("Numero menor a 10");
//     break;
//   case 5:
//     console.log("Numero menor a 10");
//     break;
//   case 6:
//     console.log("Numero menor a 10");
//     break;
//   case 7:
//     console.log("Numero menor a 10");
//     break;
//   case 8:
//     console.log("Numero menor a 10");
//     break;
//   case 9:
//     console.log("Numero menor a 10");
//     break;
//   case 10:
//     console.log("Perfecto llegaste a 10");
//     break;
//   default:
//     console.log("No esta entre las opciones o no es un numero");
//     break;
// }

// //TERCERA TAREA (Hacer tareas del campus)
// 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
// Solucion
// alert("hola")
//-------------------------------------------------------
// 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
// Solucion
//  document.write("Hello World")
//-------------------------------------------------------
//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
// document.write("3 + 5 = 8");
//-------------------------------------------------------
//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
// let nombreUsuario = prompt("Ingrese su Nombre");
// document.write(`Hola ${nombreUsuario}`);
//-------------------------------------------------------
//5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// let numero1 = parseInt(prompt("Ingrese el primer numero"));
// let numero2 = parseInt(prompt("Ingrese el segundo numero"));
// document.write("El resultado de la suma es : " + (numero1 + numero2));
//-------------------------------------------------------
// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// let numero1 = parseInt(prompt("Ingrese el primer numero"));
// let numero2 = parseInt(prompt("Ingrese el segundo numero"));
// if (numero1 > numero2) {
//   console.log(`El Numero ${numero1} es mayor a ${numero2}`);
// } else if (numero2 > numero1) {
//   console.log(`El Numero ${numero2} es mayor a ${numero1}`);
// } else {
// }
//-------------------------------------------------------
// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// let numero1 = parseInt(prompt("Ingrese el primer numero"));
// let numero2 = parseInt(prompt("Ingrese el segundo numero"));
// let numero3 = parseInt(prompt("Ingrese el tercer numero"));
// if (numero1 > numero2 && numero1 > numero3) {
//   document.write(`El Numero ${numero1} es mayor que ${numero2} y ${numero3}`);
// } else if (numero2 > numero1 && numero2 > numero3) {
//   document.write(`El Numero ${numero2} es mayor que ${numero1} y ${numero3}`);
// } else if (numero3 > numero1 && numero3 > numero2) {
//   document.write(`El Numero ${numero3} es mayor que ${numero1} y ${numero2}`);
// } else {
// }
//-------------------------------------------------------
// 8.- Escribe un programa que pida un número y diga si es divisible por 2
// let numeroIngresado = parseInt(prompt("Ingrese un numero"));
// if (numeroIngresado % 2 === 0) {
//   alert(`${numeroIngresado} es divisible por 2`);
// } else {
//   alert(`${numeroIngresado} no es divisible por 2`);
// }
//-------------------------------------------------------
// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// let fraseIngresada = prompt("Ingrese una frase : ");
// console.log(fraseIngresada);
// for (i = 0; i < fraseIngresada.length; i++) {
//   if (fraseIngresada.charAt(i) == "a" || fraseIngresada.charAt(i) == "A") {
//     console.log("Tiene la vocal A");
//   } else if (
//     fraseIngresada.charAt(i) == "e" ||
//     fraseIngresada.charAt(i) == "E"
//   ) {
//     console.log("Tiene la vocal E");
//   } else if (
//     fraseIngresada.charAt(i) == "i" ||
//     fraseIngresada.charAt(i) == "I"
//   ) {
//     console.log("Tiene la vocal I");
//   } else if (
//     fraseIngresada.charAt(i) == "o" ||
//     fraseIngresada.charAt(i) == "O"
//   ) {
//     console.log("Tiene la vocal O");
//   } else if (
//     fraseIngresada.charAt(i) == "u" ||
//     fraseIngresada.charAt(i) == "U"
//   ) {
//     console.log("Tiene la vocal U");
//   } else {
//   }
// }
//-------------------------------------------------------
// // 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
// let numeroIngresado = Number(prompt("Ingrese un numero : ", 0));
// if (numeroIngresado % 2 === 0) {
//   console.log(`${numeroIngresado} es divisible por 2`);
// } else if (numeroIngresado % 3 === 0) {
//   console.log(`${numeroIngresado} es divisible por 3`);
// } else if (numeroIngresado % 5 === 0) {
//   console.log(`${numeroIngresado} es divisible por 5`);
// } else if (numeroIngresado % 7 === 0) {
//   console.log(`${numeroIngresado} es divisible por 7`);
// } else {
//   console.log("nada");
// }

//----------------------------------------------------------------------------------------

//SEGUNDA PARTE DE TAREAS (BUCLES)
// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

// let edadIngresada = Number(prompt("Por favor Indique su edad : ", 0));

// if (edadIngresada >= 18) {
//   console.log("Usted ya puede conducir");
// } else {
//   console.log("Usted todabia no puede conducir");
// }

//-------------------------------------------------------

// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
let notaIngresada = Number(
    prompt("Ingrese una nota \nen el rango de 0 a 10 : ")
  );
  if (isNaN(notaIngresada)) {
    alert("Introduce un número válido");
  } else if (notaIngresada > 10) {
    alert("Número erróneo");
  }
  switch (notaIngresada) {
    case 0:
      alert("Muy deficiente");
      break;
    case 1:
      alert("Muy deficiente");
      break;
  
    case 2:
      alert("Muy deficiente");
      break;
  
    case 3:
      alert("Insuficiente");
      break;
  
    case 4:
      alert("Insuficiente");
      break;
  
    case 5:
      alert("Suficiente");
      break;
  
    case 6:
      alert("Suficiente");
      break;
  
    case 7:
      alert("Bien");
      break;
  
    case 8:
      alert("Notable");
      break;
  
    case 9:
      alert("Notable");
      break;
  
    case 10:
      alert("Sobresaliente");
      break;
  
    default:
      break;
  }
  