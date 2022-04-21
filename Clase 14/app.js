// Funcion constructura con un metodo

// function Personas(name, lastName, age) {
//   this.nombre = name;
//   this.apellido = lastName;
//   this.edad = age;
//   this.comer = (x = "pollito al spiedo") => {
//     alert(`${this.nombre} esta comiendo un ${x}`);
//   };
// }
// const persona1 = new Personas("Juan", "Morales", 25);
// console.log(persona1);

// -------------------------------------------------------

// Constructor Object()
// const persona2 = new Object(); //Crea un objeto vacio

// persona2.nombre = "Juan"; //y aca yo le puedo dar sus parametros solo a persona2
// persona2.apellido = "Morales";
// persona2.correr = () => {
//   alert(`${persona2.nombre} esta corriendo`);
// };
// console.log(persona2);
// persona2.correr();

// -------------------------------------------------------

// Object Create

// let auto = {
//   color: "rojo",
//   marca: "audi",
//   puertas: 4,
// };

// const auto2 = Object.create(auto);
// console.log(auto2);

// -------------------------------------------------------

//Comparando objetos

// Cualquier comparacion de objetos o referencias aunque tengan las mismas propiedades,
// dara false porq compara las referencias y no las propiedades.
// la unica forma que salga true, es q al otro objeto le asignen el otro objeto.

// persona1 = {
//   nombre: "Juan",
// };

// persona2 = {
//   nombre: "Juan",
// };

// persona3 = persona1;

// if (persona1 == persona2) {
//   alert("es true");
// } else {
//   alert("es false");
// }

// if (persona1 == persona3) {
//   alert("es true");
// } else {
//   alert("es false");
// }

// -------------------------------------------------------

// Clases en objetos

// class Pokemon {
//   constructor(name, tipo, color, evolucion) {
//     this.nombre = name;
//     this.tipo = tipo;
//     this.color = color;
//     this.evolucion = evolucion;
//   }
//   ataque() {
//     alert(`${this.nombre} atacando`);
//   }
//   defensa() {
//     alert(`${this.nombre} defendiendo`);
//   }
// }
// const pikachu = new Pokemon(
//   "Pikachu",
//   "Electricidad",
//   "amarillo y negro",
//   "Raichu"
// );
// console.log(pikachu);
// pikachu.ataque()

// -------------------------------------------------------

// Setter y Getter (Metodos especiales para obtener y establecer valores de propiedades)

// class Rectangle {
//   constructor(height = 0, width = 0) {
//     this.height = height;
//     this.width = width;
//   }
//   set changeHeight(x) {
//     this.height = x;
//   }
//   set changeWidth(x) {
//     this.width = x;
//   }
//   get area() {
//     return this.height * this.width;
//   }
// }
// const rectangulo = new Rectangle(10, 30);
// console.log(rectangulo.area);
