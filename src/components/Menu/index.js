import React, { Fragment } from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = (props) => (
  <div>
    <ul className={css.Menu}>
      {props.userId ? (
        <Fragment>
          <MenuItem exact link="/">
            ШИНЭ ЗАХИАЛГА
          </MenuItem>
          <MenuItem exact link="/orders">
            ЗАХИАЛГАНУУД
          </MenuItem>
          <MenuItem exact link="/shipping">
            Хүргэлт
          </MenuItem>
          <MenuItem exact link="/logout">
            Гарах
          </MenuItem>
        </Fragment>
      ) : (
        <Fragment>
          <MenuItem exact link="/login">
            Нэвтрэх
          </MenuItem>
          <MenuItem exact link="/signup">
            Бүртгүүлэх
          </MenuItem>
        </Fragment>
      )}
    </ul>
  </div>
);
const mapStateToProps = (state) => {
  return {
    userId: state.signUpLoginReducer.userId,
  };
};
export default connect(mapStateToProps)(Menu);
