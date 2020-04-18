import { isEmpty, formatWithLeftZero, replaceAll, makeURL, toBoolean, onlyNumbers, toString } from "./utilities";
import { validateCpf, validateCnpj, validateEmail, validatePhone, validatePhoto, isNumber } from "./validations";
import {
  normalizeDate, normalizeTime, normalizeDatetime, normalizeCPF, normalizeCNPJ,
  normalizeValue, normalizePhone, normalizeZipCode
} from "./normalizers";

export class Utilities {

  static IS_EMPTY = "IS_EMPTY";
  static FORMAT_WITH_LEFT_ZERO = "FORMAT_WITH_LEFT_ZERO";
  static REPLACE_ALL = "REPLACE_ALL";
  static MAKE_URL = "MAKE_URL";
  static TO_BOOLEAN = "TO_BOOLEAN";
  static ONLY_NUMBERS = "ONLY_NUMBERS";
  static LIST_TO_STRING = "LIST_TO_STRING";

  static method(type) {
    switch (type) {
      case this.IS_EMPTY:
        return isEmpty.apply(null, [...arguments].slice(1));
      case this.FORMAT_WITH_LEFT_ZERO:
        return formatWithLeftZero.apply(null, [...arguments].slice(1));
      case this.REPLACE_ALL:
        return replaceAll.apply(null, [...arguments].slice(1));
      case this.MAKE_URL:
        return makeURL.apply(null, [...arguments].slice(1));
      case this.TO_BOOLEAN:
        return toBoolean.apply(null, [...arguments].slice(1));
      case this.ONLY_NUMBERS:
        return onlyNumbers.apply(null, [...arguments].slice(1));
      case this.LIST_TO_STRING:
        return toString.apply(null, [...arguments].slice(1));
      default:
        return null;
    }
  }

  static DATE = "DATE";
  static TIME = "TIME";
  static DATETIME = "DATETIME";
  static CPF = "CPF";
  static CNPJ = "CNPJ";
  static MONEY = "MONEY";
  static PHONE = "PHONE";
  static ZIP_CODE = "ZIP_CODE";
  static NUMBER = "NUMBER";

  static normalize(type, value) {
    switch (type) {
      case this.DATE:
        return normalizeDate(value);
      case this.TIME:
        return normalizeTime(value);
      case this.DATETIME:
        return normalizeDatetime(value);
      case this.CPF:
        return normalizeCPF(value);
      case this.CNPJ:
        return normalizeCNPJ(value);
      case this.MONEY:
        return normalizeValue(value);
      case this.PHONE:
        return normalizePhone(value);
      case this.ZIP_CODE:
        return normalizeZipCode(value);
      case this.NUMBER:
        return onlyNumbers(value);
      default:
        return null;
    }
  }

  static CPF = "CPF";
  static CNPJ = "CNPJ";
  static EMAIL = "EMAIL";
  static PHONE = "PHONE";
  static PHOTO = "PHOTO";
  static NUMBER = "NUMBER";

  static validate(type, value) {
    switch (type) {
      case this.CPF:
        return validateCpf(value);
      case this.CNPJ:
        return validateCnpj(value);
      case this.EMAIL:
        return validateEmail(value);
      case this.PHONE:
        return validatePhone(value);
      case this.PHOTO:
        return validatePhoto(value);
      case this.NUMBER:
        return isNumber(value);
      default:
        return null;
    }
  }
}
