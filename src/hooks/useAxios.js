import { useState } from 'react';
import { useDispatch } from 'react-redux';
import LoadingActions from 'actions/LoadingActions';
import { message } from 'antd';

/**
 * useAxios
 * @param {*} resource api
 * @param {*} defaultResponse 預設的回傳值
 * @param {*} successMsg 成功顯示訊息
 * @param {*} errorMsg 失敗顯示訊息
 */
function useAxios(resource, defaultResponse = null, successMsg = null, errorMsg = 'API failed') {
  const dispatch = useDispatch();
  const [response, setResponse] = useState(defaultResponse);
  const [error, setError] = useState(null);

  async function exec(...arg) {
    let res = false;
    dispatch(LoadingActions.toggleLoading(true));
    try {
      const { data } = await resource(...arg);
      res = data;
      setResponse(data);
      if (successMsg) {
        message.success({
          content: successMsg,
        });
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('e :::', e);
      setError(e);
      if (errorMsg) {
        message.error({
          content: errorMsg,
        });
      }
    }
    dispatch(LoadingActions.toggleLoading(false));
    return res;
  }

  return ({
    response,
    error,
    exec,
  });
}

export default useAxios;
