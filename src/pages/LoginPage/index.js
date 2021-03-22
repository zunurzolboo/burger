import React, { Component } from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import * as actions from "../../redux/actions/loginAcions";
import Button from "../../components/General/Button";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";
class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  login = () => {
    this.props.login(this.state.email, this.state.password);
  };
  render() {
    return (
      <div className={css.Login}>
        {this.props.userId && <Redirect to="/orders" />}
        <input
          onChange={this.changeEmail}
          type="text"
          name="Email"
          placeholder="Email"
        />
        <input
          onChange={this.changePassword}
          type="password"
          name="password"
          placeholder="Нууц үг"
        />
        <div className={css.alerterror}>{this.props.firebaseerror}</div>
        <Button text="ИЛГЭЭХ" btnType="Success" daragdsan={this.login} />
        {this.props.logginIn && <Spinner />}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    logginIn: state.signUpLoginReducer.logginIn,
    firebaseerror: state.signUpLoginReducer.error,
    userId: state.signUpLoginReducer.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(actions.loginUser(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
