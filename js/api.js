const BASE_URL = 'https://30.javascript.pages.academy/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const HttpsMethod = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  [HttpsMethod.GET]: 'Данные с сервера не загрузились',
  [HttpsMethod.POST]: 'Не удалось загрузить данные',
};

//Создаём общую функцию запроса
const request = async (url, method = HttpsMethod, body = null) => {
  const response = await fetch(url, { method, body });
  if (! response.ok) {
    throw new Error(ErrorText[method]);
  }

  return response.json();
};

//Функция получения данных

const getData = async () => request(BASE_URL + Route.GET_DATA, HttpsMethod.GET);

//Функция отправки данных
const sendData = async (photos) => request(BASE_URL + Route.SEND_DATA, HttpsMethod.POST, photos);

export { getData, sendData };
