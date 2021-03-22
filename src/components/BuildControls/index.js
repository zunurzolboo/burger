import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/burgerActions";

import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = (props) => {
  const disabledIngredients = { ...props.burgeriinOrts };
  for (let key in disabledIngredients) {
    disabledIngredients[key] = disabledIngredients[key] <= 0;
  }

  return (
    <div className={css.BuildControls}>
      <p>
        Бургерийн үнэ : <strong>{props.niitUne}</strong>
      </p>

      {Object.keys(props.ortsiinNer).map((el) => (
        <BuildControl
          key={el}
          ortsHasah={props.ortsHas}
          ortsNemeh={props.ortsNem}
          disabled={disabledIngredients}
          type={el}
          orts={props.ortsiinNer[el]}
        />
      ))}

      <button
        onClick={props.showConfirmModal}
        disabled={!props.purchasing}
        className={css.OrderButton}
      >
        ЗАХИАЛАХ
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    burgeriinOrts: state.burgerReducer.ingredients,
    niitUne: state.burgerReducer.totalPrice,
    purchasing: state.burgerReducer.purchasing,
    confirmOrder: state.burgerReducer.confirmOrder,
    loading: state.burgerReducer.loading,
    ortsiinNer: state.burgerReducer.ortsiinNer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ortsNem: (ortsNer) => dispatch(actions.addIngredient(ortsNer)),
    ortsHas: (ortsNer) => dispatch(actions.removeIngredient(ortsNer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildControls);
