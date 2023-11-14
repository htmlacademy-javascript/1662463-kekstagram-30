const errorMessageTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const REMOVE_TIMEOUT_MESSAGE = 5000;


//Добавляем сообщение об ошибке
const showErrormessage = () => {
  const errorElement = errorMessageTemplate.cloneNode(true);
  document.body.append(errorElement);
  //  Сообщение об ошибке скрывается через 5 секунд
  setTimeout(() => {
    errorElement.remove();
  }, REMOVE_TIMEOUT_MESSAGE);
};

export { showErrormessage };
