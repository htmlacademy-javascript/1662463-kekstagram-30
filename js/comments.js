const commentElement = document
  .querySelector('#comment')
  .content.querySelector('.social__comment');

const modal = document.querySelector('.big-picture');
const commentsList = modal.querySelector('.social__comments');
const commentCount = modal.querySelector('.social__comment-count');
const totalCommentCount = modal.querySelector('.social__comment-total-count');
const commentsLoader = modal.querySelector('.comments-loader');


const createComment = ({ avatar, name, message, }) => {
  const newComment = commentElement.cloneNode(true);

  newComment.querySelector('.social__picture').src = avatar;
  newComment.querySelector('.social__picture').alt = name;
  newComment.querySelector('.social__text').textContent = message;

  return newComment;
};

const renderComments = (comments) => {
  commentsList.innerHTML = '';
  const commentsFragment = document.createDocumentFragment();
  comments.forEach((item) => {
    const comment = createComment(item);
    commentsFragment.append(comment);
  });

  commentsList.append(commentsFragment);

};

const hideCommentCount = () => {
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
};

export { renderComments, hideCommentCount };
