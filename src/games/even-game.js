import getRandomIntInclusive from '../getRandomIntInclusive.js';

const getEvenRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const getEvenQuestionAndCount = (minRandomValue, maxRandomValue) => {
  /* get random number (question) in given range */
  const question = getRandomIntInclusive(minRandomValue, maxRandomValue);
  /* if even then correct answer (count) is 'yes', otherwise "no" */
  const count = question % 2 ? 'no' : 'yes';
  return [question, count];
};

export { getEvenRules, getEvenQuestionAndCount };
