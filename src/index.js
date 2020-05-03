import { isEmpty, formatWithLeftZero, replaceAll, makeURL, toBoolean, onlyNumbers, toString } from "./utilities";
import { validateCpf, validateCnpj, validateEmail, validatePhone, validatePhoto, isNumber } from "./validations";
import {
  normalizeDate, normalizeTime, normalizeDatetime, normalizeCPF, normalizeCNPJ,
  normalizeValue, normalizePhone, normalizeZipCode, normalizeCardNumber,
  normalizeCardExpirationDate, normalizeCardCVC
} from "./normalizers";

export const To = {
  DATE: "DATE",
  TIME: "TIME",
  DATETIME: "DATETIME",
  CPF: "CPF",
  CNPJ: "CNPJ",
  MONEY: "MONEY",
  PHONE: "PHONE",
  ZIP_CODE: "ZIP_CODE",
  NUMBER: "NUMBER",
  CARD_NUMBER: "CARD_NUMBER",
  CARD_EXPIRATION_DATE: "CARD_EXPIRATION_DATE",
  CARD_CVC: "CARD_CVC"
};

export const By = {
  CPF: "CPF",
  CNPJ: "CNPJ",
  EMAIL: "EMAIL",
  PHONE: "PHONE",
  PHOTO: "PHOTO",
  NUMBER: "NUMBER"
};

export const Run = {
  IS_EMPTY: "IS_EMPTY",
  FORMAT_WITH_LEFT_ZERO: "FORMAT_WITH_LEFT_ZERO",
  REPLACE_ALL: "REPLACE_ALL",
  MAKE_URL: "MAKE_URL",
  TO_BOOLEAN: "TO_BOOLEAN",
  ONLY_NUMBERS: "ONLY_NUMBERS",
  LIST_TO_STRING: "LIST_TO_STRING"
};

export default class Utilities {

  static method(type) {
    switch (type) {
      case Run.IS_EMPTY:
        return isEmpty.apply(null, [...arguments].slice(1));
      case Run.FORMAT_WITH_LEFT_ZERO:
        return formatWithLeftZero.apply(null, [...arguments].slice(1));
      case Run.REPLACE_ALL:
        return replaceAll.apply(null, [...arguments].slice(1));
      case Run.MAKE_URL:
        return makeURL.apply(null, [...arguments].slice(1));
      case Run.TO_BOOLEAN:
        return toBoolean.apply(null, [...arguments].slice(1));
      case Run.ONLY_NUMBERS:
        return onlyNumbers.apply(null, [...arguments].slice(1));
      case Run.LIST_TO_STRING:
        return toString.apply(null, [...arguments].slice(1));
      default:
        return null;
    }
  }

  static normalize(type, value) {
    switch (type) {
      case To.DATE:
        return normalizeDate(value);
      case To.TIME:
        return normalizeTime(value);
      case To.DATETIME:
        return normalizeDatetime(value);
      case To.CPF:
        return normalizeCPF(value);
      case To.CNPJ:
        return normalizeCNPJ(value);
      case To.MONEY:
        return normalizeValue(value);
      case To.PHONE:
        return normalizePhone(value);
      case To.ZIP_CODE:
        return normalizeZipCode(value);
      case To.NUMBER:
        return onlyNumbers.apply(null, value, [...arguments].slice(2));
      case To.CARD_NUMBER:
        return normalizeCardNumber(value);
      case To.CARD_EXPIRATION_DATE:
        return normalizeCardExpirationDate(value);
      case To.CARD_CVC:
        return normalizeCardCVC(value);
      default:
        return null;
    }
  }

  static validate(type, value) {
    switch (type) {
      case By.CPF:
        return validateCpf(value);
      case By.CNPJ:
        return validateCnpj(value);
      case By.EMAIL:
        return validateEmail(value);
      case By.PHONE:
        return validatePhone(value);
      case By.PHOTO:
        return validatePhoto(value);
      case By.NUMBER:
        return isNumber(value);
      default:
        return null;
    }
  }
}
