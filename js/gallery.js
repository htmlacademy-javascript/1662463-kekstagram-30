import { showModal } from './modal.js';

const picturesContainer = document.querySelector('.pictures');

const photosArray = [];

const renderGallery = (photos) => {
  photosArray.length = 0;
  photosArray.push(...photos.slice());
};

picturesContainer.addEventListener('click', (evt) => {
  const thumbnail = evt.target.closest('[data-thumbnail-id]');

  if (!thumbnail) {
    return;
  }
  evt.preventDefault();
  const thumbnailId = + thumbnail.dataset.thumbnailId;
  const photoData = photosArray.find(({ id }) => id === thumbnailId);
  showModal(photoData);
});

export { renderGallery };
