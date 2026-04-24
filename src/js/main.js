'use strict';
/*SECCIÓN DE QUERY SELECTORS*/

/*CQS FORM*/
const fillForm = document.querySelector('.js_fillForm');
const fillInputs = document.querySelectorAll('.js_fillInput');
const fillSubmitBtn = document.querySelector('.js_fillSubmitBtn');
const resetButton = document.querySelector('.js_resetButton');
const createBtn = document.querySelector('.js_createBtn');

const designSection = document.querySelector('.js_designSection');
const fillSection = document.querySelector('.js_fillSection');
const shareSection = document.querySelector('.js_shareSection');

/*CQS INPUTS*/
const nameInput = document.querySelector('#name');
const descriptionInput = document.querySelector('#description');
const ageInput = document.querySelector('#age');
const breedInput = document.querySelector('#breed');
const weightInput = document.querySelector('#weight');
const facebookInput = document.querySelector('#facebook');

/*CQS DESIGN*/
const options = document.querySelectorAll('.js_option');
const hiddenInput = document.querySelector('.js_hiddenDesign');

/*CQS PREVIEW*/
const finalPreview = document.querySelector('#js_preview_userCard');
const profileImage = document.querySelector('.js__profile-image');

/*CQS SHARE*/
const shareResult = document.querySelector('.js_shareResult');
const shareError = document.querySelector('.js_shareError');
const facebookShareBtn = document.querySelector('.js_facebookShareBtn');
const shareLink = document.querySelector('.js_shareLink');

/*CQS INPUT FILE*/
const fileField = document.querySelector('.js__profile-upload-btn');

/*CQS TAB BUTTONS*/
const tabDesignBtn = document.querySelector('.js_tabDesignBtn');
const tabFillBtn = document.querySelector('.js_tabFillBtn');
const tabShareBtn = document.querySelector('.js_tabShareBtn');

/* CQS HEADER */
const burgerMenuBtn = document.querySelector('.js_burgerMenuBtn');
const headerMenu = document.querySelector('.js_headerMenu');

/*SECCIÓN DE DATOS*/

//Obj que guarda la info que la usuaria escribe en fill
let fillData = {
  name: '',
  description: '',
  age: '',
  breed: '',
  weight: '',
  facebook: '',
  palette: '0',
  photo: '',
};

//Obj que enviamos en fetch()
const fr = new FileReader();

/*SECCIÓN DE FUNCIONES*/
// NAVEGACIÓN
//Eventos que muestran/ocultan las secciones de la página create
const handleClickDesignBtn = () => {
  designSection.classList.remove('hidden');
  fillSection.classList.add('hidden');
  shareSection.classList.add('hidden');
};

const handleClickFillBtn = () => {
  fillSection.classList.remove('hidden');
  shareSection.classList.add('hidden');
  designSection.classList.add('hidden');
};

const handleClickShareBtn = () => {
  shareSection.classList.remove('hidden');
  fillSection.classList.add('hidden');
  designSection.classList.add('hidden');
};

const handleClickMenuBurger = () => {
  headerMenu.classList.toggle('is-open');
};

// SECCIÓN DE DISEÑO
for (const option of options) {
  option.addEventListener('click', () => {
    const value = option.dataset.value;
    hiddenInput.value = value; //guardala en una variable
    renderDesign(value);
  });
}

// Quitado el const duplicado y guardamos en palette
function renderDesign(value) {
  const option = document.querySelector(`[data-value="${value}"]`);
  const theme = option.id;
  const cardElements = document.querySelectorAll('.preview > div');

  hiddenInput.value = value;
  fillData.palette = value;
  saveFillDataInLocalStorage();

  for (const element of cardElements) {
    element.classList.remove('palette0', 'palette1', 'palette2', 'palette3');
    element.classList.add(theme);
  }
}

//Permite al usuario volver a default. Protegemos sino existe preview.
const backToDefault = document.querySelector('.preview');

if (backToDefault) {
  backToDefault.addEventListener('click', () => {
    renderDefault();
  });
}

function renderDefault() {
  if (shareResult) shareResult.classList.add('hidden');
  if (shareError) shareError.classList.add('hidden');
  if (facebookShareBtn) facebookShareBtn.classList.add('hidden');

  const cardElements = document.querySelectorAll('.preview > div');
  fillData.palette = '0';

  for (const element of cardElements) {
    element.classList.remove('palette0', 'palette1', 'palette2', 'palette3');
    element.classList.add('palette0');
  }
}

