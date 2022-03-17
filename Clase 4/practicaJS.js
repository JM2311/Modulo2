// VARIABLE
//Espacio de memoria donde se guarda un dato

//Declaracion
let nombre = "valor";
const nombreConst = "valor";

const pi = 3.14;

//TIPOS DE DATOS

//String
let nombreStr = "este es un string";

//Number
let numero = 22;

//Booleano --> true o false
let llueve = true;

//Nulo
let nulo = null;

//Arreglo
let arreglo = ["valor1", 22, true, {}];

//Objetos--> Clave:Valor

let persona = {
  nombre: "franco",
  edad: 24,
  arreglo: [],
};

//OPERADORES
let suma = 14 + 22;
let resta = 22 - 33;
let multiplicacion = 3 * 4;
let division = 10 / 2;
let resto = 10 % 4;
console.log("Resultado de la suma es : " + suma);

//OPERADORES UNITARIOS
//++
//--
let num1 = 1;
num1++;
console.log("Resultado de la suma++ es : " + num1);
let num2 = 2;
num2--;
console.log("Resultado de la resta-- es : " + num2);

//OPERADORES RELACIONALES --> devuelve true o false

let primerNumero = 10;
let segundoNumero = 15;
let tercerNumero = 20;
let cuartoNumero = 25;

console.log(primerNumero == segundoNumero); //false
console.log(primerNumero === segundoNumero); //false
console.log(primerNumero < segundoNumero); //true
console.log(primerNumero != segundoNumero); //true
console.log(cuartoNumero > tercerNumero); //true
console.log(tercerNumero !== cuartoNumero); //true

//Negacion
let verdadero = true;
let falso = false;
console.log("Negacion verdadero :");
console.log(!verdadero); //lo convierte en false
console.log("Negacion falso :");
console.log(!falso); //lo convierte en verdadero

//TAREA

//Creamos 3 variables : numero1 , numero2, resultado
//Mostramos por consola, los resultado de las operaciones
//Sumamos 2 numeros
//Restamos 2 numeros
//Multiplicamos 2 numeros
//Dividimos 2 numeros
//Comparamos si el numero 1 es mayor o igual que el numero 2
//Comparamos si numero 1 es distinto de numero 2
//Intentar usar prompt

// let edad = prompt("Ingrese su edad ")
// alert("Su edad es : " +edad)

let numero1 = Number(prompt("Ingrese el primer numero : ", 0));
let numero2 = Number(prompt("Ingrese el segundo numero : ", 0));
var resultado =
  "la suma es : " +
  (numero1 + numero2) +
  "\n" +
  "la resta es : " +
  (numero1 - numero2) +
  "\n" +
  "la multiplicacion es : " +
  numero1 * numero2 +
  "\n" +
  "la division es : " +
  numero1 / numero2 +
  "\n";
alert(resultado);

console.log("Resultado de la suma de num1 y num2 es : " + (numero1 + numero2));
console.log("Resultado de la resta de num1 y num2 es : " + (numero1 - numero2));
console.log(
  "Resultado de la multiplicacion de num1 y num2 es : " + numero1 * numero2
);
console.log(
  "Resultado de la division de num1 y num2 es : " + numero1 / numero2
);
console.log(
  "¿El numero1 es mayor o igual que numero2 ? " + (numero1 >= numero2)
);
console.log("¿El numero1 es distinto al numero2? " + (numero1 != numero2));
