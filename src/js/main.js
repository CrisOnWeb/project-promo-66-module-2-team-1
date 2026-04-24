'use strict';
/*SECCIÓN DE QUERY SELECTORS*/

/*CQS FORM*/
const fillForm = document.querySelector(".js_fillForm");
const fillInputs = document.querySelectorAll(".js_fillInput");
const fillSubmitBtn = document.querySelector(".js_fillSubmitBtn");
const resetButton = document.querySelector(".js_resetButton");
const createBtn = document.querySelector(".js_createBtn");
const designSection = document.querySelector(".js_designSection");
const fillSection = document.querySelector(".js_fillSection");

/*CQS INPUTS*/
const nameInput = document.querySelector("#name");
const descriptionInput = document.querySelector("#description");
const ageInput = document.querySelector("#age");
const breedInput = document.querySelector("#breed");
const weightInput = document.querySelector("#weight");
const facebookInput = document.querySelector("#facebook");

/*CQS DESIGN*/
const selected = document.querySelector('.js_selectedDesign');
const optionsBox = document.querySelector('.js_optionsDesign');
const options = document.querySelectorAll('.js_option');
const defaultOption = document.querySelector('.js_designDefault');
const hiddenInput = document.querySelector('.js_hiddenDesign');

/*CQS PREVIEW*/
const fillPreview = document.querySelectorAll(".js_fillPreview");
const finalPreview = document.querySelector("#js_preview_userCard");
const nameValue = document.querySelector(".js_nameValue");
const ageValue = document.querySelector(".js_ageValue");
const breedValue = document.querySelector(".js_breedValue");
const weightValue = document.querySelector(".js_weightValue");
const descriptionValue = document.querySelector(".js_descriptionValue");
const facebookValue = document.querySelector(".js_facebookValue");
const imgValue = document.querySelector(".js_imgValue");
/*CQS SHARE*/
const shareSection = document.querySelector(".js_shareSection");

/*CQS INPUT FILE*/
const fileField = document.querySelector(".js__profile-upload-btn");
const profileImage = document.querySelector(".js__profile-image");

/*CQS TAB BUTTONS*/
const tabDesignBtn = document.querySelector(".js_tabDesignBtn");
const tabFillBtn = document.querySelector(".js_tabFillBtn");
const tabShareBtn = document.querySelector(".js_tabShareBtn");

/* CQS HEADER */
const burgerMenuBtn = document.querySelector('.js_burgerMenuBtn');
const headerMenu = document.querySelector('.js_headerMenu');

/*SECCIÓN DE DATOS*/

//Obj que guarda la info que la usuaria escribe en fill
let fillData = {
  palette: "",
  name: "",
  description: "",
  age: "",
  breed: "",
  weight: "",
  facebook: "",
  photo : "",
};
//Obj que enviamos en fetch()
const fr = new FileReader();

//Eventos que muestran/ocultan las secciones de la página create
const handleClickDesignBtn = () => {
  designSection.classList.remove("hidden");
  fillSection.classList.add("hidden");
  shareSection.classList.add("hidden");
};

const handleClickFillBtn = () => {
  fillSection.classList.remove("hidden");
  shareSection.classList.add("hidden");
  designSection.classList.add("hidden");
};

const handleClickShareBtn = () => {
  shareSection.classList.remove("hidden");
  fillSection.classList.add("hidden");
  designSection.classList.add("hidden");
};

const handleClickMenuBurger = () => {
  headerMenu.classList.toggle('is-open');
};

burgerMenuBtn.addEventListener('click', handleClickMenuBurger);

/*SECCIÓN DE FUNCIONES*/

//CAMBIO DE DISEÑO
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
  fillData.palette = option.dataset.value;
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
  fillData.palette = "0"
  for (const element of cardElements) {
    element.classList.remove("palette0", "palette1", "palette2", "palette3");
    element.classList.add("palette0");
  }
}

// Función para pintar los datos en la preview
function renderPreview(target, data) {
  const nameValueInPreview = finalPreview.querySelector(".js_nameValue");
  const ageValueInPreview = finalPreview.querySelector(".js_ageValue");
  const breedValueInPreview = finalPreview.querySelector(".js_breedValue");
  const weightValueInPreview = finalPreview.querySelector(".js_weightValue");
  const descriptionValueInPreview = finalPreview.querySelector(
    ".js_descriptionValue",
  );
  const facebookValueInPreview =
    finalPreview.querySelector(".js_facebookValue");

  nameValueInPreview.textContent = fillData.name.trim()
    ? `${fillData.name.trim()},`
    : "Nombre";

  ageValueInPreview.textContent = "";

  if (fillData.age !== "") {
    const age = Number(fillData.age);
    const ageSpan = document.createElement("span");
    ageSpan.textContent = `${age}`;
    ageValueInPreview.appendChild(ageSpan);
  }

  breedValueInPreview.innerHTML = `<i class="fa-solid fa-paw"></i> ${fillData.breed.trim() || "Raza"}`;
  weightValueInPreview.innerHTML = `<i class="fa-solid fa-weight-hanging"></i> ${fillData.weight ? `${fillData.weight} kg` : "Peso"}`;
  descriptionValueInPreview.textContent =
    fillData.description.trim() || "Descripción";
  facebookValueInPreview.textContent = `${
    fillData.facebook.trim() ? fillData.facebook.trim() : "#"
  }`;
  if (fillData.photo) {
    profileImage.style.backgroundImage = `url(${fillData.photo})`;
  }
}

/*LOCAL STORAGE*/

