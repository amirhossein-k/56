import {
  DETAIL_REQUEST,
  DETAIL_SUCCESS,
  DETAIL_FAIL,
  DETAIL_NULL,
} from "../constants/detailConstant";

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
