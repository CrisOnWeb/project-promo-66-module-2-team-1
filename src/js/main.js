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
for(const option of options){
  option.addEventListener("click", () => {
    const value = option.dataset.value;
    hiddenInput.value = value; //guardala en una variable
    optionsBox.style.display = "none";
    renderDesign(value);
    //console.log(option)
})}

// Cerrar si haces click fuera
document.addEventListener("click", (ev) => {
  if (!ev.target.closest(".js_customSelect")) {
    optionsBox.style.display = "none";
    }
})
//console.log(options)

//render
function renderDesign(value){
  selected.innerHTML = '';
  const option = document.querySelector(`[data-value="${value}"]`);
  const theme = option.dataset.value;
  if(!option) return;
  const prueba = document.querySelector('.prueba');
  prueba.className='prueba';
  prueba.classList.add(theme);
  prueba.innerHTML = `
    <h3>Holi</h3>
    <p>holi holi</p>
    `;
  console.log(value) 
  console.log(option)// está guardando el valor, falta la preview
}