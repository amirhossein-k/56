import {
  DETAIL_REQUEST,
  DETAIL_SUCCESS,
  DETAIL_FAIL,
  DETAIL_NULL,
  DETAIL_GET_REQUEST,
  DETAIL_GET_SUCCESS,
  DETAIL_GET_FAIL,
  DETAIL_GET_NULL,
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
export const createDetailAction =
  (
    header_img,
    profile_img,
    title,
    subtitle,
    slider_img,
    times,
    social,
    empty
  ) =>
  async (dispatch, getState) => {
    try {
      if (empty === true) {
        dispatch({ type: DETAIL_NULL });
      } else {
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
            times,
            social,
          },
          config
        );

        dispatch({ type: DETAIL_SUCCESS, payload: data });
      }
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
