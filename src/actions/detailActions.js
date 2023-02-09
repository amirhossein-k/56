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
import axios from "axios";

///////////////
export const getDetailAction = (empty) => async (dispatch, getState) => {
  try {
    if (empty === true) {
      dispatch({ type: DETAIL_GET_NULL });
    } else {
      dispatch({ type: DETAIL_GET_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.get(
        "https://backend-site-asll.vercel.app/api/detail",
        {},
        config
      );

      dispatch({ type: DETAIL_GET_SUCCESS, payload: data });
      localStorage.setItem("DetailGet", JSON.stringify(data));
    }
  } catch (error) {
    dispatch({
      type: DETAIL_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const updateDetailAction =
  (
    header_img,
    profile_img,
    title,
    subtitle,
    slider_img,
    times_1,
    times_2,
    times_3,
    social_phone,
    social_address,
    social_ig,
    id
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: DETAIL_UPDATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        "https://backend-site-asll.vercel.app/api/detail",
        {
          header_img,
          profile_img,
          title,
          subtitle,
          slider_img,
          times_1,
          times_2,
          times_3,
          social_phone,
          social_address,
          social_ig,
          id,
        },
        config
      );

      dispatch({ type: DETAIL_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: DETAIL_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const createDetailAction =
  (
    header_img,
    profile_img,
    title,
    subtitle,
    slider_img,
    times_1,
    times_2,
    times_3,
    social_phone,
    social_address,
    social_ig
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: DETAIL_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        "https://backend-site-asll.vercel.app/api/detail",
        {
          header_img,
          profile_img,
          title,
          subtitle,
          slider_img,
          times_1,
          times_2,
          times_3,
          social_phone,
          social_address,
          social_ig,
        },
        config
      );

      dispatch({ type: DETAIL_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: DETAIL_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
