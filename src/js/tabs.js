"use strict";

//SECCIÓN DE QUERY-SELECTOR
const designSection = document.querySelector(".js_designSection");
const fillSection = document.querySelector(".js_fillSection");
const shareSection = document.querySelector(".js_shareSection");
const tabDesignBtn = document.querySelector(".js_tabDesignBtn");
const tabFillBtn = document.querySelector(".js_tabFillBtn");
const tabShareBtn = document.querySelector(".js_tabShareBtn");

//SECCIÓN DE DATOS

//SECCIÓN DE FUNCIONES

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

//SECCIÓN DE EVENTOS
tabDesignBtn.addEventListener("click", handleClickDesignBtn);
tabFillBtn.addEventListener("click", handleClickFillBtn);
tabShareBtn.addEventListener("click", handleClickShareBtn);

//SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA
