FUNCIONES QUE HIZO SUSI
/_funciones cambiar datos preview_/

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

Los CQS de Marta
// /_CQS DESIGN_/
// const selected = document.querySelector(".js_selectedDesign");
// const optionsBox = document.querySelector(".js_optionsDesign");
// const options = document.querySelectorAll(".js_option");
// const defaultOption = document.querySelector(".js_designDefault");
// const hiddenInput = document.querySelector(".js_hiddenDesign");
