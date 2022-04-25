// Ejercios POO

// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca,
// modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y
// apagar el auto.

// const auto = {
//   color: "negro",
//   marca: "Kia",
//   modelo: 2019,
//   encender: () => {
//     alert("El auto  esta encendido");
//   },
//   apagar: () => {
//     alert("El auto esta apagado");
//   },
// };
// console.log(auto);

// ///////////////////////////////////////////////////////////////////////////////////////////

/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, 
ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/

// class Cuenta {
//   constructor(titular, saldo = 0) {
//     this.titular = titular;
//     this.saldo = saldo;
//   }
//   ingresar(x) {
//     x = Number(prompt("Cuanto desea añadir?"));
//     return (this.saldo = x);
//   }
//   extraer(y) {
//     alert("el dinero fue extraido");
//     y = this.saldo;
//     return (this.saldo = this.saldo - y);
//   }
//   informar() {
//     console.log(`El estado de cuenta de ${this.titular} es ${this.saldo}`);
//   }
// }
// let cuenta = new Cuenta("Alex");

// OTRA FORMA DE HACERLO CON SET Y GET (Creo que no es asi porque set establece valores a las propiedades,
// y get obtiene)   (Pero lo dejo en caso lo use)

// class Cuenta {
//   constructor(titular, saldo = 0) {
//     this.titular = titular;
//     this.saldo = saldo;
//   }
//   set ingresarDinero(x) {
//     return (this.saldo = x);
//   }
//   set extraerDinero(y) {
//     return (this.saldo = this.saldo - y);
//   }
//   get informarCuenta() {
//     console.log(`Sr. ${this.titular} su estado de cuenta es : ${this.saldo}`);
//   }
// }

// let cuenta = new Cuenta("Alex");

// ///////////////////////////////////////////////////////////////////////////////////////////

/* 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto 
y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro 
y el área */

// class Rectangulo {
//   constructor(height = 0, width = 0) {
//     this.alto = height;
//     this.ancho = width;
//   }
//   set modificarAltura(x) {
//     this.alto = x;
//   }
//   set modificarAncho(y) {
//     this.ancho = y;
//   }
//   get perimetro() {
//     return this.alto + this.alto + this.ancho + this.ancho;
//   }
//   get area() {
//     return this.alto * this.ancho;
//   }
// }

// const rectangulo1 = new Rectangulo();
// rectangulo1.modificarAltura = 20;
// rectangulo1.modificarAncho = 70;
// console.log(rectangulo1);
// console.log("El perimetro es:  " + rectangulo1.perimetro);
// console.log("El area es :" + rectangulo1.area);

// ///////////////////////////////////////////////////////////////////////////////////////////

/*4- Escribe una clase Producto para crear objetos. 
Estos objetos, deben presentar las propiedades código,nombre y precio, 
además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, 
utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/
// let arrProducts = [];
// class Producto {
//   constructor(codigo, nombre, precio) {
//     this.codigo = codigo;
//     this.nombre = nombre;
//     this.precio = precio;
//   }
//   imprimirDatos() {
//     this.codigo = prompt("Ingrese el codigo del producto :");
//     this.nombre = prompt("Ingrese el nombre del producto :");
//     this.precio = prompt("Ingrese el precio del producto :");
//     console.log(arrProducts);
//   }
// }

// let producto1 = new Producto();
// let producto2 = new Producto();
// let producto3 = new Producto();

// arrProducts.push(producto1, producto2, producto3);

// ///////////////////////////////////////////////////////////////////////////////////////////
/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación 
pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
--------------

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

*/

// class Persona {
//   constructor(nombre, edad, dni, sexo, peso, altura, Nacimiento) {
//     this.Nombre = nombre;
//     this.Edad = parseInt(edad);
//     this.Dni = dni;
//     this.Sexo = sexo;
//     this.Peso = peso;
//     this.Altura = altura;
//     this.Nacimiento = Nacimiento;
//   }
//   mostrarGeneracion() {
//     if (this.Nacimiento >= 1930 && this.Nacimiento <= 1948) {
//       alert(`${this.Nombre} pertenece a la generacion "Silent Generation"\n
//         y su rasgo caracteristico es "La Austeridad"`);
//     } else if (this.Nacimiento >= 1949 && this.Nacimiento <= 1968) {
//       alert(`${this.Nombre} pertenece a la generacion "Baby Boom"\n
//         y su rasgo caracteristico es "La Ambicion"`);
//     } else if (this.Nacimiento >= 1969 && this.Nacimiento <= 1980) {
//       alert(`${this.Nombre} pertenece a la generacion "Generacion X"\n
//         y su rasgo caracteristico es "Obsesion por el exito"`);
//     } else if (this.Nacimiento >= 1981 && this.Nacimiento <= 1993) {
//       alert(`${this.Nombre} pertenece a la generacion "Generacion Y millennials"\n
//         y su rasgo caracteristico es "Frustracion"`);
//     } else if (this.Nacimiento >= 1994 && this.Nacimiento <= 2010) {
//       alert(`${this.Nombre} pertenece a la generacion "Generacion Z"
//       \n y su rasgo caracteristico es "Irreverencia"`);
//     }
//   }
//   esMayorDeEdad() {
//     if (this.Edad >= 18) {
//       alert(`${this.Nombre} es mayor de edad`);
//     } else {
//       alert(`${this.Nombre} es menor de edad`);
//     }
//   }
//   mostrarDatos() {
//     alert(`Datos de la persona:\n
//     Nombre : ${this.Nombre}\n
//     DNI : ${this.Dni}\n
//     Sexo : ${this.Sexo}\n
//     Peso : ${this.Peso}\n
//     Altura : ${this.Altura}\n
//     Año de Nacimiento : ${this.Nacimiento}`);
//   }
//   generaDNI() {
//     alert(`Su DNI es : ` + Math.round(Math.random() * 100000000));
//   }
// }

