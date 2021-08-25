import { handleActions } from 'redux-actions';

export const types = {
  TOGGLE_LOADING_MASK: 'TOGGLE_LOADING_MASK',
};

const initialState = {
  loading: false,
};

export default handleActions({
  [types.TOGGLE_LOADING_MASK]: (state, payload) => {
    const { loading } = payload;
    return {
      ...state,
      loading,
    };
  },

}, initialState);
