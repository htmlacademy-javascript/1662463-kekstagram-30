import { Effect, EFFECT_TO_FILTER, EFFECT_TO_SLIDER_OPTIONS } from './constans.js';

const imgUploader = document.querySelector('.img-upload');
const imgPreview = imgUploader.querySelector('.img-upload__preview img');
const slider = imgUploader.querySelector('.effect-level__slider');
const sliderWrapper = imgUploader.querySelector('.img-upload__effect-level');
const effectLevel = imgUploader.querySelector('.effect-level__value');
const effectsContainerElement = imgUploader.querySelector('.effects__list');
const defaultRadio = imgUploader.querySelector('#effect-none');

const isDefault = (chosenEffect) => chosenEffect === Effect.DEFAULT;

const renderEffect = ({ style, unit }) => {
  imgPreview.style.filter = `${style}(${effectLevel.value}${unit})`;
};

// Создаём слайдер
const createSlider = ({ min, max, step }) => {
  noUiSlider.create(slider, {
    range: { min, max },
    step,
    start: max,
    connect: 'lower',
    format: {
      to: (value) => Number(value),
      from: (value) => Number(value),
    }
  });
  slider.noUiSlider.on('update', () => {
    effectLevel.value = slider.noUiSlider.get(); //актуальное значение слайдера
    renderEffect(EFFECT_TO_FILTER[document.querySelector('.effects__radio:checked').value]);
  });
};

// Обновление слайдера
const updateSlider = ({ min, max, step }) => {
  slider.noUiSlider.updateOptions({
    range: { min, max },
    step,
    start: max,
  });
};

createSlider({ min: 0, max: 100, step: 1 });

const resetImage = () => {
  imgPreview.style = '';
};

const showSlider = () => {
  sliderWrapper.classList.remove('hidden');
};

const hideSlider = () => {
  sliderWrapper.classList.add('hidden');
};

const setDefaultEffect = () => {
  hideSlider();
  resetImage();
};

const checkDefaultRadio = () => {
  defaultRadio.checked = true;
};

const resetEffects = () => {
  setDefaultEffect();
  checkDefaultRadio();
};

effectsContainerElement.addEventListener('change', (evt) => {
  if (isDefault(evt.target.value)) {
    setDefaultEffect();
  } else {
    showSlider();
    updateSlider(EFFECT_TO_SLIDER_OPTIONS[evt.target.value]);
    renderEffect(EFFECT_TO_FILTER[evt.target.value]);
  }
});

export {resetEffects};

