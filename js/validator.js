import { MAX_HASHTAGS_COUNT, VALID_SYMBOLS, ERROR_TEXT } from './constans.js';

const imgFormElement = document.querySelector('.img-upload__form');
const commentFieldElement = imgFormElement.querySelector('.text__description');
const hashTagFieldElement = imgFormElement.querySelector('.text__hashtags');

const pristine = new Pristine(imgFormElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const isTextFieldFocused = () =>
  document.activeElement === hashTagFieldElement ||
  document.activeElement === commentFieldElement;

const normilizeTags = (tagString) => tagString
  .trim()
  .split(' ')
  .filter((tag) => Boolean(tag.length));

const hasValidTags = (value) => normilizeTags(value).every((tag) => VALID_SYMBOLS.test(tag));

const hasValidCount = (value) => normilizeTags(value).length <= MAX_HASHTAGS_COUNT;

const hasUniqueTags = (value) => {
  const lowerCaseTags = normilizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

pristine.addValidator(
  hashTagFieldElement,
  hasValidCount,
  ERROR_TEXT.INVALID_COUNT,
  3,
  true
);

pristine.addValidator(
  hashTagFieldElement,
  hasUniqueTags,
  ERROR_TEXT.NOT_UNIQUE,
  2,
  true
);

pristine.addValidator(
  hashTagFieldElement,
  hasValidTags,
  ERROR_TEXT.INVALID_PATTERN,
  1,
  true
);

const isValid = () => pristine.validate();
const resetValid = () => pristine.reset();

export { isTextFieldFocused, isValid, resetValid };