// SECCION DE PREVIEW
// Todo el código vuelve a estar dentro de la función. Se modifica el orden.
function renderPreview() {
  const nameValueInPreview = finalPreview.querySelector('.js_nameValue');
  const ageValueInPreview = finalPreview.querySelector('.js_ageValue');
  const breedValueInPreview = finalPreview.querySelector('.js_breedValue');
  const weightValueInPreview = finalPreview.querySelector('.js_weightValue');
  const descriptionValueInPreview = finalPreview.querySelector(
    '.js_descriptionValue',
  );
  const facebookValueInPreview =
    finalPreview.querySelector('.js_facebookValue');

  nameValueInPreview.textContent = fillData.name.trim()
    ? `${fillData.name.trim()},`
    : 'Nombre';

  ageValueInPreview.textContent = '';

  if (fillData.age !== '') {
    const age = Number(fillData.age);
    const ageSpan = document.createElement('span');
    ageSpan.textContent = `${age} ${age === 1 ? 'año' : 'años'}`;
    ageValueInPreview.appendChild(ageSpan);
  }

  breedValueInPreview.innerHTML = `<i class="fa-solid fa-paw"></i> ${
    fillData.breed.trim() || 'Raza'
  }`;

  weightValueInPreview.innerHTML = `<i class="fa-solid fa-weight-hanging"></i> ${
    fillData.weight ? `${fillData.weight} kg` : 'Peso'
  }`;

  descriptionValueInPreview.textContent =
    fillData.description.trim() || 'Descripción';

  facebookValueInPreview.textContent = fillData.facebook.trim() || '#';
  facebookValueInPreview.href = fillData.facebook.trim() || '#';

  if (fillData.photo) {
    profileImage.style.backgroundImage = `url(${fillData.photo})`;
  }
}

/*LOCAL STORAGE*/
// Función para guardar el objeto completo en localStorage
//Falta imagen
function saveFillDataInLocalStorage() {
  localStorage.setItem('fillData', JSON.stringify(fillData));
  console.log('guardando datos en LS');
  localStorage.setItem('fillData', JSON.stringify(fillData));
  console.log('guardando datos en LS');
}
// Función para recuperar los datos guardados en localStorage
function loadFillDataFromLocalStorage() {
  const savedFillData = localStorage.getItem('fillData');

  if (savedFillData) {
    fillData = JSON.parse(savedFillData);

    nameInput.value = fillData.name || '';
    descriptionInput.value = fillData.description || '';
    ageInput.value = fillData.age || '';
    breedInput.value = fillData.breed || '';
    weightInput.value = fillData.weight || '';
    facebookInput.value = fillData.facebook || '';

    if (fillData.photo) {
      profileImage.style.backgroundImage = `url(${fillData.photo})`;
    }
  }
}

/*FORMULARIO*/
// Función para actualizar el objeto fillData cuando la usuaria escribe
function handleInputFill(ev) {
  const changedInput = ev.target; //donde ocurre el evento
  const inputName = changedInput.id; //input donde escribe
  const inputValue = changedInput.value; //valor escrito en input
  //el inputValue escrito en inputName es el valor de: fillData[propiedad que se llama como el inputName]
  fillData[inputName] = inputValue;
  console.log('fillData actualizado:', fillData[inputName]);

  saveFillDataInLocalStorage();
  renderPreview();
  validateForm();
  toggleResetButton();
}

// Función para decir que el formulario está completo solo si todos los campos tienen algo escrito
function isFormComplete() {
  return (
    fillData.name.trim() !== '' &&
    fillData.description.trim() !== '' &&
    fillData.age !== '' &&
    fillData.breed.trim() !== '' &&
    fillData.weight !== '' &&
    fillData.facebook.trim() !== ''
  );
  console.log('¿Formulario completo?', result);
}

// Función para comprobar si hay al menos algún dato escrito
function hasAnyData() {
  return (
    fillData.name.trim() !== '' ||
    fillData.description.trim() !== '' ||
    fillData.age !== '' ||
    fillData.breed.trim() !== '' ||
    fillData.weight !== '' ||
    fillData.facebook.trim() !== '' ||
    fillData.photo !== ''
  );
}

// Función para activar o desactivar el botón de submit
// (se desactiva el botón si el formulario NO está completo)
function validateForm() {
  fillSubmitBtn.disabled = !isFormComplete();

  console.log('Botón submit activo:', !fillSubmitBtn.disabled);
}

// Función para activar o desactivar el botón de borrar datos
// (se desactiva el botón si NO hay datos)
function toggleResetButton() {
  resetButton.disabled = !hasAnyData();
}

