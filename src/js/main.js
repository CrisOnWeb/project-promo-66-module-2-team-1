"use strict";
/*SECCIÓN DE QUERY SELECTORS*/

/*CQS FORM*/
const fillForm = document.querySelector(".js_fillForm");
const fillInputs = document.querySelectorAll(".js_fillInput");
const imageInput = document.querySelector("#image");
const fillSubmitBtn = document.querySelector(".js_fillSubmitBtn");
const previewImage = document.querySelector(".js_previewImage");
const previewName = document.querySelector(".js_previewName");
const previewDescription = document.querySelector(".js_previewDescription");
const previewAge = document.querySelector(".js_previewAge");
const previewBreed = document.querySelector(".js_previewBreed");
const previewWeight = document.querySelector(".js_previewWeight");
const previewInstagram = document.querySelector(".js_previewInstagram");
const resetButton = document.querySelector(".js_resetButton");

/*CQS DESIGN*/
const selected = document.querySelector(".js_selectedDesign");
const optionsBox = document.querySelector(".js_optionsDesign");
const options = document.querySelectorAll(".js_option");
const defaultOption = document.querySelector(".js_designDefault");
const hiddenInput = document.querySelector(".js_hiddenDesign");

/*CQS PREVIEW*/
const nameValue = document.querySelector(".js_nameValue");
const ageValue = document.querySelector(".js_ageValue");
const imgValue = document.querySelector(".js_imgValue");
const breedValue = document.querySelector(".js_breedValue");
const weightValue = document.querySelector(".js_weightValue");
const temperValue = document.querySelector(".js_temperValue");

/*SECCIÓN DE DATOS*/

/*SECCIÓN DE FUNCIONES*/
/*funciones cambiar datos preview*/

const handleClickReset = () => {
  nameInput.value = "";
  emailInput.value = "";
  dateInput.value = "";
  messageInput.value = "";
  senderInput.value = "";
};

resetButton.addEventListener("click", handleClickReset);

//No funciona
if (localStorage.getItem("name")) {
  nameInput.value = localStorage.getItem("name");
  nameValue.textContent = nameInput.value;
}

if (localStorage.getItem("age")) {
  ageInput.value = localStorage.getItem("age");
  ageValue.textContent = ageInput.value + "años";
}

if (localStorage.getItem("image")) {
  imageInput.value = localStorage.getItem("image");
  imageValue = imageInput.value;
}

if (localStorage.getItem("breed")) {
  breedInput.value = localStorage.getItem("breed");
  breedValue.textContent = breedInput.value;
}

if (localStorage.getItem("weight")) {
  weightInput.value = localStorage.getItem("weight");
  weightValue.textContent = weightInput.value;
}

if (localStorage.getItem("temper")) {
  temperInput.value = localStorage.getItem("temper");
  temperValue.textContent = tmeperInput.value;
}

nameInput.addEventListener("input", () => {
  nameValue.textContent = nameInput.value;
  localStorage.setItem("name", nameInput.value);
});

ageInput.addEventListener("input", () => {
  emailValue.textContent = ageInput.value;
  localStorage.setItem("age", ageInput.value);
});

imageInput.addEventListener("input", () => {
  imageValue.textContent = imageInput.value;
  localStorage.setItem("image", imageInput.value);
});

breedInput.addEventListener("input", () => {
  breedValue.textContent = breedInput.value;
  localStorage.setItem("breed", breedInput.value);
});

weightInput.addEventListener("input", () => {
  weightValue.textContent = weightInput.value;
  localStorage.setItem("weight", weightInput.value);
});

temperInput.addEventListener("input", () => {
  temperValue.textContent = temperInput.value;
  localStorage.setItem("temper", temperInput.value);
});

/*SECCIÓN DE FUNCIONES DE EVENTOS*/

/*SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA - EJECUCIÓN*/
