/*id: 1;
url: 'photos/1.jpg'
description: 'описание фотографии'
likes: 15,
  comments: [] */

/* id, число — идентификатор опубликованной фотографии.
 Это число от 1 до 25.
 Идентификаторы не должны повторяться.

 url, строка — адрес картинки вида photos/{{i}}.jpg,
 где {{i}} — это число от 1 до 25.
 Адреса картинок не должны повторяться.

 description, строка — описание фотографии.
 Описание придумайте самостоятельно.

 likes, число — количество лайков, поставленных фотографии.
 Случайное число от 15 до 200.

 comments, массив объектов — список комментариев,
 оставленных другими пользователями к этой фотографии.
 Количество комментариев к каждой фотографии — случайное число от 0 до 30.
 Все комментарии генерируются случайным образом.
 Пример описания объекта с комментарием:
 {
  id: 135,
  avatar: 'img/avatar-6.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Артём',
}
 */

const PHOTOS_COUNT = 25;
const DESCRIPTIONS = [
  'Фотография не является отражением реальности',
  'Природа, обращённая к камере - это не та природа, что обращена к глазу',
  'В любой ситуации улыбайтесь',
  'Фотография — застывший эпизод жизни',
  'Делайте в вашей жизни то, что меньше заставляет вас смотреть в свой телефон',
];
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const COMMENTS_COUNT = 999;
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
];
const NAMES = [
  'Артём',
  'Алиса',
  'Дмитрий',
  'Дарина',
  'Роберт',
  'Роксана',
];
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getUniqueRandomInteger = (a, b) => {
  const arr = [];
  return function () {
    let flag = true;
    let randomInteger;
    if (arr.length >= (b - a + 1)) { //важное условие прекращения цикла
      // console.error(`Перебраны все числа из диапазона от ${b} до ${a}`);
      return null;
    }
    while (flag) {
      randomInteger = getRandomInteger(a, b);
      if (!arr.includes(randomInteger)) {
        arr.push(randomInteger);
        flag = false;
      }
    }
    return randomInteger;
  };
};

const getPhotoId = getUniqueRandomInteger(1, PHOTOS_COUNT);
const getImageId = getUniqueRandomInteger(1, PHOTOS_COUNT);
const getCommentId = getUniqueRandomInteger(0, COMMENTS_COUNT);

const getComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: MESSAGES[getRandomInteger(0, MESSAGES.length)],
  name: NAMES[getRandomInteger(0, NAMES.length)],
});

const getComments = (n) => Array.from({ length: n }, getComment);

const getPhoto = () => ({
  id: getPhotoId(),
  url: `photos/${getImageId()}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length)],
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: getComments(getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)),
});

const getPhotos = (n) => Array.from({ length: n }, getPhoto);

// console.log(getPhotos(PHOTOS_COUNT));
