import React, { Component } from "react";
import css from "./style.module.css";
import * as actions from "../../redux/actions/signupActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Button from "../../components/General/Button";
import Spinner from "../../components/General/Spinner";
class Signup extends Component {
  state = {
    email: "",
    password1: "",
    password2: "",
    error: null,
  };
  signup = () => {
    if (this.state.password1 === this.state.password2) {
      this.setState({ error: null });
      this.props.signupUser(this.state.email, this.state.password1);
    } else {
      this.setState({ error: " Нууц үг таарахгүй байнна" });
    }
  };
  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  changepassword1 = (e) => {
    this.setState({ password1: e.target.value });
  };
  changepassword2 = (e) => {
    this.setState({ password2: e.target.value });
  };

  render() {
    return (
      <div className={css.signup}>
        {this.props.userId && <Redirect to="/orders" />}
        <h1>Burtgeliin husnegt</h1>
        <div></div>
        <input
          onChange={this.changeEmail}
          type="text"
          name="email"
          placeholder="email"
        />
        <input
          onChange={this.changepassword1}
          type="password"
          name="password"
          placeholder="Нууц үг"
        />
        <input
          onChange={this.changepassword2}
          type="password"
          name="password1"
          placeholder="Нууц үг давдах"
        />
        <div>
          <span className={css.alert}>
            {this.state.error && `${this.state.error}`}{" "}
            {this.props.firebaseerror && this.props.firebaseerror}
          </span>
        </div>
        {this.props.saving && <Spinner />}
        <Button text="ИЛГЭЭХ" btnType="Success" daragdsan={this.signup} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    saving: state.signUpLoginReducer.saving,
    firebaseerror: state.signUpLoginReducer.error,
    userId: state.signUpLoginReducer.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (email, password) =>
      dispatch(actions.signupUser(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
