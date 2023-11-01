const modal = document.querySelector('.big-picture');
const closeModalButton = modal.querySelector('.big-picture__cancel');


const showModal = () => {
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeydown);
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

