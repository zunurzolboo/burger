import React from "react";
import { connect } from "react-redux";
import Burger from "../../components/Burger";
import ContactData from "../../components/ContactData";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import { Route } from "react-router-dom";

class ShippingPage extends React.Component {
  goBack = () => {
    this.props.history.goBack();
  };
  showContactData = () => {
    this.props.history.replace("/shipping/contact");
  };
  render() {
    return (
      <div className={css.ShippingPage}>
        <p className={css.headerText}>
          Таны захиалга амттай байх болно гэж найдаж байна
        </p>
        <p>
          <strong>DUN : {this.props.price} ₮</strong>
        </p>

        <Burger />
        <Button
          daragdsan={this.goBack}
          btnType="Danger"
          text="ЗАХИАЛГЫГ ЦУЦЛАХ"
        ></Button>
        <Button
          daragdsan={this.showContactData}
          btnType="Success"
          text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ"
        ></Button>

        <Route path="/shipping/contact" component={ContactData} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { price: state.burgerReducer.totalPrice };
};
export default connect(mapStateToProps)(ShippingPage);
