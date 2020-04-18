import { isEmpty, formatWithLeftZero, replaceAll, makeURL, toBoolean, onlyNumbers, toString } from "./utilities";

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
}
