import axios from "axios";
import { loginUserSuccess } from "./loginAcions";
export const signupUser = (email, password) => {
  return function (dispatch) {
    dispatch(signupUserStart());
    const data = {
      email,
      password,
      returnSecureToken: true,
    };
    //
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDwOqvjgeb90HaBYxlsO_w87Bokxtb81dk",
        data
      )
      .then((result) => {
        dispatch(signupUserSuccess(result.data));
      })
      .catch((err) => {
        dispatch(signupUserError(err));
      });
  };
};
export const signupUserStart = () => {
  return {
    type: "SIGNUP_USER_START",
  };
};
export const signupUserSuccess = (data) => {
  return {
    type: "SIGNUP_USER_SUCCESS",
    data,
  };
};
export const signupUserError = (err) => {
  return {
    type: "SIGNUP_USER_ERROR",
    err,
  };
};
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expireDate");
  localStorage.setremoveItemItem("refreshToken");
  return {
    type: "LOGOUT",
  };
};
export const autoLogout = (ms) => {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(logout());
    }, ms);
  };
};
export const autoLoginTokenRefresh = () => {
  return function (dispatch) {
    axios
      .post(
        "https://securetoken.googleapis.com/v1/token?key=AIzaSyDwOqvjgeb90HaBYxlsO_w87Bokxtb81dk",
        {
          grant_type: "refresh_token",
          refresh_token: localStorage.getItem("refreshToken"),
        }
      )
      .then((result) => {
        const token = result.data.id_token;
        const userId = result.data.user_id;
        dispatch(loginUserSuccess(token, userId));
      })
      .catch((err) => {
        dispatch(signupUserError(err));
      });
  };
};
