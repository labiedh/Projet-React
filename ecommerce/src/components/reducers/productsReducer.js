import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from '../actions/action-types/products-Types';

const initialState = { data: [], error: false };

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: [...action.data],
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default productsReducer
