import { getPhotos } from './data.js';
import { createThumbnails } from './thumbnails.js';
import { PHOTOS_COUNT } from './constans.js';

const photos = getPhotos(PHOTOS_COUNT);
console.log(photos);

createThumbnails(photos);
