const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export {getRandomInteger};

const getUniqueRandomInteger = (a, b) => {
  const arr = [];
  return function () {
    let flag = true;
    let randomInteger;
    if (arr.length >= (b - a + 1)) { //важное условие прекращения цикла
      // console.error(`Перебраны все числа из диапазона от ${b} до ${a}`);
      return null;
    }
    while (flag) {
      randomInteger = getRandomInteger(a, b);
      if (!arr.includes(randomInteger)) {
        arr.push(randomInteger);
        flag = false;
      }
    }
    return randomInteger;
  };
};

export {getUniqueRandomInteger};
