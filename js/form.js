import { MAX_HASHTAGS_COUNT, VALID_SYMBOLS, ERROR_TEXT } from './constans.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { sendData } from './api.js';
import { openErrorMessage, openSuccessMessage } from './messages.js';


const imgForm = document.querySelector('.img-upload__form');
const overlay = imgForm.querySelector('.img-upload__overlay');
const cancelButton = imgForm.querySelector('.img-upload__cancel');
const fileField = imgForm.querySelector('.img-upload__input');
const hashTagField = imgForm.querySelector('.text__hashtags');
const commentField = imgForm.querySelector('.text__description');
const submitButton = imgForm.querySelector('.img-upload__submit');
const photoPreview = document.querySelector('.img-upload__preview-picture');
const effectsPreview = document.querySelectorAll('.effects__preview');

const submitButtonText = {
  POSTING: 'Публикую',
  IDLE: 'Опубликовать',
};

const pristine = new Pristine(imgForm, {
  // class of the parent element where the error/success class is added
  classTo: 'img-upload__field-wrapper',
  // class of the parent element where error text element is appended
  errorTextParent: 'img-upload__field-wrapper',
  // class of the error text element
  errorTextClass: 'img-upload__field-wrapper--error',
});


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
  pristine.reset();
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};


// Фокус в поле ввода
const isTextFieldFocused = () =>
  document.activeElement === hashTagField ||
  document.activeElement === commentField;


const normilizeTags = (tagString) => tagString
  .trim() //удаляет пробелы в начале и конце строки
  .split(' ') //разделение строки
  .filter((tag) => Boolean(tag.length));

const hasValidTags = (value) => normilizeTags(value).every((tag) => VALID_SYMBOLS.test(tag));

const hasValidCount = (value) => normilizeTags(value).length <= MAX_HASHTAGS_COUNT;

const hasUniqueTags = (value) => {
  const lowerCaseTags = normilizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
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
  if (!pristine.validate()) {
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
  pristine.validate();
  sendForm(evt.target);
};

//validate hashTags

pristine.addValidator(
  hashTagField,
  hasValidCount,
  ERROR_TEXT.INVALID_COUNT,
  3, //порядок определения
  true
);

pristine.addValidator(
  hashTagField,
  hasUniqueTags,
  ERROR_TEXT.NOT_UNIQUE,
  2,
  true
);

pristine.addValidator(
  hashTagField,
  hasValidTags,
  ERROR_TEXT.INVALID_PATTERN,
  1,
  true
);

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
