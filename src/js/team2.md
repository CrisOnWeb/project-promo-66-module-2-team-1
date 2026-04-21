Cosas que hablar con las chicas el MARTES 21:

TODO EL GRUPO: 
- No tenemos nombre del proyecto :(
- Los tab-buttons en móvil pequeño se ven feos :(
- ¿Instagram o Threads u otra?
    ¿Debería aparecer en la tarjeta ese enlace?
- ¿El footer no se ve demasiado grande en móvil?
    ¿Tal vez hay que poner menos info o más pequeña?



TEAM2:
- "Elige el diseño" está abajo y "completa info" arriba
    Tienen distintos tamaños y color
    ¿"Datos del perro" y "completa info" o solo 1?
- CREO que habría que añadirle a .previewContainer un width: 100%
    (no sé si es eso porque todavía no funciona bien el resto)
- Hay que probar a escribir a ver cómo quedan los textos dentro de preview
- Añadir "años", "kg", etc desde JS
- Años y nombre tienen mismo estilo, ¿lo dejamos así?
- Los iconos desaparecen al escribir en el input
- Al borrar el input, no vuelve al mensaje de default, se queda vacío
    ¿O queremos que se quede vacío o solo con el icono?
- Arreglar la función de RenderDesign, no hace cambios en la 1ª preview
    ¿querySelectorAll() para todos los inputs?
- La imagen no he mirado como se puede cambiar
- He quitado los required SOLO en esta rama

- ¡Elegir paletas! (Se pueden meter más, pero hay que añadirlas en HTML)
    (O rompernos la cabeza en JS, claro)
- ¿Nos gustan los colores default?
- ¿Añadir texto de "pulsa en la tarjeta para volver a default"?
    Se puede poner un botón, pero habría que tocar más cosas
    O sin texto

"use strict";
/*SECCIÓN DE QUERY SELECTORS*/

// Formulario principal de fill
const fillForm = document.querySelector(".js_fillForm");
// Todos los campos se rellenan desde fill
const fillInputs = document.querySelectorAll(".js_fillInput");

// Botones de acciones del formulario
const fillSubmitBtn = document.querySelector(".js_fillSubmitBtn");
const resetButton = document.querySelector(".js_resetButton");

//Inputs concretos del formulario
const nameInput = document.querySelector("#name");
const descriptionInput = document.querySelector("#description");
const ageInput = document.querySelector("#age");
const breedInput = document.querySelector("#breed");
const weightInput = document.querySelector("#weight");
const instagramInput = document.querySelector("#instagram");

/*CQS PREVIEW*/
// Elementos visuales de la tarjeta preview que se actualizan en tiempo real
// Puestos así para que el JS busque los elementos sólo dentro del preview de fill y no de design
const fillPreview = document.querySelector(".js_fillPreview");
const nameValue = fillPreview.querySelector(".js_nameValue");
const ageValue = fillPreview.querySelector(".js_ageValue");
const breedValue = fillPreview.querySelector(".js_breedValue");
const weightValue = fillPreview.querySelector(".js_weightValue");
const descriptionValue = fillPreview.querySelector(".js_descriptionValue");
const instagramValue = fillPreview.querySelector(".js_instagramValue");

console.log("Contenedor preview fill:", fillPreview);
console.log("Nombre preview:", nameValue);


/*SECCIÓN DE DATOS*/
//Objeto principal donde guardamos la información que la usuaria escribe en fill
let fillData = {
  name: "",
  description: "",
  age: "",
  breed: "",
  weight: "",
  instagram: "",
};


/*SECCIÓN DE FUNCIONES*/
// Función para pintar los datos en la preview
function renderPreview() {
  if (!fillPreview) return;
  
  nameValue.textContent = fillData.name.trim() || "Nombre";
  ageValue.textContent = fillData.age ? `${fillData.age} años`: 'Edad';
  breedValue.innerHTML = `<i class="fa-solid fa-paw"></i> ${fillData.breed.trim() || "Raza"}`;
  weightValue.innerHTML = `<i class="fa-solid fa-weight-hanging"></i> ${fillData.weight ? `${fillData.weight} kg` : "Peso"}`;
  descriptionValue.textContent = fillData.description.trim() || "Descripción";
  instagramValue.textContent = fillData.instagram.trim() ? "Ver Instagram" : "Instagram";

  // Para poner como enlace el instagram sin espacios por el trim y, sino hay nada, se usa el # que es como un placeholder.
  instagramValue.href = fillData.instagram.trim() || "#";
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
  const changedInput = ev.target;
  const inputName = changedInput.name;
  const inputValue = changedInput.value;
  
  fillData[inputName] = inputValue;

  // Comprobar si el objeto se actualiza correctamente y si el name de los inputs está bien conectado
  console.log("fillData actualizado:", fillData);
  
  saveFillDataInLocalStorage();
  renderPreview();
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
if (fillForm && fillPreview) {
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

