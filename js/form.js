import { isTextFieldFocused, isValid, resetValid } from './validator.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { sendData } from './api.js';
import { openErrorMessage, openSuccessMessage } from './messages.js';
import { submitButtonText } from './constans.js';
import { isEscape } from './util.js';

const imgFormElement = document.querySelector('.img-upload__form');
const overlayElement = imgFormElement.querySelector('.img-upload__overlay');
const cancelButtonElement = imgFormElement.querySelector('.img-upload__cancel');
const fileFieldElement = imgFormElement.querySelector('.img-upload__input');
const submitButtonElement = imgFormElement.querySelector('.img-upload__submit');
const photoPreviewElement = document.querySelector('.img-upload__preview-picture');
const effectsPreviewElement = document.querySelectorAll('.effects__preview');

const showForm = () => {
  overlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  resetEffects();
};

const hideForm = () => {
  imgFormElement.reset();
  resetScale();
  resetValid();
  overlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const isErrorMessageOpen = () => Boolean(document.querySelector('.error'));

const onCancelButtonClick = () => {
  hideForm();
};

const onFileInputChange = () => {
  showForm();
};

const changeSubmitButton = (isBlocked) => {
  submitButtonElement.disabled = isBlocked;
  submitButtonElement.textContent = isBlocked ? submitButtonText.POSTING : submitButtonText.IDLE;
};

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
  sendForm(evt.target);
};

fileFieldElement.addEventListener('change', onFileInputChange);
cancelButtonElement.addEventListener('click', onCancelButtonClick);
imgFormElement.addEventListener('submit', onImgFormSubmit);

const onFileUploadInput = () => {
  fileFieldElement.addEventListener('change', () => {
    const file = fileFieldElement.files[0];
    photoPreviewElement.src = URL.createObjectURL(file);
    effectsPreviewElement.forEach((preview) => {
      preview.style.backgroundImage = `url('${photoPreviewElement.src}')`;
    });
    showForm();
  });
};

function onDocumentKeydown(evt) {
  if (isEscape(evt) && !isTextFieldFocused() && !isErrorMessageOpen()) {
    evt.preventDefault();
    hideForm();
  }
}

export { onFileUploadInput };
