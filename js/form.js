import { isTextFieldFocused, isValid, resetValid } from './validator.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { sendData } from './api.js';
import { openErrorMessage, openSuccessMessage } from './messages.js';


const imgForm = document.querySelector('.img-upload__form');
const overlay = imgForm.querySelector('.img-upload__overlay');
const cancelButton = imgForm.querySelector('.img-upload__cancel');
const fileField = imgForm.querySelector('.img-upload__input');
const submitButton = imgForm.querySelector('.img-upload__submit');
const photoPreview = document.querySelector('.img-upload__preview-picture');
const effectsPreview = document.querySelectorAll('.effects__preview');

const submitButtonText = {
  POSTING: 'Публикую',
  IDLE: 'Опубликовать',
};


//open form
const showForm = () => {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  resetEffects();
};

//close form
const hideForm = () => {
  imgForm.reset();
  resetScale();
  resetValid();
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const isErrorMessageOpen = () => Boolean(document.querySelector('.error'));

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape' && !isTextFieldFocused() && !isErrorMessageOpen()) {
    evt.preventDefault();
    hideForm();
  }
};

const onCancelButtonClick = () => {
  hideForm();
};

const onFileInputChange = () => {
  showForm();
};

// Функция переключения кнопки отправки формы

const changeSubmitButton = (isBlocked) => {
  submitButton.disabled = isBlocked;
  if (isBlocked) {
    submitButton.textContent = submitButtonText.POSTING;
  } else {
    submitButton.textContent = submitButtonText.IDLE;
  }
};

// Функция отправки формы

const sendForm = async (formElement) => {
  if (!isValid()) {
    return;
  }
  try {
    changeSubmitButton(true);
    await sendData(new FormData(formElement));
    changeSubmitButton(false);
    hideForm();
    openSuccessMessage();
  } catch {
    openErrorMessage();
    changeSubmitButton(false);
  }
};

const onImgFormSubmit = (evt) => {
  evt.preventDefault();
  isValid();
  sendForm(evt.target);
};

// Events

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);
imgForm.addEventListener('submit', onImgFormSubmit);

//Функция загрузки фотографии

const onFileUploadInput = () => {
  fileField.addEventListener('change', () => {
    const file = fileField.files[0];
    photoPreview.src = URL.createObjectURL(file);
    effectsPreview.forEach((preview) => {
      preview.style.backgroundImage = `url('${photoPreview.src}')`;
    });
    showForm();
  });
};

export { onFileUploadInput };
