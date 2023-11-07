import { COMMENTS_SHOWN } from './constans.js';


const modal = document.querySelector('.big-picture');
const closeModalButton = modal.querySelector('.big-picture__cancel');

const commentElement = document
  .querySelector('#comment')
  .content.querySelector('.social__comment');

const commentsList = modal.querySelector('.social__comments');
const commentCount = modal.querySelector('.social__comment-shown-count');
const totalCommentCount = modal.querySelector('.social__comment-total-count');
const commentsLoader = modal.querySelector('.comments-loader');

let commentsCountShown = 0;
let commentsArray = [];

const createComment = ({ avatar, name, message }) => {
  const newComment = commentElement.cloneNode(true);

  newComment.querySelector('.social__picture').src = avatar;
  newComment.querySelector('.social__picture').alt = name;
  newComment.querySelector('.social__text').textContent = message;

  return newComment;
};

const renderComments = () => {
  commentsCountShown += COMMENTS_SHOWN;

  if (commentsCountShown >= commentsArray.length) {
    commentsLoader.classList.add('hidden');
    commentsCountShown = commentsArray.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const commentsFragment = document.createDocumentFragment();
  for (let i = 0; i < commentsCountShown; i++) {
    const comment = createComment(commentsArray[i]);
    commentsFragment.append(comment);
  }

  commentsList.innerHTML = '';
  commentsList.append(commentsFragment);

  commentCount.textContent = commentsCountShown;
  totalCommentCount.textContent = commentsArray.length;
};

const onCommentsLoaderClick = () => renderComments();
commentsLoader.addEventListener('click', onCommentsLoaderClick);

const renderPicture = ({ url, description, likes }) => {
  modal.querySelector('.big-picture__img img').src = url;
  modal.querySelector('.big-picture__img img').alt = description;
  modal.querySelector('.likes-count').textContent = likes;
  modal.querySelector('.social__caption').textContent = description;
};

const showModal = (photoData) => {
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeydown);

  renderPicture(photoData);

  commentsArray = photoData.comments;
  if (commentsArray.length > 0) {
    renderComments();
  }
};

const hideModal = () => {
  commentsCountShown = 0;
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscKeydown);
};

closeModalButton.addEventListener('click', () => {
  hideModal();
});

const onModalEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideModal();
  }
};


export { showModal };

