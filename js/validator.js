import { MAX_HASHTAGS_COUNT, VALID_SYMBOLS, ERROR_TEXT } from './constans.js';

const imgForm = document.querySelector('.img-upload__form');
const commentField = imgForm.querySelector('.text__description');
const hashTagField = imgForm.querySelector('.text__hashtags');

const pristine = new Pristine(imgForm, {
  // class of the parent element where the error/success class is added
  classTo: 'img-upload__field-wrapper',
  // class of the parent element where error text element is appended
  errorTextParent: 'img-upload__field-wrapper',
  // class of the error text element
  errorTextClass: 'img-upload__field-wrapper--error',
});

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

const isValid = () => pristine.validate();
const resetValid = () => pristine.reset();

export { isTextFieldFocused, isValid, resetValid };
