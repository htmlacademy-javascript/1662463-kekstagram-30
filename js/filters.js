const filter = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');
const defaultButton = filterForm.querySelector('#filter-default');
const randomButton = filterForm.querySelector('#filter-random');
const discussedButton = filterForm.querySelector('#filter-discussed');
const currentButton = filterForm.querySelector('.img-filters__button--active');

const MAX_RANDOM_FILTER = 10;

const filterGroup = {
  DEFAULT: 'default',
  RANDOM: 'random',
  DISCUSSED: 'discussed',
};

const getRandomIndex = (max, min) => {
  return Math.floor(Math.random()*(max-min));
};

const filterHandlers = {
  [filterGroup.DEFAULT]: (data) => {
    return data;
  },
  [filterGroup.RANDOM]: (data) => {},
  [filterGroup.DISCUSSED]: (data) => {};
};

const onActiveButton = (event) => {
  currentButton.classList.remove('img-filters__button--active');
  event.target.classList.add('img-filters__button--active');
};

const showFilter = () => {
  filter.classList.remove('img-filters--inactive');
  DISCUSSEDButton.addEventListener('click', onActiveButton);
};
randomButton.addEventListener('click', onActiveButton);
discussedButton.addEventListener('click', onActiveButton);

export { showFilter };
