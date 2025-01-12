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
