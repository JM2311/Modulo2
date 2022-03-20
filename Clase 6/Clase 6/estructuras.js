//IF

/*
if(condicion){
    ALGO QUE QUIERO QUE SE EJECUTE SI LA CONDICION ES TRUE (Verdadero/se cumple)
}
*/

let numero = 20;
if (numero > 10) {
  console.log("El numero es mayor a 10"); //se cumple porque 20 es mayor a 10
}

// let palabraBuscada = prompt("Ingrese una marca : ");
// let marcaIngresada = "pepsi";
// if (palabraBuscada == marcaIngresada) {
//   console.log("La marca ingresada es pepsi");
// } else {
//   console.log("La marca ingresada no es pepsi");
// }

//ELSE
let numeroRandom = 30;
if (numeroRandom > 100) {
  console.log("El numero es mayor a 100");
} else {
  //Si no se cumple la condicion, ejecuta este codigo
  console.log("El numero es menor a 100");
}

// //Condiciones Anidadas

// let numeroIngresado = Number(prompt("Ingrese un numero : ")); //Le coloco Number porque el prompt me devuelve un string y para que sea estrictamente igual tiene que ser un numero
// //Mejorar si no es un numero, no haga nada (no evalue/ no entre al if)
//   if (numeroIngresado < 18) {
//     console.log("El numero es menor a 18");
//   } else if (numeroIngresado === 18) {
//     console.log("El numero es igual a 18");
//   } else {
//     console.log("El numero es mayor a 18");
//   }

//Switch

switch (palabraBuscada) {
  case "coca":
    console.log("La palabra buscada es coca");
    break;

  case "pepsi":
    console.log("la palabra buscada es pepsi");
    break;
  default:
    console.log("La palabra buscada no esta entre las opciones");
    break;
};

