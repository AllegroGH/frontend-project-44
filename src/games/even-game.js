import getRandomIntInclusive from '../getRandomIntInclusive.js';

const getEvenRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const getEvenQuestionAndAnswer = (minRandomValue, maxRandomValue) => {
  const question = getRandomIntInclusive(minRandomValue, maxRandomValue);
  const answer = question % 2 ? 'no' : 'yes';
  return [question, answer];
};

export { getEvenRules, getEvenQuestionAndAnswer };
