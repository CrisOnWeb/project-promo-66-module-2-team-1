'use strict'; 
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

/*CQS DESIGN*/
const selected = document.querySelector('.js_selectedDesign'); 
const optionsBox = document.querySelector('.js_optionsDesign'); 
const options = document.querySelectorAll('.js_option'); 
const defaultOption = document.querySelector('.js_designDefault') 
const hiddenInput = document.querySelector('.js_hiddenDesign');


/*SECCIÓN DE DATOS*/



/*SECCIÓN DE FUNCIONES*/
/*funciones cambiar datos preview*/
if (localStorage.getItem("name")) {
  nameInput.value = localStorage.getItem("name");
  nameValue.textContent = "Para " + nameInput.value;
}
 
if (localStorage.getItem("email")) {
  emailInput.value = localStorage.getItem("email");
  emailValue.textContent = emailInput.value;
}
 
if (localStorage.getItem("date")) {
  dateInput.value = localStorage.getItem("date");
  dateValue.textContent = dateInput.value;
}
 
if (localStorage.getItem("message")) {
  messageInput.value = localStorage.getItem("message");
  messageValue.textContent = messageInput.value;
}
 
if (localStorage.getItem("sender")) {
  senderInput.value = localStorage.getItem("sender");
  senderValue.textContent = senderInput.value;
}

/*SECCIÓN DE FUNCIONES DE EVENTOS*/

/*SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA - EJECUCIÓN*/

