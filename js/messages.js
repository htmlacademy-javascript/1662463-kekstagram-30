import { HIDE_TIMEOUT_MESSAGE } from './constans.js';
import { isEscape } from './util.js';

const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const successButtonElement = successMessageTemplate.querySelector('.success__button');
const errorButtonElement = errorMessageTemplate.querySelector('.error__button');

const showErrormessage = () => {
  const errorElement = dataErrorTemplate.cloneNode(true);
  document.body.append(errorElement);
  setTimeout(() => {
    errorElement.remove();
  }, HIDE_TIMEOUT_MESSAGE);
};

const hideMessage = () => {
  const currentElement = document.querySelector('.success') || document.querySelector('.error');
  currentElement.remove();
  document.removeEventListener('keydown', onButtonEscKeydown);
  document.body.removeEventListener('click', onBodyClick);
};

function onButtonEscKeydown (evt) {
  if (isEscape(evt)) {
    evt.preventDefault();
    hideMessage();
  }
}

const onCloseButton = () => {
  hideMessage();
};

function onBodyClick (evt) {
  if (evt.target.closest('.success__inner') || evt.target.closest('.error__inner')) {
    return;
  }
  hideMessage();
}

const showMessage = (messageElement) => {
  const message = messageElement.cloneNode(true);
  message.querySelector('button').addEventListener('click', onCloseButton);
  document.body.append(message);
  document.addEventListener('keydown', onButtonEscKeydown);
  document.body.addEventListener('click', onBodyClick);
};

const openSuccessMessage = () => {
  showMessage(successMessageTemplate, successButtonElement);
};

const openErrorMessage = () => {
  showMessage(errorMessageTemplate, errorButtonElement);
};

export { showErrormessage, openSuccessMessage, openErrorMessage };
