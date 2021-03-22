import axios from "../../axios-orders";

export const loadOrders = (userId) => {
  return function (dispatch, getState) {
    // Zahialga tataj ehlenee
    dispatch(loadOrdersStart());

    const token = getState().signUpLoginReducer.token;
    const userId = getState().signUpLoginReducer.userId;
    axios
      .get(`/orders.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`)
      .then((response) => {
        const arr = Object.entries(response.data).reverse();
        dispatch(loadOrdersSuccess(arr));
      })
      .catch((err) => dispatch(loadOrdersError(err)));
  };
};
export const loadOrdersStart = () => {
  return {
    type: "LOAD_ORDERS_START",
  };
};
export const loadOrdersSuccess = (loadedOrders) => {
  return {
    type: "LOAD_ACTIONS_SUCCESS",
    orders: loadedOrders,
  };
};
export const loadOrdersError = (error) => {
  return {
    type: "LOAD_ORDERS_ERROR",
    error,
  };
};
// Zahialga hadaglah heseg
export const saveOrder = (newOrder) => {
  return function (dispatch, getState) {
    dispatch(saveOrderStart());
    const token = getState().signUpLoginReducer.token;
    axios
      .post(`/orders.json?auth=${token}`, newOrder)
      .then((response) => {
        dispatch(saveOrderSuccess());
      })
      .catch((error) => {
        dispatch(saveOrderError(error));
      });
  };
};
export const saveOrderStart = () => {
  return {
    type: "SAVE_ORDER_START",
  };
};
export const saveOrderSuccess = (loadedOrders) => {
  return {
    type: "SAVE_ORDER_SUCCESS",
    orders: loadedOrders,
  };
};
export const saveOrderError = (error) => {
  return {
    type: "SAVE_ORDER_ERROR",
    error,
  };
};
