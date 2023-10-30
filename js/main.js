import { getPhotos } from './data.js';
import { anotherUsers } from './thumbnails.js';
import { PHOTOS_COUNT } from './constans.js';
import './thumbnails.js';

// eslint-disable-next-line no-console
console.log(getPhotos(PHOTOS_COUNT));

anotherUsers(getPhotos);
