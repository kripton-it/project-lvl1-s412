export const getRandomInteger = (min, max) => {
  const randomInteger = Math.round(min - 0.5 + Math.random() * (max - min + 1));
  return randomInteger;
};

export const isEven = number => number % 2 === 0;
