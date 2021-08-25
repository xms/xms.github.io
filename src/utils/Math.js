import _isNaN from 'lodash/isNaN';

/**
 * 判斷input值是否為數字 (null 或 undefined 都會回false)
 * @param {any} 任何型態
 *  0 => true;
 *  NaN => false;
 *  Infinity => false;
 *  null => false;
 *  undefined => false;
 *  {} => false;
 */
export function isValidNumber(num) {
  return (!!Number(num) && num !== Infinity && !_isNaN(num)) || (Number(String(num)) === 0 && String(num).length > 0);
}

/**
 * 將傳入值加千分位 及 四捨五入小數點 (回傳字串)
 * @param {any} 要被轉的值
 * @param {Number} 小數點到幾位要四捨五入
 * @param {any} 如果輸入值不合法要回傳什麼 (default空字串)
 */
export function comma(inputValue, maximumFractionDigits = 5, defaultvalue = '') {
  if (!isValidNumber(inputValue)) {
    return defaultvalue;
  }

  return Number(inputValue).toLocaleString('zh-tw', { maximumFractionDigits });
}

/**
 * 將傳入值四捨五入到指定的小數位數 (回傳數字)
 * @param {any} 要被轉的值
 * @param {Number} 小數點到幾位要四捨五入
 * @param {any} 如果輸入值不合法要回傳什麼 (default為數字0)
 */
export function round(inputValue, digitCount = 4, defaultvalue = 0) {
  if (!isValidNumber(inputValue)) {
    return defaultvalue;
  }

  return Number(Number(inputValue).toFixed(digitCount));
}

/**
 * 將傳入值四捨五入到指定長度的數字(整理UI時適用)
 * @param {*} inputValue 輸入值
 * @param {*} maxLength 最長可接受的總位數(包含整數、小數及小數點)
 * @param {*} defaultvalue 如果輸入值不合法的回傳值
 * @returns 自動整理符合要求長度的含小數數字
 */
export function smartRound(inputValue, maxLength = 5, defaultvalue = 0) {
  if (!isValidNumber(inputValue)) {
    return defaultvalue;
  }
  let result = round(inputValue, 0);
  const nbrString = String(inputValue).split('.');
  const [intgr] = nbrString;
  if (maxLength - intgr.length > 1) {
    result = round(inputValue, maxLength - intgr.length - 1);
  }
  return result;
}

export default {
  comma,
  round,
  smartRound,
  isValidNumber,
};
