import axios from "axios";
const { API_BASE_URL } = require("../../config/api");
const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} = require("./auth.authType");

export const loginUserAction = (loginData) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    console.log("Login Data", loginData);

    const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, loginData);

    if (data.token) {
      localStorage.setItem("jwt", data.token);
    }

    console.log("Login Success", data);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.token,
    });
  } catch (error) {
    console.log("-------------Error----------", error);
    dispatch({
      type: LOGIN_FAILURE,
      payload: error,
    });
  }
};

export const registerUserAction = (loginData) => async (dispatch) => {
  try {
    dispatch({
      type: REGISTER_REQUEST,
    });

    const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, loginData);

    if (data.token) {
      localStorage.setItem("jwt", data.token);
    }

    console.log("Register Success", data);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: data.token,
    });
  } catch (error) {
    console.log("-------------Error----------", error);
    dispatch({
      type: REGISTER_FAILURE,
      payload: error,
    });
  }
};
