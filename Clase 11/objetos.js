const fruta = {
  tipo: "",
  nombre: "frutilla",
  color: "rojo",
  vitamina: "C",
  precio: 50,
};
color: "rojo";
nombre: "frutilla";
precio: 50;
tipo: "";
vitamina: "C";

//Como lo recorro con forEach
const arreglo = ["color", "nombre", "precio", "tipo", "vitamina"];

arreglo.forEach((key) => {
  console.log(`${key}: ${fruta[key]}`);
});

//como edito y reemplazo valores al objeto
fruta.nombre = "pera";
