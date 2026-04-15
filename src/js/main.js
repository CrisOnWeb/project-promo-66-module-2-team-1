'use strict';

//FORM
//DESIGN
const selected = document.querySelector('.js_selectedDesign');
const optionsBox = document.querySelector('.js_optionsDesign');
const options = document.querySelectorAll('.js_option');
const defaultOption = document.querySelector('.js_designDefault')
const hiddenInput = document.querySelector('.js_hiddenDesign');

if (defaultOption) {
  selected.innerHTML = defaultOption.innerHTML;
  hiddenInput.value = defaultOption.dataset.value;
}
//Abrir/cerrar
selected.addEventListener("click", () => {
  optionsBox.style.display =
    optionsBox.style.display === "block" ? "none" : "block";
});

//Seleccionar opción
options.forEach(option => {
  option.addEventListener("click", () => {
    selected.innerHTML = option.innerHTML;
    hiddenInput.value = option.dataset.value; //guardala en una variable
    optionsBox.style.display = "none";
  });
});

// Cerrar si haces click fuera
document.addEventListener("click", (e) => {
  if (!e.target.closest(".js_customSelect")) {
    optionsBox.style.display = "none";
    }
})