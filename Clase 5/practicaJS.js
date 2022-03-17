//Hola mi nombre es juan, un gusto.
// let saludo = "Hola ";
// let presentacion = saludo + "mi nombre es juan";
// presentacion = presentacion + ", un gusto."
// console.log(presentacion);

//SABER EL TAMAÑO DE LA VARIABLE
let presentacion = "Hola mi nombre es Juan, un gusto.";
console.log(presentacion.length);

//CONVERTIR EN MAYUSCULA
console.log(presentacion.toUpperCase());

//convertir en minuscula
console.log(presentacion.toLowerCase());

//TEMPLATE STRING

let nombre = "Juan";
let apellido = "Morales";
console.log(`${nombre} ${apellido}`);

let nombreProd = "Coca Cola";
let precioProd = 50;
let unidadesDispo = 1;
console.log(`${nombreProd} $${precioProd}, Disponible: ${unidadesDispo} `);

//Obtener ultimo caracter de un string
let apellidoGrande = "Morales Paredes";
console.log(apellidoGrande);

let ultimaPosicionrApellido = apellidoGrande.length - 1; // 14
let ultimoCaracterApellido = apellidoGrande.charAt(14);
console.log(`La ultima letra del apellido es : ${ultimoCaracterApellido}`);

//Ejemplo
//Que el usuario ingrese por pantalla su apellido
//Siempre la primera letra del apellido tiene que ser mayuscula
//Mostrar un alert con el apellido transformado

let apellidoIngresado = prompt("Ingresa tu apellido: ");
let primeraLetra = apellidoIngresado.charAt(0);
let letraMayuscula = primeraLetra.toUpperCase();
let apellidoSinPrimeraLetra = apellidoIngresado.substring(1)
const apellidoTransformado = `El apellido bien escrito es : ${letraMayuscula}${apellidoSinPrimeraLetra}`
alert(apellidoTransformado)



