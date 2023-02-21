import getRandomIntInclusive from '../getRandomIntInclusive.js';

const getCalcRules = () => 'What is the result of the expression?';

const getCalcQuestionAndAnswer = (minRandomValue, maxRandomValue) => {
  const num1 = getRandomIntInclusive(minRandomValue, maxRandomValue);
  const num2 = getRandomIntInclusive(minRandomValue, maxRandomValue);

  const operations = ['+', '-', '*'];
  const operation = operations[getRandomIntInclusive(0, operations.length - 1)];
  const question = `${num1} ${operation} ${num2}`;

  let answer;
  switch (operation) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
  }
  answer = `${answer}`;

  return [question, answer];
};

export { getCalcRules, getCalcQuestionAndAnswer };
