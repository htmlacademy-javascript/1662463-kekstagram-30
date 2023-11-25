import {SCALE_STEP, MIN_SCALE, MAX_SCALE, DEFAULT_SCALE} from './constans.js';

const imgUploader = document.querySelector('.img-upload');
const imgPreview = imgUploader.querySelector('.img-upload__preview img');
const smallerButton = imgUploader.querySelector('.scale__control--smaller');
const biggerButton = imgUploader.querySelector('.scale__control--bigger');
const scaleInput = imgUploader.querySelector('.scale__control--value');

const scaleImage = (value) => {
  imgPreview.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  scaleImage (
    Math.max(parseInt(scaleInput.value, 10) - SCALE_STEP, MIN_SCALE)
  );
};

const onBiggerButtonClick = () => {
  scaleImage (
    Math.min(parseInt(scaleInput.value, 10) + SCALE_STEP, MAX_SCALE)
  );
};

const resetScale = () => scaleImage(DEFAULT_SCALE);

smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);

export { resetScale };
