import getRandomIntInclusive from '../getRandomIntInclusive.js';

const getGCDRules = () => 'Find the greatest common divisor of given numbers.';

const getGCDQuestionAndCount = (minRandomValue, maxRandomValue) => {
  /* get random numbers in given range */
  let num1 = getRandomIntInclusive(minRandomValue, maxRandomValue);
  let num2 = getRandomIntInclusive(minRandomValue, maxRandomValue);
  /* form a question string */
  const question = `${num1} ${num2}`;

  /* count a correct answer */
  while (num1 && num2) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  const count = `${num1 + num2}`; // data type conversion

  return [question, count];
};

export { getGCDRules, getGCDQuestionAndCount };
