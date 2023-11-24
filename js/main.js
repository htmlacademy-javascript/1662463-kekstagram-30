import { createThumbnails } from './thumbnails.js';
import './form.js';
import { getData } from './api.js';
import { showErrormessage } from './messages.js';
import { showFilter } from './filters.js';
import { onFileUploadInput } from './form.js';

const uploadData = async () => {
  try {
    const pictures = await getData();
    createThumbnails(pictures);
    showFilter(pictures);
  } catch (error) {
    showErrormessage();
  }
};
onFileUploadInput();
uploadData();
