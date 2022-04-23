// class Rectangle {
//   constructor(alto = 0, ancho = 0) {
//     this.alto = alto;
//     this.ancho = ancho;
//   }
//   set changeAlto(x) {
//     this.alto = x;
//   }
//   set changeAncho(y) {
//     this.ancho = y;
//   }
//   get area() {
//     return this.alto * this.ancho;
//   }
// }
// const rectangulo1 = new Rectangle(10, 30);
// rectangulo1.changeAlto = 20;
// rectangulo1.changeAncho = 60;
// console.log(rectangulo1);
// console.log(rectangulo1.area);

// --------------------------------------------------------------
// DOM Y BOM

// BOM

// console.log(window.location);

// if ((window.location.protocol == "http")) {
//   alert("Estas en una pagina no segura");
//   window.location.href = "https://www.google.com.ar";
// } else {
//   alert("Estas en una pagina segura");
// }

// const statusCode = 400;

// if (statusCode == 200) {
//   alert("Esta todo ok");
// } else {
//   alert("La pagina que buscas esta en mantenimiento");
//   window.location.href = "https://www.google.com.ar";
// }

// console.log(window.history);
// console.log(window.screen);  (MUESTRA VALORES DE LA PANTALLA)

// EVENTOS DE TIEMPO

// Set interval
// const bucle = setInterval(() => {
//   console.log("Hola mundo");
// }, 1000);
// // Clear interval
// const detenerBucle = () => {
//   clearInterval(bucle);
//   alert("el bucle fue detenido");
// };
// //SetTimeOut
// setTimeout(() => {
//   alert("Ya pasaron 5 segundos");
// }, 5000);

// DOM

const elemento = document.getElementById("hello");
const elemento2 = document.getElementsByClassName("hello2");
const elemento3 = document.getElementsByTagName("h1");

// console.log(elemento);
// console.log(elemento2);
// console.log(elemento3);

// // Primer Paso (Crear Elemento)
// const elementoNuevo = document.createElement("h3");
// // Segundo Paso (Agregarle contenido al elemento)
// elementoNuevo.innerHTML = "Hola soy un h3";
// // Tercer Paso (Agregarle el contenido nuevo al documento)
// document.body.appendChild(elementoNuevo);
// console.log(elementoNuevo);

// OTRA FORMA COMO LA DE ARRIBA PERO MAS DINAMICA
// let imgSrc = prompt("Ingrese un link");
// let title = prompt("Ingrese un titulo");
// let parr = prompt("Ingrese una descripcion");

// const cardNueva = document.createElement("div");

// cardNueva.innerHTML = `<div class="card" style="width: 18rem;">
// <img src=${imgSrc} class="card-img-top" alt="...">
// <div class="card-body">
//   <h5 class="card-title">${title}</h5>
//   <p class="card-text">${parr}</p>
//   <a href="#" class="btn btn-primary">Go somewhere</a>
// </div>
// </div>`;

// document.body.appendChild(cardNueva);
