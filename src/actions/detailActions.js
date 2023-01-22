import {
  DETAIL_REQUEST,
  DETAIL_SUCCESS,
  DETAIL_FAIL,
  DETAIL_NULL,
} from "../constants/detailConstant";
import axios from "axios";

///////////////
export const createDetailAction =
  (header_img, profile_img, title, subtitle, slider_img, times, social) =>
  async (dispatch, getState) => {
    try {
      if (header_img === null || header_img === undefined) {
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
