import { isTextFieldFocused, isValid, resetValid } from './validator.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { sendData } from './api.js';
import { openErrorMessage, openSuccessMessage } from './messages.js';
import { submitButtonText } from './constans.js';

const imgForm = document.querySelector('.img-upload__form');
const overlay = imgForm.querySelector('.img-upload__overlay');
const cancelButton = imgForm.querySelector('.img-upload__cancel');
const fileField = imgForm.querySelector('.img-upload__input');
const submitButton = imgForm.querySelector('.img-upload__submit');
const photoPreview = document.querySelector('.img-upload__preview-picture');
const effectsPreview = document.querySelectorAll('.effects__preview');

const showForm = () => {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  resetEffects();
};

const hideForm = () => {
  imgForm.reset();
  resetScale();
  resetValid();
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const isErrorMessageOpen = () => Boolean(document.querySelector('.error'));

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused() && !isErrorMessageOpen()) {
    evt.preventDefault();
    hideForm();
  }
}

const onCancelButtonClick = () => {
  hideForm();
};

const onFileInputChange = () => {
  showForm();
};

const changeSubmitButton = (isBlocked) => {
  submitButton.disabled = isBlocked;
  if (isBlocked) {
    submitButton.textContent = submitButtonText.POSTING;
  } else {
    submitButton.textContent = submitButtonText.IDLE;
  }
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
  isValid();
  sendForm(evt.target);
};

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);
imgForm.addEventListener('submit', onImgFormSubmit);

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
