// Creando objetos con notacion literal

let auto = {
  color: ["negro", "rojo"],
  modelo: "argo",
  potencia: "120bph",
  marca: "fiat",
  año: 2019,
};

//Agregando propiedades a un objeto
auto.numeroPuertas = 4;
auto.precio = 1500000;
//Modificando propiedades del objeto
auto.modelo = "corsa";
auto.año = 2022;
auto.color[0] = "verde";
//Eliminar propiedades
delete auto.potencia;

// -------------ARRAY DE OBJETOS----------------
// let personas = [
//   {
//     name: "Milton",
//     lastName: "Peña",
//     peso: 75,
//     altura: 1.7,
//   },
//   {
//     name: "Mel",
//     lastName: "Lopez",
//     peso: 65,
//     altura: 1.8,
//   },
//   {
//     name: "Ariel",
//     lastName: "Perez",
//     peso: 45,
//     altura: 1.4,
//   },
//   {
//     name: "Isac",
//     lastName: "Jimenez",
//     peso: 55,
//     altura: 1.5,
//   },
// ];

// Como recorrer un array de objetos

// personas.map((persona) => {
//   console.group(persona.name);
//   console.log(`Apellido : ${persona.lastName}`);
//   console.log(`Peso : ${persona.peso}`);
//   console.log(`Altura : ${persona.altura}`);
//   console.groupEnd();
// });

// FUNCION CONSTRUCTORA

function Persona(name, lastName, age) {
  // Creando propiedades
  this.nombre = name;
  this.apellido = lastName;
  this.edad = age;
  //   Creando metodos
  this.correr = () => {
    //Se puede crear funciones dentro de un objeto
    alert(`${this.nombre} esta corriendo`);
  };
}
// Creamos variables porque asi es la manera ideal de usarlo
let nombreP = "Juancito";
let apellidoP = "Morales";
let edadP = 25;

let juan = new Persona(nombreP, apellidoP, edadP);
console.log(juan);
juan.correr();
