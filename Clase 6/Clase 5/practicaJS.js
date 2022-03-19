//Number

//Redondear para abajo
console.log(Math.floor(45.89)); //45

//Redondear al numero mas cercano
console.log(Math.round(45.5)); //46
// console.log(Math.round(45.47)); //45

//Obtener el maximo numero
console.log(
  "El numero maximo de este grupo es: " + Math.max(20, 10.5, 40, 40.5, 35) //40.5
);
//Obtener el minimo numero
console.log(
  "El numero minimo de este grupo es: " + Math.min(20, 10.5, 40, 40.5, 35) //10.5
);

//Elevar a la potencia

const base = 4;
const exponente = 2;

console.log(
  `El numero base ${base} elevado a la potencia ${exponente} es :` +
    Math.pow(base, exponente) //16
);

//Crear un numero aleatorio
console.log("El numero aleatorio es : " + Math.round(Math.random() * 1000)); // Numero random

//Obtener la raiz cuadrada
console.log(Math.sqrt(36)); // 6

//Obtener un numero con 2 decimales
const numero1 = "37.456778";
console.log(Math.round(numero1 * 100) / 100); // 37.46

//Obtener un numero con 1 decimal con toFixed()
let aux = Math.round(numero1 * 100) / 100;
console.log(aux.toFixed(1)); //37.5

//Otro ejemplo parse.float (devuelve un numero con punto flotante) para no perder el numero con decimales
console.log(Number(parseFloat(numero1).toFixed(3)));
