import { createThumbnails } from './thumbnails.js';
import { MAX_RANDOM_FILTER, filterGroup } from './constans.js';
import { debounce, getRandomInteger } from './util.js';

const filter = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');
const defaultButton = filterForm.querySelector('#filter-default');
const randomButton = filterForm.querySelector('#filter-random');
const discussedButton = filterForm.querySelector('#filter-discussed');

const filterHandlers = {
  [filterGroup.DEFAULT]: (data) => data,
  [filterGroup.RANDOM]: (data) => {
    const randomList = [];
    const max = Math.min(MAX_RANDOM_FILTER, data.length);
    while (randomList.length < max) {
      const index = getRandomInteger(0, data.length - 1);
      if (!randomList.includes(index)) {
        randomList.push(index);
      }
    }
    return randomList.map((index) => data[index]);
  },
  [filterGroup.DISCUSSED]: (data) => [...data].sort((b, a) => (a.comments.length - b.comments.length)),
};

const renderActiveButton = (evt) => {
  filterForm.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');
};

//функция отрисовки отфильтрованных данных

const remake = (e, filterElement, data) => {
  const filteredData = filterHandlers[filterElement](data);
  createThumbnails(filteredData);
  renderActiveButton(e);
};

const debouncedRemake = debounce(remake);

const showFilter = (data) => {
  filter.classList.remove('img-filters--inactive');
  defaultButton.addEventListener('click', (event) => {
    debouncedRemake(event, filterGroup.DEFAULT, data);
  });
  randomButton.addEventListener('click', (event) => {
    debouncedRemake(event, filterGroup.RANDOM, data);
  });
  discussedButton.addEventListener('click', (event) => {
    debouncedRemake(event, filterGroup.DISCUSSED, data);
  });
};

export { showFilter };
