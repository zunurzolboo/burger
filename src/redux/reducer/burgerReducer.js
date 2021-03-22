const initialState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    bacon: 0,
    meat: 0,
  },
  totalPrice: 0,
  purchasing: false,
  confirmOrder: false,
  loading: false,
  ortsiinNer: {
    salad: "Салад",
    cheese: "Бяслаг",
    bacon: "Гахайн мах",
    meat: "Үхрийн мах",
  },
};
const INGREDIENT_PRICE = {
  salad: 150,
  cheese: 250,
  bacon: 800,
  meat: 1500,
};

const burgerReducer = (state = initialState, action) => {
  if (action.type === "ADD_INGREDIENT") {
    const newprice = state.totalPrice + INGREDIENT_PRICE[action.ortsNer];
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ortsNer]: state.ingredients[action.ortsNer] + 1,
      },
      totalPrice: newprice,
      purchasing: newprice > 1000 ? true : false,
    };
  } else if (action.type === "REMOVE_INGREDIENT") {
    const newprice = state.totalPrice - INGREDIENT_PRICE[action.ortsNer];
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ortsNer]: state.ingredients[action.ortsNer] - 1,
      },
      totalPrice: newprice,
      purchasing: newprice > 1000 ? true : false,
    };
  }
  return state;
};
export default burgerReducer;
