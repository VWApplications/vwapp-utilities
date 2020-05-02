import { onlyNumbers } from "../utilities";

export const normalizeCardNumber = value => {
  if (!value) {
    return value;
  }

  const numbers = onlyNumbers(value);

  const result = `${numbers.slice(0, 4)} ${numbers.slice(4, 8)} ${numbers.slice(8, 12)} ${numbers.slice(12, 16)}`;

  return result.trim();
};

export const normalizeCardExpirationDate = value => {
  if (!value) {
    return value;
  }

  const numbers = onlyNumbers(value);

  if (numbers.length >= 3) {
    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}`;
  }

  return numbers;
};

export const normalizeCardCVC = value => {
  if (!value) {
    return value;
  }

  const numbers = onlyNumbers(value);

  return numbers.slice(0, 3);
};
