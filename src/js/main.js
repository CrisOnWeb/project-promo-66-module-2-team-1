"use strict";
/*SECCIÓN DE QUERY SELECTORS*/

/*CQS FORM*/
const fillForm = document.querySelector(".js_fillForm");
const fillInputs = document.querySelectorAll(".js_fillInput");
const fillSubmitBtn = document.querySelector(".js_fillSubmitBtn");
const resetButton = document.querySelector(".js_resetButton");

//Inputs concretos del formulario
const nameInput = document.querySelector("#name");
const descriptionInput = document.querySelector("#description");
const ageInput = document.querySelector("#age");
const breedInput = document.querySelector("#breed");
const weightInput = document.querySelector("#weight");
const instagramInput = document.querySelector("#instagram");

/*CQS DESIGN*/
const selected = document.querySelector(".js_selectedDesign");
const optionsBox = document.querySelector(".js_optionsDesign");
const options = document.querySelectorAll(".js_option");
const defaultOption = document.querySelector(".js_designDefault");
const hiddenInput = document.querySelector(".js_hiddenDesign");

/*CQS PREVIEW*/
const fillPreview = document.querySelectorAll(".js_fillPreview");
const fillPreview2 = document.querySelector('#preview2');

const nameValue = document.querySelector(".js_nameValue");
const ageValue = document.querySelector(".js_ageValue");
const breedValue = document.querySelector(".js_breedValue");
const weightValue = document.querySelector(".js_weightValue");
const descriptionValue = document.querySelector(".js_descriptionValue");
const instagramValue = document.querySelector(".js_instagramValue");
const previewCard = document.querySelector(".js_previewCard");




/*SECCIÓN DE DATOS*/
//Obj que guarda la info que la usuaria escribe en fill
let fillData = {
  name: "",
  description: "",
  age: "",
  breed: "",
  weight: "",
  instagram: "",
};

/*SECCIÓN DE FUNCIONES*/

//Sección Cambiar Diseño
for (const option of options) {
  option.addEventListener("click", () => {
    const value = option.dataset.value;
    hiddenInput.value = value; //guardala en una variable
    renderDesign(value);
  });
}

function renderDesign(value) {
  const option = document.querySelector(`[data-value="${value}"]`);
  const theme = option.id;
  const cardElements = document.querySelectorAll(".preview > div");
  for (const element of cardElements) {
    element.classList.remove("palette0", "palette1", "palette2", "palette3");
    element.classList.add(theme);
  }
}

//Permite al usuario volver a default
const backToDefault = document.querySelector(".preview");
backToDefault.addEventListener("click", () => {
  renderDefault();
});

function renderDefault() {
  const cardElements = document.querySelectorAll(".preview > div");
  for (const element of cardElements) {
    element.classList.remove("palette0", "palette1", "palette2", "palette3");
    element.classList.add("palette0");
  }
}

renderDefault();

// Función para pintar los datos en la preview
function renderPreview(target, data) {
    const nameValueInPreview = fillPreview2.querySelector('.js_nameValue');
    const ageValueInPreview = fillPreview2.querySelector('.js_ageValue');
    const breedValueInPreview = fillPreview2.querySelector('.js_breedValue');
    const weightValueInPreview = fillPreview2.querySelector('.js_weightValue');
    const descriptionValueInPreview = fillPreview2.querySelector('.js_descriptionValue');
    const instagramValueInPreview = fillPreview2.querySelector('.js_instagramValue');
    
    nameValueInPreview.textContent = `${fillData.name.trim()}, ` || "Nombre";
    ageValueInPreview.textContent = fillData.age ? ` ${fillData.age} años` : "Edad";
    breedValueInPreview.innerHTML = `<i class="fa-solid fa-paw"></i> ${fillData.breed.trim() || "Raza"}`;
    weightValueInPreview.innerHTML = `<i class="fa-solid fa-weight-hanging"></i> ${fillData.weight ? `${fillData.weight} kg` : "Peso"}`;
    descriptionValueInPreview.textContent = fillData.description.trim() || "Descripción";
    instagramValueInPreview.textContent = fillData.instagram.trim()
    ? `${fillData.instagram.trim()}` : "";
    //instagramValue2.href = fillData.instagram.trim() || "#";
    // Para poner como enlace el instagram sin espacios por el trim y, sino hay nada, se usa el # que es como un placeholder.
}
// Función para guardar el objeto completo en localStorage
function saveFillDataInLocalStorage() {
  localStorage.setItem("fillData", JSON.stringify(fillData));
}

