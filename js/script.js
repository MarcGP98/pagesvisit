const contadorVisitasSpan = document.getElementById("contadorVisitas");
const btnReestablecer = document.getElementById("btnReestablecer");

const STORAGE_KEY = "contadorVisitas";

const visitas = localStorage.getItem(STORAGE_KEY);

if (visitas === null) {
  visitas = 0;
} else {
  visitas = Number(visitas);
}

visitas++;

localStorage.setItem(STORAGE_KEY, visitas);

contadorVisitasSpan.textContent = visitas;

btnReestablecer.addEventListener("click", () => {
  localStorage.setItem(STORAGE_KEY, 0);
  contadorVisitasSpan.textContent = 0;
});
