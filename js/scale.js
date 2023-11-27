import {SCALE_STEP, MIN_SCALE, MAX_SCALE, DEFAULT_SCALE} from './constans.js';

const imgUploaderElement = document.querySelector('.img-upload');
const imgPreviewElement = imgUploaderElement.querySelector('.img-upload__preview img');
const smallerButtonElement = imgUploaderElement.querySelector('.scale__control--smaller');
const biggerButtonElement = imgUploaderElement.querySelector('.scale__control--bigger');
const scaleInputElement = imgUploaderElement.querySelector('.scale__control--value');

const scaleImage = (value) => {
  imgPreviewElement.style.transform = `scale(${value / 100})`;
  scaleInputElement.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  scaleImage (
    Math.max(parseInt(scaleInputElement.value, 10) - SCALE_STEP, MIN_SCALE)
  );
};

const onBiggerButtonClick = () => {
  scaleImage (
    Math.min(parseInt(scaleInputElement.value, 10) + SCALE_STEP, MAX_SCALE)
  );
};

const resetScale = () => scaleImage(DEFAULT_SCALE);

smallerButtonElement.addEventListener('click', onSmallerButtonClick);
biggerButtonElement.addEventListener('click', onBiggerButtonClick);

export { resetScale };
