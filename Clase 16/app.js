function cambiarTitulo() {
  document.title = "Comision 30i";
}
function cambiarPagina() {
  window.location.href = "https://www.google.com";
}

// Me retorna el valor del input
// function getEmail(data) {
//   console.log(data.value);
// }

//Me redirige a otra pagina

// function getEmail(data) {
//   if (data.value == "diablex_juan@hotmail.com") {
//     window.location.pathname = "/home.html";
//   } else {
//     alert("no pasas man");
//   }
// }

// EJERCICIO 1 DE DOM Y BOM DEL CAMPUS

function adivinarNumero(numero) {
  const numRamdom = Math.round(Math.random() * 10);
  let numeroImput = numero.value;
  if (numeroImput <= 10 && !isNaN(numeroImput)) {
    if (numeroImput == numRamdom) {
      alert(`ADIVINASTE!!, el numero magico es ${numRamdom}`);
    } else {
      alert(`PERDISTE!!, el numero magico es ${numRamdom}`);
    }
  } else {
    alert(`Solo estan permitidos NUMEROS del 0 al 10`);
  }
}
