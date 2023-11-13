import { MAX_HASHTAGS_COUNT, VALID_SYMBOLS, ERROR_TEXT } from './constans.js';
import { resetScale } from './scale.js';
import {resetEffects} from './effects.js';

const imgForm = document.querySelector('.img-upload__form');
const overlay = imgForm.querySelector('.img-upload__overlay');
const cancelButton = imgForm.querySelector('.img-upload__cancel');
const fileField = imgForm.querySelector('.img-upload__input');
const hashTagField = imgForm.querySelector('.text__hashtags');
const commentField = imgForm.querySelector('.text__description');



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
const isTextFieldFocused = () => {
  document.activeElement === hashTagField ||
    document.activeElement === commentField;
};

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

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
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

const onImgFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
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


