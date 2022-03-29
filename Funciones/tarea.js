/*Tarea de la hoja de ejercicios del campus de funciones

1. Crear un array llamado meses y que almacene los nombres de los doce meses del año, 
    Mostrar por pantalla en forma de lista los doce nombres del arreglo.
*/

let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const conteoMeses = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    document.write(`${arr[i]} <br>`);
  }
};
conteoMeses(meses);

// for (let i = 0; i < meses.length; i++) {
//   document.write(meses[i]);
// }
