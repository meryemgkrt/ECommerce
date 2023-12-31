import {PRODUCTS_URL} from '../../service/uris';
import {getRequest} from '../../service/verb';
import {
  FETCH_PRODUCT_LIST,
  PRODUCT_PENDING,
  PRODUCT_REJECT,
} from '../types/homeTypes';

export const getProductList = params => {
  return async dispatch => {
    dispatch({type: PRODUCT_PENDING});
    try {
      const response = await getRequest(PRODUCTS_URL, params);

      dispatch({
        type: FETCH_PRODUCT_LIST,
        payload: response,
      });
    } catch (error) {
      dispatch({type: PRODUCT_REJECT});
    }
  };
};
