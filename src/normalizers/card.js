import { onlyNumbers } from "../utilities";

export const normalizeCardNumber = value => {
  if (!value) {
    return value;
  }

  const numbers = onlyNumbers(value);

  if (numbers.length <= 4) return numbers;
  if (numbers <= 8) return `${numbers.slice(0, 4)} ${numbers.slice(4, 8)}`;
  if (numbers <= 12) return `${numbers.slice(0, 4)} ${numbers.slice(4, 8)} ${numbers.slice(8, 12)}`;
  if (numbers <= 16 || numbers > 16) return `${numbers.slice(0, 4)} ${numbers.slice(4, 8)} ${numbers.slice(8, 12)} ${numbers.slice(12, 16)}`;
};

export const normalizeCardExpirationDate = value => {
  if (!value) {
    return value;
  }

  const numbers = onlyNumbers(value);

  if (numbers.length <= 2) return numbers;
  if (numbers <= 4 || numbers > 4) return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}`;
};

export const normalizeCardCVC = value => {
  if (!value) {
    return value;
  }

  const numbers = onlyNumbers(value);

  if (numbers <= 4 || numbers > 4) return `${numbers.slice(0, 4)}`;
};
