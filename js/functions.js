//Функция для проверки длины строки
/*
const validateForm = (string, maxLength) => (string.length <= maxLength);

console.log(validateForm('проверяемая строка', 20));
console.log(validateForm('проверяемая строка', 10));
console.log(validateForm('проверяемая строка', 18));

//Функция для проверки палиндрома

const isPalindrome = (line) => {
  const newLine = line.replaceAll(" ", "").toUpperCase();
  for (let i = 0; i < newLine.length / 2; i++) {
    if (newLine[i] !== newLine[newLine.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('топот'));
console.log(isPalindrome('ДовОд'));
console.log(isPalindrome('Кекс'));
console.log(isPalindrome('Лёша на полке клопа нашёл '));

const isPalindromeByArray = (line) => {
  const newLine = line.replaceAll(" ", "").toUpperCase();
  const reverseLine = newLine.split('').reverse().join('');
  return newLine === reverseLine;
}

console.log(isPalindromeByArray('топот'));
console.log(isPalindromeByArray('ДовОд'));
console.log(isPalindromeByArray('Кекс'));
console.log(isPalindromeByArray('Лёша на полке клопа нашёл '));

//Функция выявления числа из строки

const getNumber = (string) => {
  let result = '';
  const filterString = string.toString();
  for (let i = 0; i < filterString.length; i++) {
    if (!Number.isNaN(parseInt(filterString[i]))) {
      result += filterString[i];
    }
  }
  return parseInt(result);
}

console.log (getNumber('2023 год'));
console.log (getNumber('ECMAScript 2022'));
console.log (getNumber('1 кефир, 0.5 батона'));
console.log (getNumber('агент 007'));
console.log (getNumber('а я томат'));
console.log (getNumber(2023));
console.log (getNumber(-1));
console.log (getNumber(1.5));

//при помощи регулярного выражения

const getNumberByRegExp = (value) => parseInt(value.toString().replace(/[^0-9]/g,''));

console.log (getNumberByRegExp('2023 год'));
console.log (getNumberByRegExp('ECMAScript 2022'));
console.log (getNumberByRegExp('1 кефир, 0.5 батона'));
console.log (getNumberByRegExp('агент 007'));
console.log (getNumberByRegExp('а я томат'));
console.log (getNumberByRegExp(2023));
console.log (getNumberByRegExp(-1));
console.log (getNumberByRegExp(1.5));
*/
