const picturesContainer = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#pictire').content.querySelector('a');

const picturesContainerFragment = document.createDocumentFragment();

const createThumbnails = (getPhotos) => {
  getPhotos.forEach(({ url, description, comments, likes }) => {
    const pictireElement = pictureTemplate.cloneNode(true);
    pictireElement.querySelector('.picture__img').src = url;
    pictireElement.querySelector('.picture__img').alt = description;
    pictireElement.querySelector('.picture__comments').textContent = comments.length;
    pictireElement.querySelector('picture__likes').textContent = likes;
    picturesContainerFragment.appendChild(pictireElement);
  });

  picturesContainer.appendChild(picturesContainerFragment);
};

export { createThumbnails };
