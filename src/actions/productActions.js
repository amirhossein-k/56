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
import axios from "axios";

export const listProductAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    // const {
    //   userLogin: { userInfo },
    // } = getState();
    const config = {
      headers: {
        "Content-type": "application/json",
        // Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      "https://backend-site-asll.vercel.app/api/product/list",
      config
    );
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createProductAction =
  (namecar, factory, distance, skills, pic, price, status) =>
  async (dispatch, getState) => {
    try {
      if (namecar === null || namecar === undefined) {
        dispatch({ type: PROUCT_CREATE_NULL });
      } else {
        dispatch({ type: PROUCT_CREATE_REQUEST });

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
          "https://backend-site-asll.vercel.app/api/product/newproduct",
          { namecar, factory, distance, skills, pic, price, status },
          config
        );

        dispatch({ type: PROUCT_CREATE_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({
        type: PROUCT_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteProductAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PROUCT_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.delete(
      `https://backend-site-asll.vercel.app/api/product/${id}`,
      config
    );
    dispatch({ type: PROUCT_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PROUCT_DELETE_FAIL,
      payload: message,
    });
  }
};
export const getPrdoductAction = (id) => async (dispatch, getState) => {
  try {
    if (id === null || id === undefined) {
      dispatch({ type: PROUCT_GET_NULL });
    } else {
      dispatch({
        type: PRODUCT_GET_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.get(
        `https://backend-site-asll.vercel.app/api/product/${id}`,
        { id },
        config
      );

      dispatch({ type: PRODUCT_GET_SUCCESS, payload: data });
    }
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PRODUCT_GET_FAIL,
      payload: message,
    });
  }
};

export const updateProductAction =
  (id, namecar, factory, distance, skills, pic, price, status) =>
  async (dispatch, getState) => {
    try {
      if (namecar === null || namecar === undefined) {
        dispatch({ type: PROUCT_UPDATE_NULL });
      } else {
        dispatch({
          type: PRODUCT_UPDATE_REQUEST,
        });
        const {
          userLogin: { userInfo },
        } = getState();

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        };

        const { data } = await axios.put(
          `https://backend-site-asll.vercel.app/api/product/${id}`,
          { namecar, factory, distance, skills, pic, price, status },
          config
        );

        dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
      }
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: PRODUCT_UPDATE_FAIL,
        payload: message,
      });
    }
  };
