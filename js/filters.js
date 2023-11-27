import { createThumbnails } from './thumbnails.js';
import { MAX_RANDOM_FILTER, filterGroup } from './constans.js';
import { debounce, getRandomInteger } from './util.js';

const filterElement = document.querySelector('.img-filters');
const filterFormElement = filterElement.querySelector('.img-filters__form');
const defaultButtonElement = filterElement.querySelector('#filter-default');
const randomButtonElement = filterElement.querySelector('#filter-random');
const discussedButtonElement = filterElement.querySelector('#filter-discussed');

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
  filterFormElement.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');
};

const remake = (filterItem, data) => {
  const filteredData = filterHandlers[filterItem](data);
  createThumbnails(filteredData);
};

const debouncedRemake = debounce(remake);

const showFilter = (data) => {
  filterElement.classList.remove('img-filters--inactive');
  defaultButtonElement.addEventListener('click', (evt) => {
    renderActiveButton(evt);
    debouncedRemake(filterGroup.DEFAULT, data);
  });
  randomButtonElement.addEventListener('click', (evt) => {
    renderActiveButton(evt);
    debouncedRemake(filterGroup.RANDOM, data);
  });
  discussedButtonElement.addEventListener('click', (evt) => {
    renderActiveButton(evt);
    debouncedRemake(filterGroup.DISCUSSED, data);
  });
};

export { showFilter };
