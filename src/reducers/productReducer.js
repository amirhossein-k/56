import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PROUCT_CREATE_REQUEST,
  PROUCT_CREATE_SUCCESS,
  PROUCT_CREATE_FAIL,
  PROUCT_CREATE_NULL,
  PROUCT_DELETE_REQUEST,
  PROUCT_DELETE_SUCCESS,
  PROUCT_DELETE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PROUCT_UPDATE_NULL,
  PRODUCT_GET_REQUEST,
  PRODUCT_GET_SUCCESS,
  PRODUCT_GET_FAIL,
  PROUCT_GET_NULL,
} from "../constants/productConstant";

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PROUCT_CREATE_REQUEST:
      return { loading: true };
    case PROUCT_CREATE_SUCCESS:
      return { loading: false, success: true };
    case PROUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PROUCT_CREATE_NULL:
      return { loading: false, success: false };
    default:
      return state;
  }
};

export const productListReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PROUCT_DELETE_REQUEST:
      return { loading: true };
    case PROUCT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PROUCT_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
export const productGetReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_GET_REQUEST:
      return { loading: true };
    case PRODUCT_GET_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_GET_FAIL:
      return { loading: false, error: action.payload, success: false };
    case PROUCT_GET_NULL:
      return { loading: false, success: false };
    default:
      return state;
  }
};

export const productUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };
    case PROUCT_UPDATE_NULL:
      return { loading: false, success: false };

    default:
      return state;
  }
};