// Función para guardar el objeto completo en localStorage
//Falta imagen
function saveFillDataInLocalStorage() {
  localStorage.setItem("fillData", JSON.stringify(fillData));
  console.log("guardando datos en LS");
}
// Función para recuperar los datos guardados en localStorage
function loadFillDataFromLocalStorage() {
  const savedFillData = localStorage.getItem("fillData");

  if (savedFillData) {
    fillData = JSON.parse(savedFillData);
    // Rellenamos inputs: al recargar, el formulario conserva los datos
    /* pone en el input "nameInput" el valor de "fillData.name"
    si no existe, pone un string vacío */
    nameInput.value = fillData.name || "";
    descriptionInput.value = fillData.description || "";
    ageInput.value = fillData.age || "";
    breedInput.value = fillData.breed || "";
    weightInput.value = fillData.weight || "";
    facebookInput.value = fillData.facebook || "";
    imgValue.value = fillData.photo || "";
  }
}
// Función para actualizar el objeto fillData cuando la usuaria escribe
function handleInputFill(ev) {
  const changedInput = ev.target; //donde ocurre el evento
  const inputName = changedInput.id; //input donde escribe
  const inputValue = changedInput.value; //valor escrito en input
  //el inputValue escrito en inputName es el valor de: fillData[propiedad que se llama como el inputName]
  fillData[inputName] = inputValue;
  console.log("fillData actualizado:", fillData[inputName]);

  saveFillDataInLocalStorage();
  renderPreview(finalPreview, fillData);
  //hay que especificarle a renderPreview donde "pintar" y con que datos
  validateForm();
  toggleResetButton();
}

// Función para decir que el formulario está completo solo si todos los campos tienen algo escrito
function isFormComplete() {
  const result =
    fillData.name.trim() !== "" &&
    fillData.description.trim() !== "" &&
    fillData.age !== "" &&
    fillData.breed.trim() !== "" &&
    fillData.weight !== "" &&
    fillData.facebook.trim() !== "";

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
    fillData.facebook.trim() !== ""
  );
}

// Función para activar o desactivar el botón de submit
// (se desactiva el botón si el formulario NO está completo)
function validateForm() {
  fillSubmitBtn.disabled = !isFormComplete();

  console.log("Botón submit activo:", !fillSubmitBtn.disabled);
}

// Función para activar o desactivar el botón de borrar datos
// (se desactiva el botón si NO hay datos)
function toggleResetButton() {
  resetButton.disabled = !hasAnyData();
}

// Función para resetear formulario, objeto, localStorage y preview
function handleClickReset() {
  console.log("Click en borrar resultados");
  // Vaciamos el objeto
  fillData = {
    palette: "",
    name: "",
    description: "",
    age: "",
    breed: "",
    weight: "",
    facebook: "",
  };
  // Reseteamos visualmente el formulario
  //
  fillForm.reset();
  // Borramos el localStorage
  localStorage.removeItem("fillData");
  // Volvemos a pintar el preview con textos por defecto
  renderPreview();
  // Revalidamos los botones
  validateForm();
  toggleResetButton();
  resetImage()
  
  console.log("Después de reset:", fillData);
}
function resetImage(){
  function resetImage() {
  profileImage.style.backgroundImage = "";
  fillData.photo = "";
  localStorage.setItem("fillData", JSON.stringify(fillData));
}
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

if (fillForm && finalPreview) {
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

function writeImage() {
  profileImage.style.backgroundImage = `url(${fr.result})`;
  fillData.photo = fr.result;
  /* 
  En la propiedad `result` de nuestro FR se almacena
  el resultado. Ese resultado de procesar el fichero que hemos cargado
  podemos pasarlo como background a la imagen de perfil y a la vista previa
  de nuestro componente.
  Si en lugar de establecer la imagen como fondo de un elemento, 
  estás trabajando con una etiqueta <img> en el HTML, entonces en vez de 
  asignar la imagen como background, debes establecer la URL en el atributo `src` de la imagen.
  Para ello, reemplaza las dos líneas anteriores de código por las siguientes:

  profileImage.src = fr.result;
  profilePreview.src = fr.result;

  Una vez tenemos los datos listos en el FR podemos trabajar con ellos ;)
 */
  
}
/*
 Recoge el archivo añadido al campo de tipo "file" y lo carga en nuestro objeto FileReader para que lo convierta a algo con lo que podamos trabajar.
 Añade un listener al FR para que ejecute una función al tener los datos listos
 @param {evento} e
 */
function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myFile);
}

function handleCreateCard(ev){
  ev.preventDefault();
  const objToSend = {
  field1: fillData.palette,
  field2: fillData.name,
  field3: fillData.age,
  field4: fillData.breed,
  field5: fillData.weight,
  field6: fillData.description,
  field7: fillData.facebook,
  photo: fillData.photo,
  }; 
  console.log(objToSend)
  fetch("https://api-pw.dev.adalab.es/api/info/data",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(objToSend),
    }).then((response) => response.json())
      .then((response) => {
        if (response.success === true) {
          const shareResult = document.querySelector('.js_shareResult')
          shareResult.classList.remove("hidden");
        }else{
          const shareError = document.querySelector('.js_shareError')
          shareError.classList.remove("hidden"); //???
        }
      });
}

/*SECCCIÓN .ADDEVENTLISTENER */
tabDesignBtn.addEventListener("click", handleClickDesignBtn);
tabFillBtn.addEventListener("click", handleClickFillBtn);
tabShareBtn.addEventListener("click", handleClickShareBtn);
createBtn.addEventListener('click', handleCreateCard);
fileField.addEventListener("change", getImage); //campo oculto para cuando cambie su value

//Al recargar
renderDefault();
if (fillData.photo) {
  profileImage.style.backgroundImage = `url(${fillData.photo})`;
}
fr