import { showModal } from './modal.js';

const picturesContainer = document.querySelector('.pictures');

const renderGallery = (getPhotos) => {
  picturesContainer.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');

    if (!thumbnail) {
      return;
    }
    evt.preventDefault();

    const thumbnailId = + thumbnail.dataset.thumbnailId;
    const photoData = getPhotos.find(({ id }) => id === thumbnailId);
    showModal(photoData);
  });
};

export { renderGallery };
