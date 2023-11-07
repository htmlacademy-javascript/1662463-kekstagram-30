const modal = document.querySelector('.big-picture');
const closeModalButton = modal.querySelector('.big-picture__cancel');


const renderPicture = ({ url, description, likes }) => {
  modal.querySelector('.big-picture__img img').src = url;
  modal.querySelector('.big-picture__img img').alt = description;
  modal.querySelector('.likes-count').textContent = likes;
  modal.querySelector('.social__caption').textContent = description;
};

const showModal = () => {
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');

  renderPicture();
};

const hideModal = () => {
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

