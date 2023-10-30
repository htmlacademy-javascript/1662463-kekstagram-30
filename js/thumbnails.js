const picturesContainer = document.querySelector('.pictures');

const userTemplate = document.querySelector('#pictire').content.querySelector('a');

const anotherUsersFragment = document.createDocumentFragment();

const anotherUsers = (getPhotos) => {
  getPhotos.forEach(({ url, description, comments, likes }) => {
    const userElement = userTemplate.cloneNode(true);
    userElement.querySelector('.picture__img').src = url;
    userElement.querySelector('.picture__img').alt = description;
    userElement.querySelector('.picture__comments').textContent = comments.length;
    userElement.querySelector('picture__likes').textContent = likes;
    anotherUsersFragment.appendChild(userElement);
  });

  picturesContainer.appendChild(anotherUsersFragment);
};

export { anotherUsers };
