import { getPhotos } from './data.js';
import { showModal } from './modal.js';

const picturesContainer = document.querySelector('.pictures');

const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('a');

const picturesFragment = document.createDocumentFragment();

const createThumbnails = (getPhotos) => {
  getPhotos.forEach(({ url, description, comments, likes, id }) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.dataset.thumbnailId = id;
    picturesFragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(picturesFragment);
  renderGallery(getPhotos);
};

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

export { createThumbnails };
