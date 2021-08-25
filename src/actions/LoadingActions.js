import { types } from 'reducers/LoadingReducer';

export function toggleLoading(loading) {
  return {
    type: types.TOGGLE_LOADING_MASK,
    loading,
  };
}

export default {
  toggleLoading,
};
