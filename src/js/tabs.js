"use strict";

//SECCIÓN DE QUERY-SELECTOR
const designSection = document.querySelector(".js_designSection");
const fillSection = document.querySelector(".js_fillSection");
const shareSection = document.querySelector(".js_shareSection");
const tabDesignBtn = document.querySelector(".js_tabDesignBtn");
const tabFillBtn = document.querySelector(".js_tabFillBtn");
const tabShareBtn = document.querySelector(".js_tabShareBtn");

//QUERÝ-SELECTORS DEL INPUT FILE
const fileField = document.querySelector(".js__profile-upload-btn");
const profileImage = document.querySelector(".js__profile-image");

//SECCIÓN DE DATOS
const fr = new FileReader();

//SECCIÓN DE FUNCIONES
/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado. Ese resultado de procesar el fichero que hemos cargado
   * podemos pasarlo como background a la imagen de perfil y a la vista previa
   * de nuestro componente.
   */
  profileImage.style.backgroundImage = `url(${fr.result})`;
  //profilePreview.style.backgroundImage = `url(${fr.result})`;

  /* Si en lugar de establecer la imagen como fondo de un elemento, 
      estás trabajando con una etiqueta <img> en el HTML, entonces en vez de 
      asignar la imagen como background, debes establecer la URL en el atributo `src` de la imagen.
      Para ello, reemplaza las dos líneas anteriores de código por las siguientes:
    
      profileImage.src = fr.result;
      profilePreview.src = fr.result;
    */
}

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
