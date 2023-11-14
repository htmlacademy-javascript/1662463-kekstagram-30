const SERVER_URL = 'https://30.javascript.pages.academy/kekstagram/data';

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

const getData = async () => {
  return request(SERVER_URL, HttpsMethod.GET);
}

//Функция отправки данных
const sendData = async (photos) => {
  return request(SERVER_URL, HttpsMethod.POST, photos);
};

export { getData, sendData };
