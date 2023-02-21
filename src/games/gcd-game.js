import getRandomIntInclusive from '../getRandomIntInclusive.js';

const getGCDRules = () => 'Find the greatest common divisor of given numbers.';

const getGCDQuestionAndAnswer = (minRandomValue, maxRandomValue) => {
  let num1 = getRandomIntInclusive(minRandomValue, maxRandomValue);
  let num2 = getRandomIntInclusive(minRandomValue, maxRandomValue);

  const question = `${num1} ${num2}`;

  /* count a correct answer */
  while (num1 && num2) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  const answer = `${num1 + num2}`;

  return [question, answer];
};

export { getGCDRules, getGCDQuestionAndAnswer };
