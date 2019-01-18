import { play } from '../index';
import getRandomInteger from '../utils';

const minNumber = 10;
const maxNumber = 200;

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getGameData = () => {
  const question = `${getRandomInteger(minNumber, maxNumber)}`;
  const answer = isPrime(question) ? 'yes' : 'no';
  
  return { question, answer };
};

export default () => {
  play(description, getGameData);
};
