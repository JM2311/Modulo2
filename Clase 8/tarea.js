/*
-Pedir al usuario dos numeros
-Crear una funcion que reciba 2 numeros (mayor que cero) y me devuelva el mayor
-llamar a esa funcion con los dos numeros ingresados por el usuario




-------------
Detenerminar si el valor devuelto por la funcion es par o impar



-------------

Luego, con el mayor (devuelto por la funcion) y muestre ese numero por consola hasta llegar a 0
*/

let numero1 = Number(prompt("Ingrese el primer numero : ", 0));
let numero2 = Number(prompt("Ingrese el segundo numero : ", 0));

console.log(`Los numeros que ingresaron son : ${numero1} y ${numero2}`);

function numerosRecibidos(valor1, valor2) {
  let numeroMayor = 0;
  if (valor1 == 0 || valor2 == 0) {
    let numero1 = Number(prompt("Ingrese el primer numero : ", 0));
    let numero2 = Number(prompt("Ingrese el segundo numero : ", 0));
  }
  if (valor1 > valor2) {
    numeroMayor = valor1;
    console.log(`el numero mayor es ${valor1}`);
  } else if (valor2 > valor1) {
    numeroMayor = valor2;
    console.log(`el numero mayor es ${valor2}`);
  } else {
    console.log("error");
  }
  return numeroMayor;
}
let numeroMayorDevuelto = numerosRecibidos(numero1, numero2);

if (numeroMayorDevuelto % 2 == 0) {
  console.log(`Es par`);
} else {
  console.log("Es impar");
}

while (numeroMayorDevuelto > 0) {
  numeroMayorDevuelto--;
  console.log(numeroMayorDevuelto);
}
