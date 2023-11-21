// import { getPhotos } from './data.js';
import { createThumbnails } from './thumbnails.js';
// import { PHOTOS_COUNT } from './constans.js';
import './form.js';
import { getData } from './api.js';
import { showErrormessage } from './messages.js';
import { showFilter } from './filters.js';
import { onFileUploadInput } from './form.js';

// const photos = getPhotos(PHOTOS_COUNT);
// createThumbnails(photos);

const uploadData = async () => {
  try {
    const pictures = await getData();
    createThumbnails(pictures);
    showFilter();
  } catch (error) {
    showErrormessage();
  }
};
onFileUploadInput();
uploadData();
