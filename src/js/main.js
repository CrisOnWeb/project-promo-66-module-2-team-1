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
    ageInput.value = "";
    imageInput.value = "";
    breedInput.value = "";
    temperInput.value = "";
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

nameValue.addEventListener("input", () => {
  nameValue.textContent = nameInput.value;
  localStorage.setItem("name", nameInput.value);
});

ageValue.addEventListener("input", () => {
  emailValue.textContent = ageInput.value;
  localStorage.setItem("age", ageInput.value);
});

imgValue.addEventListener("input", () => {
  imageValue.textContent = imageInput.value;
  localStorage.setItem("image", imageInput.value);
});

breedValue.addEventListener("input", () => {
  breedValue.textContent = breedInput.value;
  localStorage.setItem("breed", breedInput.value);
});

weightValue.addEventListener("input", () => {
  weightValue.textContent = weightInput.value;
  localStorage.setItem("weight", weightInput.value);
});

temperValue.addEventListener("input", () => {
  temperValue.textContent = temperInput.value;
  localStorage.setItem("temper", temperInput.value);
});

//Sección Cambiar Diseño
for(const option of options){ 
  option.addEventListener("click", () => { 
    if(!option) return;
    const value = option.dataset.value; 
    hiddenInput.value = value; //guardala en una variable 
    renderDesign(value); 

    //console.log(option) 

})} 

 
 
function renderDesign(value){ //0 default
  const option = document.querySelector(`[data-value="${value}"]`); 
  const theme = option.id
  const cardElements = document.querySelectorAll('.previewContainer > div')
  for(const element of cardElements){
    element.classList.remove('palette0', 'palette1', 'palette2', 'palette3');
    element.classList.add(theme)
    
  }
} 
/*
.option:first-child{
    display:none;
}
.option span:nth-child(1){
    background-color: var(--form-color-bg);
}
.option span:nth-child(2){
    background-color: var(--form-color-text);
    display: none; 
}
.option span:nth-child(3){
    background-color: var(--form-color-accent);
    display: none;
}
*/







/*SECCIÓN DE FUNCIONES DE EVENTOS*/

/*SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA - EJECUCIÓN*/

