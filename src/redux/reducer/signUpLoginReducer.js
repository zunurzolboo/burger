const initialState = {
  //load  order
  orders: [],
  saving: false,
  error: null,
  token: null,
  userId: null,
  logginIn: false,
  user: [],
  //save order
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_USER_START":
      return {
        ...state,
        saving: true,
      };
    case "SIGNUP_USER_SUCCESS":
      return {
        ...state,
        saving: false,
        token: action.data.idToken,
        userId: action.data.localId,
      };
    case "SIGNUP_USER_ERROR":
      return {
        ...state,
        saving: false,
        error: action.err.response.data.error.message,
      };
    case "LOGIN_USER_START":
      return {
        ...state,
        logginIn: true,
      };
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        logginIn: false,
        token: action.token,
        userId: action.userId,
      };
    case "LOGIN_USER_ERROR":
      return {
        ...state,
        logginIn: false,
        error: action.err.response.data.error.message,
      };
    case "LOGOUT":
      return {
        ...state,
        token: null,
        userId: null,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
