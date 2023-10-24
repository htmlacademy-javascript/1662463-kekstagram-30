import {getRandomInteger, getUniqueRandomInteger} from './util.js';
import {
  PHOTOS_COUNT,
  DESCRIPTIONS,
  MIN_LIKES,
  MAX_LIKES,
  MIN_COMMENTS,
  MAX_COMMENTS,
  COMMENTS_COUNT,
  MESSAGES,
  NAMES
} from './constans.js';

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
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: getComments(getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)),
});

const getPhotos = (n) => Array.from({ length: n }, getPhoto);

export {getPhotos};