// Función para recuperar los datos guardados en localStorage
function loadFillDataFromLocalStorage() {
  const savedFillData = localStorage.getItem("fillData");

  if (savedFillData) {
    fillData = JSON.parse(savedFillData);

    // Rellenamos también los inputs para que cuando recarguemos, el formulario conserve los datos.
    // Ej: pon en el input nameInput el valor de fillData.name y sino existe, pon un string vacío.
    nameInput.value = fillData.name || "";
    descriptionInput.value = fillData.description || "";
    ageInput.value = fillData.age || "";
    breedInput.value = fillData.breed || "";
    weightInput.value = fillData.weight || "";
    instagramInput.value = fillData.instagram || "";
  }
}

// Función para actualizar el objeto fillData cuando la usuaria escribe
function handleInputFill(ev) {
  const changedInput = ev.target; //donde ocurre el evento
  const inputName = changedInput.id; //input donde escribe
  const inputValue = changedInput.value; //valor escrito en input

  //el inputValue escrito en inputName es el valor del fillData[propiedad que se llama como el inputName]
  fillData[inputName] = inputValue;
  //fillData[ev.target.id] = ev.target.value
  // Comprobar si el objeto se actualiza correctamente y si el name de los inputs está bien conectado
  console.log("fillData actualizado:", fillData[inputName]);

  saveFillDataInLocalStorage();
  renderPreview(fillPreview2, fillData);
  validateForm();
  toggleResetButton();
}

// Función para decir que el formulario está completo solo si todos los campos tienen algo escrito de verdad
function isFormComplete() {
  const result =
    fillData.name.trim() !== "" &&
    fillData.description.trim() !== "" &&
    fillData.age !== "" &&
    fillData.breed.trim() !== "" &&
    fillData.weight !== "" &&
    fillData.instagram.trim() !== "";

  console.log("¿Formulario completo?", result);

  return result;
}

// Función para comprobar si hay al menos algún dato escrito
function hasAnyData() {
  return (
    fillData.name.trim() !== "" ||
    fillData.description.trim() !== "" ||
    fillData.age !== "" ||
    fillData.breed.trim() !== "" ||
    fillData.weight !== "" ||
    fillData.instagram.trim() !== ""
  );
}

// Función para activar o desactivar el botón de submit (se desactiva el botón si el formulario NO está completo)
function validateForm() {
  fillSubmitBtn.disabled = !isFormComplete();

  console.log("Botón submit activo:", !fillSubmitBtn.disabled);
}

// Función para activar o desactivar el botón de borrar datos (se desactiva el botón si NO hay datos)
function toggleResetButton() {
  resetButton.disabled = !hasAnyData();
}

// Función para resetear el formulario, objeto, localStorage y preview
function handleClickReset() {
  console.log("Click en borrar resultados");
  // Vaciamos el objeto
  fillData = {
    name: "",
    description: "",
    age: "",
    breed: "",
    weight: "",
    instagram: "",
  };

  // Reseteamos visualmente el formulario
  fillForm.reset();

  // Borramos el localStorage
  localStorage.removeItem("fillData");

  // Volvemos a pintar el preview con textos por defecto
  renderPreview();

  // Revalidamos los botones
  validateForm();
  toggleResetButton();

  console.log("Después de reset:", fillData);
}

// Función del submit (evita el envío real y lo deja preparado para el siguiente paso)
function handleSubmitFillForm(ev) {
  ev.preventDefault();
  if (!isFormComplete()) {
    return;
  }
  // Aquí faltaría por meter:
  // guardar en un estado global
  // pasar a la siguiente sección
  // enviar los datos a la API
  // navegar a compartir
  console.log("Datos enviados:", fillData);
}

/*SECCIÓN DE FUNCIONES DE EVENTOS*/
// Escuchamos a todos los inputs del formulario

if (fillForm && fillPreview2) {
  for (const input of fillInputs) {
    input.addEventListener("input", handleInputFill);
  }

  // Botón para borrar los resultados
  resetButton.addEventListener("click", handleClickReset);

  // Submit del form
  fillForm.addEventListener("submit", handleSubmitFillForm);

  /*SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA - EJECUCIÓN*/
  // Recuperar los datos guardados (si es que existen)
  loadFillDataFromLocalStorage();

  // Pintar la preview al entrar en Rellena
  renderPreview();

  // Ajustar el estado inicial de los botones
  validateForm();
  toggleResetButton();
}
