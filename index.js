precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

// ACTIVIDAD DE CLICKS
const cantidad = document.querySelector(".cantidad");
const sumar = document.querySelector(".sumar");
const restar = document.querySelector(".restar");
let valorTotal = document.querySelector(".valor-total");

sumar.addEventListener("click", () => {
  let numero = Number(cantidad.innerHTML);
  numero = numero + 1;
  cantidad.innerHTML = numero;
  valorTotal.innerHTML = numero * precio;
  console.log(valorTotal);
});

restar.addEventListener("click", () => {
  let numero = Number(cantidad.innerHTML);
  numero = numero - 1;
  cantidad.innerHTML = numero;
  valorTotal.innerHTML = numero * precio;
  console.log(valorTotal);
});
// NOTA PARA EL PROFE DIEGO:
// Le envíe un mensaje por el slack pero me pareció pertinente dejar una nota aquí.
// La profe Alba nos mencionó que esta actividad la podríamos realizar de manera individual, sólo que le avisaramos por mensaje.
