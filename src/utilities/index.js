/* eslint-disable no-prototype-builtins */
export function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

export function formatWithLeftZero(number) {
  return number < 10 ? `0${number}` : `${number}`;
}

export function replaceAll(target, search, replacement) {
  return target.replace(new RegExp(search, "g"), replacement);
}

export function makeURL(target) {
  return replaceAll(target, " ", "-").toLowerCase();
}

export function toBoolean(value) {
  return (value === "true");
}

export const onlyNumbers = (value, maxLength=value.length) => {
  return value.replace(/[^\d]/g, "").slice(0, maxLength);
};

export const toString = (list = [], join = " ") => {
  let string = "";
  list.map((item, index) => {
    if (index === 0) {
      string += `${item}`;
    } else {
      if (item) {
        string += `${join}${item}`;
      } else {
        string += `${item}`;
      }
    }
  });

  return string;
};
