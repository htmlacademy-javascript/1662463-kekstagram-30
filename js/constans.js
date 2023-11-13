export const PHOTOS_COUNT = 25;
export const DESCRIPTIONS = [
  'Фотография не является отражением реальности',
  'Природа, обращённая к камере - это не та природа, что обращена к глазу',
  'В любой ситуации улыбайтесь',
  'Фотография — застывший эпизод жизни',
  'Делайте в вашей жизни то, что меньше заставляет вас смотреть в свой телефон',
];
export const MIN_LIKES = 15;
export const MAX_LIKES = 200;
export const MIN_COMMENTS = 0;
export const MAX_COMMENTS = 30;
export const COMMENTS_COUNT = 999;
export const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
];
export const NAMES = [
  'Артём',
  'Алиса',
  'Дмитрий',
  'Дарина',
  'Роберт',
  'Роксана',
];

export const COMMENTS_SHOWN = 5;

export const MAX_HASHTAGS_COUNT = 5;
export const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
export const ERROR_TEXT = {
  INVALID_COUNT: `Максимум ${MAX_HASHTAGS_COUNT} хэштегов`,
  NOT_UNIQUE: 'Хэштеги должны быть уникальными',
  INVALID_PATTERN: 'Неправильный хэштег',
};

export const SCALE_STEP = 25;
export const MIN_SCALE = 25;
export const MAX_SCALE = 100;
export const DEFAULT_SCALE = 100;

export const EFFECT = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

export const EFFECT_TO_FILTER = {
  [EFFECT.CHROME]: {
    style: 'grayscale',
    unit: '',
  },
  [EFFECT.SEPIA]: {
    style: 'sepia',
    unit: '',
  },
  [EFFECT.MARVIN]: {
    style: 'invert',
    unit: '%',
  },
  [EFFECT.PHOBOS]: {
    style: 'blur',
    unit: 'px',
  },
  [EFFECT.HEAT]: {
    style: 'brightness',
    unit: '',
  },
  [EFFECT.DEFAULT]: {
    style: '',
    unit: '',
  },
};

export const EFFECT_TO_SLIDER_OPTIONS = {
  [EFFECT.DEFAULT]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [EFFECT.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [EFFECT.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [EFFECT.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [EFFECT.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,
  },
  [EFFECT.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1,
  },
};
