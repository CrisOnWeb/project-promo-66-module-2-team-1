"use strict";
/*SECCIÓN DE QUERY SELECTORS*/

/*CQS FORM*/
const fillForm = document.querySelector(".js_fillForm");
const fillInputs = document.querySelectorAll(".js_fillInput");
const imageInput = document.querySelector("#image");
const fillSubmitBtn = document.querySelector(".js_fillSubmitBtn");
const previewImage = document.querySelector(".js_previewImg");
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
  previewName.value = "";
  previewAge.value = "";
  previewImg.value = "";
  previewBreed.value = "";
  previewWeight.value = "";
  previewTemper.value = "";
};

resetButton.addEventListener("click", handleClickReset);

function displayLocalStorage(){
  const savedName = localStorage.getItem("name");
  const savedAge = localStorage.getItem("age");
  const savedImg = localStorage.getItem("img"); //no es un string!!!
  const savedBreed = localStorage.getItem("breed");
  const savedWeight = localStorage.getItem("weight");
  const savedTemper = localStorage.getItem("temper");

  if (savedName !== null) {
  previewName.value = savedName;
  nameValue.textContent = savedName;
  };
  if (savedAge !== null) {
    previewAge.value = savedAge;
    ageValue.textContent = savedAge;
  };
  if (savedImg !== null) {
    imgValue.value = savedImg;
    imgValue.textContent = savedImg;
  };
  if (savedBreed !== null) {
    breedValue.value = savedBreed;
    breedValue.textContent = savedBreed;
  };
  if (savedTemper !== null) {
    temperValue.value = savedTemper;
    temperValue.textContent = savedTemper;
  };
  if(savedWeight !== null){
    weightValue.value = savedWeight;
    weightValue.textContent = savedWeight;
  };
}

//EventListener - Inputs

previewName.addEventListener("input", () => {
  nameValue.textContent = previewName.value;
  localStorage.setItem("name", previewName.value);
  displayLocalStorage ()
});
previewAge.addEventListener("input", () => {
  ageValue.textContent = parseInt(previewAge.value);
  localStorage.setItem("age", previewAge.value);
});
previewImage.addEventListener("input", () => {
  imgValue.textContent = previewImg.value;
  localStorage.setItem("image", previewImg.value);
});
previewBreed.addEventListener("input", () => {
  breedValue.textContent = previewBreed.value;
  localStorage.setItem("breed", previewBreed.value);
});
previewDescription.addEventListener("input", () => {
  temperValue.textContent = previewDescription.value;
  localStorage.setItem("temper", previewDescription.value);
});
previewWeight.addEventListener("input", () => {
  weightValue.textContent = previewWeight.value;
  localStorage.setItem("weight", previewWeight.value);
});

//EventListener

//Sección Cambiar Diseño
for(const option of options){ 
  option.addEventListener("click", () => { 
    const value = option.dataset.value; 
    hiddenInput.value = value; //guardala en una variable 
    renderDesign(value); 
})} 

function renderDesign(value){
  const option = document.querySelector(`[data-value="${value}"]`); 
  const theme = option.id;
  
  const cardElements = document.querySelectorAll('.previewContainer > div');
  for(const element of cardElements){
    element.classList.remove('palette0', 'palette1', 'palette2', 'palette3');
    element.classList.add(theme);
  }
}

//Permite al usuario volver a default
const backToDefault = document.querySelector('.previewContainer');
backToDefault.addEventListener("click", () =>{
  renderDefault()
})

function renderDefault(){
  const cardElements = document.querySelectorAll('.previewContainer > div');
  for(const element of cardElements){
    element.classList.remove('palette0', 'palette1', 'palette2', 'palette3');
    element.classList.add('palette0')
  }
}
  renderDefault() 

function renderPreview(){ //no está terminada!!!
  const cardElements = document.querySelectorAll('.previewContainer > div');
  for(const element of cardElements){

  }
}




/*SECCIÓN DE FUNCIONES DE EVENTOS*/

/*SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA - EJECUCIÓN*/

