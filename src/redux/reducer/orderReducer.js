const initialState = {
  //load  order
  orders: [],
  loading: false,
  error: null,
  //save order
  newOrder: {
    saving: false,
    finished: false,
    error: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_ACTIONS_SUCCESS":
      return {
        ...state,
        loading: false,
        orders: action.orders,
      };
    case "LOAD_ACTIONS_START":
      return {
        ...state,
        loading: true,
      };
    case "LOAD_ACTIONS_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "SAVE_ORDER":
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
        },
      };
    case "SAVE_ORDER_START":
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
          saving: true,
        },
      };
    case "SAVE_ORDER_SUCCESS":
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
          saving: false,
          finished: true,
          error: null,
        },
      };
    case "SAVE_ORDER_ERROR":
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
          saving: false,
          finished: true,
          error: action.error,
        },
      };
    default:
      return state;
  }
};

export default reducer;