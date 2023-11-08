import { getPhotos } from './data.js';
import { createThumbnails } from './thumbnails.js';
import { PHOTOS_COUNT } from './constans.js';
import './form.js';

const photos = getPhotos(PHOTOS_COUNT);

createThumbnails(photos);

