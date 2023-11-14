const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const HIDE_TIMEOUT_MESSAGE = 5000;


//Добавляем сообщение об ошибке
const showErrormessage = () => {
  const errorElement = dataErrorTemplate.cloneNode(true);
  document.body.append(errorElement);
  //  Сообщение об ошибке скрывается через 5 секунд (setTimeOut = не раньше)
  setTimeout(() => {
    errorElement.remove();
  }, HIDE_TIMEOUT_MESSAGE);
};

export { showErrormessage };
