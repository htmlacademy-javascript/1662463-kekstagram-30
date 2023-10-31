const picturesContainer = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content.querySelector('a');

const picturesContainerFragment = document.createDocumentFragment();

const createThumbnails = (getPhotos) => {
  getPhotos.forEach(({ url, description, comments, likes }) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    picturesContainerFragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(picturesContainerFragment);
};

export { createThumbnails };
