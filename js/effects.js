import { EFFECT, EFFECT_TO_FILTER, EFFECT_TO_SLIDER_OPTIONS } from "./constans.js";

const imgUploader = document.querySelector('.img-upload');
const imgPreview = imgUploader.querySelector('.img-upload__preview img');
const effects = imgUploader.querySelector('.effects');
const slider = imgUploader.querySelector('.effect-level__slider');
const sliderWrapper = imgUploader.querySelector('.img-upload__effect-level');
const effectLevel = imgUploader.querySelector('.effect-level__value');

// Эффект по умолчанию

let chosenEffect = EFFECT.DEFAULT;

const isDefault = () => chosenEffect === EFFECT.DEFAULT;

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
