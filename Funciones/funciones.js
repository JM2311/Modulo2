//FUNCION DECLARATIVA

// function saludarAlumno(){

// }

// function saludarAlumno() {
//   let saludo = "Hola Comision";
//   return saludo;
//   console.log("esto ya no se ejecuta porq en return termina todo");
// }

//FUNCION ANONIMA

// const saludo = function (){
//     console.log("Hola Comision");
// }
// saludo()

// //CREANDO UNA FUNCION

// let num1 = Number(prompt("Ingrese el primer numero"))
// let num2 = Number(prompt("Ingrese el segundo numero"))

// const sumaNums = function(a,b) {
//     let resultado = a + b
//     return resultado
// }
// let resultadoSuma = sumaNums(num1,num2)
// console.log(resultadoSuma);

//FUNCION FLECHA O ARROW FUNCTION

// const numeros = (a,b) => {
//     let resultado = a + b;
//     console.log(resultado);
// }

// numeros(20,25)

//forma de simplificarlo

// const numeros = (a,b) => console.log(a + b);     UNA SOLA LINEA
// numeros(20,50)

//USAR UNA FUNCION PARA UN ARRAY

// const frutas = ["banana", "manzana", "naranja"]
// const conteoFrutas = (arr) => {
//     console.log(arr.join(" + "));   //ES COMO UN SEPARADOR DE DATOS DEL ARRAY
// }
// conteoFrutas(frutas)

//SCOPE : Es la vida que tiene una variable segun donde este declarada

//SCOPE LOCAL

// const paises = () => {
//   const nombrePaises = ["argentina", "peru", "venezuela"];
//   for (let i = 0; i < nombrePaises.length; i++) {
//     console.log(nombrePaises[i]);
//   }
// };
// paises();

// //SCOPE GLOBAL
// let nombrePaises = ["argentina", "peru", "venezuela"];

// const paises2 = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// };
// nombrePaises = [22, 33, 44];        //ACA demuestro que los arrays nombrePaises pueden convivir juntos
// paises2(nombrePaises);              //sino que el primero esta dentro de una funcion y no afecta a este.
//Incluso a este lo puedo cambiar su valor y al primero no.



