import React from 'react';
import { connect, useDispatch } from 'react-redux';
import LoadingActions from 'actions/LoadingActions';

function useLoading(props) {
  const { toggleLoading } = props;
  const dispatch = useDispatch();
  const openLoading = () => {
    dispatch(toggleLoading(true));
  };

  const closeLoading = () => {
    dispatch(toggleLoading(false));
  };
  return {
    openLoading,
    closeLoading,
  };
}

const mapStateToProps = (state) => ({
  // loading: state.LoadingReducer.loading,
});

const mapDispatchToProps = () => ({
  toggleLoading: LoadingActions.toggleLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(useLoading);
