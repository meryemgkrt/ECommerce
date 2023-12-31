const {PRODUCT_REJECT} = require('../types/homeTypes');
const {PRODUCT_PENDING} = require('../types/homeTypes');
const {FETCH_PRODUCT_LIST} = require('../types/homeTypes');

const initialState = {
  productList: [],
  pending: false,
  isError: false,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
        pending: false,
      };
    case PRODUCT_PENDING:
      return {
        ...state,
        pending: true,
      };
    case PRODUCT_REJECT:
      return {
        ...state,
        pending: false,
        isError: true,
      };
    default:
      return state;
  }
};
export default homeReducer;
