export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('state', serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};

// 存到sessionStorage
export const setSessionStorage = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSessionStorage = (key) => {
  return JSON.parse(sessionStorage.getItem(key));
};

export const delSessionStorage = (key) => {
  return sessionStorage.removeItem(key);
};