// Función para resetear formulario, objeto, localStorage y preview
function handleClickReset() {
  console.log('Click en borrar resultados');
  fillData = {
    name: '',
    description: '',
    age: '',
    breed: '',
    weight: '',
    facebook: '',
    palette: '0',
    photo: '',
  };

  // Reseteamos visualmente el formulario
  //
  fillForm.reset();
  // Borramos el localStorage
  localStorage.removeItem('fillData');

  resetImage();
  renderDefault();
  renderPreview();

  validateForm();
  toggleResetButton();
}

// Se guarda la foto al cargarla y resetea el fondo.
function resetImage() {
  profileImage.style.backgroundImage = '';
  fillData.photo = '';
}

// Función del submit (evita el envío real y lo deja preparado para el siguiente paso)
// Submit valida y pasa a sección de compartir
// El fetch se hace al pulsar el botón de crear tarjeta
function handleSubmitFillForm(ev) {
  ev.preventDefault();

  if (!isFormComplete()) {
    return;
  }

  handleClickShareBtn();

  shareResult.classList.add('hidden');
  shareError.classList.add('hidden');

  if (facebookShareBtn) {
    facebookShareBtn.classList.add('hidden');
  }
}

// SECCIÓN DE IMAGEN
function writeImage() {
  profileImage.style.backgroundImage = `url(${fr.result})`;
  fillData.photo = fr.result;
  saveFillDataInLocalStorage();
  renderPreview();
}

function getImage(ev) {
  const myFile = ev.currentTarget.files[0];
  const MAX_SIZE = 2 * 1024 * 1024;

  if (!myFile) {
    return;
  }

  if (!myFile.type.startsWith('image/')) {
    console.error('El archivo seleccionado no es una imagen válida.');
    return;
  }

  if (myFile.size > MAX_SIZE) {
    console.error('La imagen supera el tamaño máximo de 2MB.');
    return;
  }

  fr.addEventListener('load', writeImage);
  fr.addEventListener('error', () => {
    console.error('Error al leer la imagen');
  });
  fr.readAsDataURL(myFile);
}

// SECCION DE COMPARTIR
// Se genera el enlace para compartir en Facebook
function renderFacebookShare(cardURL) {
  if (!facebookShareBtn || !cardURL) {
    return;
  }

  const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    cardURL,
  )}`;

  facebookShareBtn.href = facebookShareURL;
  facebookShareBtn.target = '_blank';
  facebookShareBtn.rel = 'noopener noreferrer';
  facebookShareBtn.classList.remove('hidden');
}

function handleCreateCard(ev) {
  ev.preventDefault();
  console.log('handleCreateCard ejecutada');

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

  shareResult.classList.add('hidden');
  shareError.classList.add('hidden');

  if (facebookShareBtn) {
    facebookShareBtn.classList.add('hidden');
  }

  fetch('https://api-pw.dev.adalab.es/api/info/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objToSend),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.success === true) {
        shareResult.classList.remove('hidden');

        if (response.cardURL) {
          shareLink.href = response.cardURL;
          shareLink.textContent = response.cardURL;
          renderFacebookShare(response.cardURL);
        }
      } else {
        shareError.classList.remove('hidden');
      }
    })
    .catch(() => {
      shareError.classList.remove('hidden');
    });
}

/*SECCIÓN DE FUNCIONES DE EVENTOS*/
// Escuchamos a todos los inputs del formulario
if (burgerMenuBtn) {
  burgerMenuBtn.addEventListener('click', handleClickMenuBurger);
}

if (tabDesignBtn) {
  tabDesignBtn.addEventListener('click', handleClickDesignBtn);
}

if (tabFillBtn) {
  tabFillBtn.addEventListener('click', handleClickFillBtn);
}

if (tabShareBtn) {
  tabShareBtn.addEventListener('click', handleClickShareBtn);
}

if (fillForm && finalPreview) {
  for (const input of fillInputs) {
    input.addEventListener('input', handleInputFill);
  }

  // Botón para borrar los resultados
  resetButton.addEventListener('click', handleClickReset);
  // Submit del form
  fillForm.addEventListener('submit', handleSubmitFillForm);

  /*SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA - EJECUCIÓN*/
  // Recuperar los datos guardados (si es que existen)
  loadFillDataFromLocalStorage();

  // Pintar la preview al entrar en Rellena
  renderPreview();

  // Ajustar el estado inicial de los botones
  validateForm();
  toggleResetButton();

  if (createBtn) {
    createBtn.addEventListener('click', handleCreateCard);
  }

  if (fileField) {
    fileField.addEventListener('change', getImage);
  }

  /*AL CARGAR*/
  renderDefault();

  if (fillData.photo) {
    profileImage.style.backgroundImage = `url(${fillData.photo})`;
  }
}
