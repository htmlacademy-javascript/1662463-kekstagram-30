import { HIDE_TIMEOUT_MESSAGE } from './constans.js';

const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const successButton = successMessage.querySelector('.success__button');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorMessage.querySelector('.error__button');

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

const onButtonEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideMessage();
  }
};

const onCloseButton = () => {
  hideMessage();
};

const onBodyClick = (evt) => {
  if (evt.target.closest('.success__inner') || evt.target.closest('.error__inner')) {
    return;
  }

  hideMessage();
};

const showMessage = (messageElement) => {
  const message = messageElement.cloneNode(true);
  message.querySelector('button').addEventListener('click', onCloseButton);
  document.body.append(message);
  document.addEventListener('keydown', onButtonEscKeydown);
  document.body.addEventListener('click', onBodyClick);
};

const openSuccessMessage = () => {
  showMessage(successMessage, successButton);
};

const openErrorMessage = () => {
  showMessage(errorMessage, errorButton);
};

export { showErrormessage, openSuccessMessage, openErrorMessage };
