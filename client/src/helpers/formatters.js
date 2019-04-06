import isDate from 'lodash/isDate';
import isNumber from 'lodash/isNumber';
const N_A = 'n/a';

/**
 * Number padding function.
 * @param {Number} number - the number to be padded.
 * @param {Number} targetLength - the number of digits to have in the resulting test.
 * @returns {String} a padded number.
 */
export const padNumber = (number, targetLength) => {
  if (!isNumber(number)) {
    return N_A;
  }

  let output = number + '';

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return output;
};

/**
 * Date formatting function.
 * @param {String} dateString - a string that contains date in some format.
 * @returns {String} a 'YYY-MM-DD [HH:mm[:ss]]' date format.
 */
export const formatDate = (dateString) => {
  if (!dateString) {
    return N_A;
  }

  const dateTime = new Date(dateString);

  if (!isDate(dateTime)) {
    return N_A;
  }

  const year = dateTime.getFullYear();
  const month = padNumber(dateTime.getMonth() + 1, 2);
  const date = padNumber(dateTime.getDate(), 2);

  return `${year}-${month}-${date}`;
};
