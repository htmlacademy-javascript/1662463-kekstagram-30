const filter = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');
const defaultButton = filterForm.querySelector('#filter-default');
const randomButton = filterForm.querySelector('.#filter-random');
const discussedButton = filterForm.querySelector('.#filter-discussed');

const filterGroup = {
  DEFAULT: 'default',
  RANDOM: 'random',
  DISCUSSED: 'discussed',
};

const showFilter = () => {
  filter.classList.remove('img-filters--inactive');
};

export { showFilter };