// let persona1 = new Persona("Juan", 25, 40010843, "Masculino", 90, 1.64, 1996);
// console.log(persona1);

// ///////////////////////////////////////////////////////////////////////////////////////////

/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. 
Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/
// class Libro {
//   constructor(ISBN, Titulo, Autor, numPaginas) {
//     this.ISBN = ISBN;
//     this.Titulo = Titulo;
//     this.Autor = Autor;
//     this.numPaginas = numPaginas;
//   }
//   set changedISBN(x) {
//     this.ISBN = x;
//   }
//   set changedTitulo(y) {
//     this.Titulo = y;
//   }
//   set changedAutor(o) {
//     this.Autor = o;
//   }
//   set changedNumPaginas(z) {
//     this.numPaginas = z;
//   }
//   mostrarLibro() {
//     alert(
//       `El libro ${this.Titulo} con ISBN ${this.ISBN} creado por el autor ${this.Autor} tiene ${this.numPaginas} paginas `
//     );
//   }
// }

// let libro1 = new Libro();
// libro1.changedISBN = Math.round(Math.random() * 10000000000);
// libro1.changedTitulo = "Coquito";
// libro1.changedAutor = "Garcia Marquez";
// libro1.changedNumPaginas = Math.round(Math.random() * 100);
// console.log(libro1);
// let libro2 = new Libro();
// libro2.changedISBN = Math.round(Math.random() * 10000000000);
// libro2.changedTitulo = "Robo en Buenos Aires";
// libro2.changedAutor = "Angel Pires";
// libro2.changedNumPaginas = Math.round(Math.random() * 100);
// console.log(libro2);
// if (libro1.numPaginas > libro2.numPaginas) {
//   alert(`libro1 con ${libro1.numPaginas} tiene mas paginas que libro2`);
// } else {
//   alert(`libro2 con ${libro2.numPaginas} tiene mas paginas que libro1`);
// }

// ///////////////////////////////////////////////////////////////////////////////////////////
/*
7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. 
Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. 
Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

añadirContacto(Contacto): Añade un contacto a la agenda, 
si la agenda no puede almacenar mas contactos indicar por pantalla.

existeContacto(Conctacto): indica si el contacto pasado existe o no.

listarContactos(): Lista toda la agenda

buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.

eliminarContacto(Contacto c): elimina el contacto de la agenda, 
indica si se ha eliminado o no por pantalla

agendaLlena(): indica si la agenda está llena.

huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones por consola para probar todas estas funcionalidades.

*/
// class Contacto {
//   constructor(name, phone) {
//     this.nombre = name;
//     this.telefono = phone;
//   }
// }
// class Agenda {
//   constructor(maxContactos = 10) {
//     this.maxContactos = maxContactos;
//     this.listaDeContactos = new Array();
//   }
//   añadirContacto(nombre, telefono) {
//     if (this.listaDeContactos.length < this.maxContactos) {
//       this.listaDeContactos.push(new Contacto(nombre, telefono));
//     } else {
//       this.agendaLlena();
//     }
//   }
//   existeContacto(nombreABuscar) {
//     const existe = this.listaDeContactos.find((objeto) => {
//       return objeto.nombre == nombreABuscar;
//     });
//     if (existe == undefined) {
//       console.log(`${nombreABuscar} no existe en la agenda`);
//     } else {
//       console.log(`${nombreABuscar} si existe en la agenda`);
//     }
//   }
//   listarContactos() {
//     console.log("######CONTACTOS######");
//     this.listaDeContactos.map((contacto) => {
//       console.group(`Nombre : ${contacto.nombre}`);
//       console.log(`Telefono : ${contacto.telefono}`);
//       console.groupEnd();
//     });
//   }
//   buscarContacto(contactoABuscar) {
//     const encontrado = this.listaDeContactos.find((objeto) => {
//       return objeto.nombre == contactoABuscar;
//     });
//     if (encontrado == undefined) {
//       console.log(`${contactoABuscar} no esta en la agenda`);
//     } else {
//       console.log(`El numero de ${contactoABuscar} es ${encontrado.telefono}`);
//     }
//   }
//   eliminarContacto(contacto) {
//     contacto = prompt("Cual contacto desea eliminar? :");
//     let i = 0;
//     const existe = this.listaDeContactos.find((objeto) => {
//       i++;
//       console.log(i);
//       return contacto == objeto.nombre;
//     });
//     if (existe == undefined) {
//       console.log(`${contacto} no se puede eliminar porque no existe`);
//     } else {
//       this.listaDeContactos.splice(i - 1, 1);
//       console.log(`${contacto} se elimino de la agenda`);
//     }
//   }
//   agendaLlena() {
//     console.log("La agenda esta llena");
//     alert("La agenda esta llena");
//   }
//   huecosLibres() {
//     let espacioLibre = this.maxContactos - this.listaDeContactos.length;
//     if (espacioLibre > 0) {
//       console.log(`Podes agregar ${espacioLibre} contactos mas`);
//     }
//   }
// }

// let agendaNueva = new Agenda();
