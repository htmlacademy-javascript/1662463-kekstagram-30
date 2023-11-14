import { getPhotos } from './data.js';
import { createThumbnails } from './thumbnails.js';
import { PHOTOS_COUNT } from './constans.js';
import './form.js';
import { getData, sendData } from './api.js';
import { showErrormessage } from './errors.js';

// const photos = getPhotos(PHOTOS_COUNT);
// createThumbnails(photos);

const uploadData = async () => {
  try {
    const pictures = await getData();
    createThumbnails(pictures);
  } catch (error) {
    showErrormessage();
  }
};

uploadData();



