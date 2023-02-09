import {
  DETAIL_REQUEST,
  DETAIL_SUCCESS,
  DETAIL_FAIL,
  DETAIL_NULL,
  DETAIL_GET_REQUEST,
  DETAIL_GET_SUCCESS,
  DETAIL_GET_FAIL,
  DETAIL_GET_NULL,
  DETAIL_UPDATE_REQUEST,
  DETAIL_UPDATE_SUCCESS,
  DETAIL_UPDATE_FAIL,
  DETAIL_UPDATE_NULL,
} from "../constants/detailConstant";

export const detailGetReducer = (state = {}, action) => {
  switch (action.type) {
    case DETAIL_GET_REQUEST:
      return { loading: true };
    case DETAIL_GET_SUCCESS:
      return { loading: false, success: true, detail: action.payload };
    case DETAIL_GET_FAIL:
      return { loading: false, error: action.payload };
    case DETAIL_GET_NULL:
      return { loading: false, success: false };
    default:
      return state;
  }
};
export const detailCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case DETAIL_REQUEST:
      return { loading: true };
    case DETAIL_SUCCESS:
      return { loading: false, success: true, detail: action.payload };
    case DETAIL_FAIL:
      return { loading: false, error: action.payload };
    case DETAIL_NULL:
      return { loading: false, success: false };
    default:
      return state;
  }
};
export const detailUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case DETAIL_UPDATE_REQUEST:
      return { loading: true };
    case DETAIL_UPDATE_SUCCESS:
      return { loading: false, success: true, detail: action.payload };
    case DETAIL_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case DETAIL_UPDATE_NULL:
      return { loading: false, success: false };
    default:
      return state;
  }
};
