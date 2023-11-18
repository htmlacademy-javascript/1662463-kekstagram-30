import { renderGallery } from './gallery.js';

const picturesContainer = document.querySelector('.pictures');

const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('a');

const picturesFragment = document.createDocumentFragment();

const createThumbnails = (getPictures) => {
  getPictures.forEach(({ url, description, comments, likes, id }) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.dataset.thumbnailId = id;
    picturesFragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(picturesFragment);
  renderGallery(getPictures);
};

export { createThumbnails };
