import { isValidNumber } from './Math';


// 最大長度(return function)
export const maxLength = max => value => (value && value.length > max ? `最多輸入${max}字` : null);

// 最小長度(return function)
export const minLength = min => (value) => (value && value.length < min ? `最少輸入${min}字` : null);

// 是數字(return function)
export const isNumber = () => value => (value && !isValidNumber(Number(value)) ? '請輸入數字' : null);

// 最大小數位數(return function)
export const maxDecimal = max => (value) => {
  const regexp = new RegExp(`^\\d+(\\.\\d{1,${max}})?$`, 'g');
  if (value == null || regexp.test(String(value))) {
    return null;
  }
  return `限制輸入小數位數${max}位`;
};

// 必填(return function)
export const required = () => value => (value == null || value === '' ? '此欄位必填' : null);

/**
 * 混用validator
 * @param {*} validatorList
 * @param {*} multiMessage false的話 只回傳第一個error message
 */
export const mixValidator = (validatorList, multiMessage = false) => value => {
  const messages = validatorList.reduce((prev, current) => {
    const msg = current(value);
    return msg ? [...prev, msg] : [...prev];
  }, []);

  if (multiMessage) {
    return messages;
  }

  return messages.length > 0 ? messages[0] : '';
};

export default {
  maxLength,
  minLength,
  isNumber,
  maxDecimal,
  required,
  mixValidator,
};
