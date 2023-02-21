import getRandomIntInclusive from '../getRandomIntInclusive.js';

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

const getPrimeRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrimeQuestionAndAnswer = (minRandomValue, maxRandomValue) => {
  const question = getRandomIntInclusive(minRandomValue, maxRandomValue);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export { getPrimeRules, getPrimeQuestionAndAnswer };
