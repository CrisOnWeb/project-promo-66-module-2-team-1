"use strict";

//SECCIÓN DE QUERY-SELECTOR
const designSection = document.querySelector(".js_designSection");
const fillSection = document.querySelector(".js_fillSection");
const shareSection = document.querySelector(".js_shareSection");
const tabDesignBtn = document.querySelector(".js_tabDesignBtn");
const tabFillBtn = document.querySelector(".js_tabFillBtn");
const tabShareBtn = document.querySelector(".js_tabShareBtn");



//SECCIÓN DE FUNCIONES DE EVENTOS

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

/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */
function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myFile);
}

//SECCIÓN DE EVENTOS
tabDesignBtn.addEventListener("click", handleClickDesignBtn);
tabFillBtn.addEventListener("click", handleClickFillBtn);
tabShareBtn.addEventListener("click", handleClickShareBtn);
/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
fileField.addEventListener("change", getImage);

//SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA
