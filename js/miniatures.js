import { getPhotos } from './data.js';


const picturesContainer = document.querySelector('pictures');

// const createList = () => {
//   const picturesList = document.createElement('ul');
//   picturesList.classList.add('pictures__list');
//   picturesContainer.append(picturesList);

//   const picturesListItem = document.createElement('li');
//   picturesListItem.classList.add('pictures__list-item');
//   picturesList.appendChild(picturesListItem);
// };

// createList();

const userTemplate = document.querySelector('#pictire').content.querySelector('a');

const anotherUsers = getPhotos();
const anotherUsersFragment = document.createDocumentFragment();

anotherUsers.forEach((url, description, comments, likes) => {
  const userElement = userTemplate.cloneNode(true);
  userElement.querySelector('src').textContent = url;
  userElement.querySelector('alt').textContent = description;
  userElement.querySelector('.picture__comments').textContent = comments;
  userElement.querySelector('picture__likes').textContent = likes;
});

picturesContainer.appendChild(anotherUsersFragment);
