import { COMMENTS_SHOWN } from './constans.js';
import { isEscape } from './util.js';

const modalElement = document.querySelector('.big-picture');
const closeModalButtonElement = modalElement.querySelector('.big-picture__cancel');
const commentElement = document
  .querySelector('#comment')
  .content.querySelector('.social__comment');
const commentsListElement = modalElement.querySelector('.social__comments');
const commentCountElement = modalElement.querySelector('.social__comment-shown-count');
const totalCommentCount = modalElement.querySelector('.social__comment-total-count');
const commentsLoaderElement = modalElement.querySelector('.comments-loader');

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
    commentsLoaderElement.classList.add('hidden');
    commentsCountShown = commentsArray.length;
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }

  const commentsFragment = document.createDocumentFragment();
  for (let i = 0; i < commentsCountShown; i++) {
    const comment = createComment(commentsArray[i]);
    commentsFragment.append(comment);
  }

  commentsListElement.innerHTML = '';
  commentsListElement.append(commentsFragment);

  commentCountElement.textContent = commentsCountShown;
  totalCommentCount.textContent = commentsArray.length;
};

const onCommentsLoaderClick = () => renderComments();
commentsLoaderElement.addEventListener('click', onCommentsLoaderClick);

const renderPicture = ({ url, description, likes }) => {
  modalElement.querySelector('.big-picture__img img').src = url;
  modalElement.querySelector('.big-picture__img img').alt = description;
  modalElement.querySelector('.likes-count').textContent = likes;
  modalElement.querySelector('.social__caption').textContent = description;
};

const showModal = (photoData) => {
  modalElement.classList.remove('hidden');
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
  modalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscKeydown);
};

closeModalButtonElement.addEventListener('click', () => {
  hideModal();
});

function onModalEscKeydown (evt) {
  if (isEscape) {
    evt.preventDefault();
    hideModal();
  }
}

export { showModal };

