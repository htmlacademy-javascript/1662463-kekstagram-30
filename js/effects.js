import { Effect, EFFECT_TO_FILTER, EFFECT_TO_SLIDER_OPTIONS } from './constans.js';

const imgUploaderElement = document.querySelector('.img-upload');
const imgPreviewElement = imgUploaderElement.querySelector('.img-upload__preview img');
const sliderElement = imgUploaderElement.querySelector('.effect-level__slider');
const sliderWrapperElement = imgUploaderElement.querySelector('.img-upload__effect-level');
const effectLevelElement = imgUploaderElement.querySelector('.effect-level__value');
const effectsContainerElement = imgUploaderElement.querySelector('.effects__list');
const defaultRadioElement = imgUploaderElement.querySelector('#effect-none');

const isDefault = (chosenEffect) => chosenEffect === Effect.DEFAULT;

const renderEffect = ({ style, unit }) => {
  imgPreviewElement.style.filter = `${style}(${effectLevelElement.value}${unit})`;
};

const createSlider = ({ min, max, step }) => {
  noUiSlider.create(sliderElement, {
    range: { min, max },
    step,
    start: max,
    connect: 'lower',
    format: {
      to: (value) => Number(value),
      from: (value) => Number(value),
    }
  });
  sliderElement.noUiSlider.on('update', () => {
    effectLevelElement.value = sliderElement.noUiSlider.get();
    renderEffect(EFFECT_TO_FILTER[document.querySelector('.effects__radio:checked').value]);
  });
};

const updateSlider = ({ min, max, step }) => {
  sliderElement.noUiSlider.updateOptions({
    range: { min, max },
    step,
    start: max,
  });
};

createSlider({ min: 0, max: 100, step: 1 });

const resetImage = () => {
  imgPreviewElement.style.filter = '';
};

const showSlider = () => {
  sliderWrapperElement.classList.remove('hidden');
};

const hideSlider = () => {
  sliderWrapperElement.classList.add('hidden');
};

const setDefaultEffect = () => {
  hideSlider();
  resetImage();
};

const checkDefaultRadio = () => {
  defaultRadioElement.checked = true;
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

export { resetEffects };

