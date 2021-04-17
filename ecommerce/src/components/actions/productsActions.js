import axios from 'axios';

import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from './action-types/products-Types';

export const fetchProductsSuccess = (data) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  data,
});

export const fetchProductsError = (error) => ({
  type: FETCH_PRODUCTS_ERROR,
  error,
});

export const fetchProducts = () => (dispatch) => {
  return axios
    .get('http://localhost:9009/products')
    .then((response) => {
      dispatch(fetchProductsSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchProductsSuccess(error));
    });
};
