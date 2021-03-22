import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import css from "./style.module.css";
import { connect } from "react-redux";

import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/SideBar";
import OrderPage from "../OrderPage";
import { Route, Switch } from "react-router-dom";
import ShippingPage from "../ShippingPage";
import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage";
import Logout from "../../components/Logout";
import * as actions from "../../redux/actions/loginAcions";
import * as signupActions from "../../redux/actions/signupActions";

class App extends Component {
  state = {
    showSidebar: false,
    favorite: "N/A",
  };

  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = localStorage.getItem("expireDate");
    const refreshToken = localStorage.getItem("refreshToken");
    if (token) {
      if (expireDate > new Date()) {
        // hugtsaa  duusaagvi bain
        this.props.autoLogin(token, userId);
        // token huchingvi bolgohod tootsoj baigaa hutsaa
        this.props.autoLogout(expireDate.getTime() - new Date().getTime());
      } else {
        //token hugtsaa duusan bain aa
        this.props.logout();
      }
    }
  };
  render() {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar} />

        <SideBar
          showSidebar={this.state.showSidebar}
          toggleSideBar={this.toggleSideBar}
        />

        <main className={css.Content}>
          user ID: {this.props.userId}
          {this.props.userId ? (
            <Switch>
              <Route path="/logout" component={Logout}></Route>
              <Route path="/orders" component={OrderPage}></Route>
              <Route path="/shipping" component={ShippingPage}></Route>
              <Route path="/" component={BurgerPage}></Route>
            </Switch>
          ) : (
            <Switch>
              <Route path="/signup" component={SignupPage}></Route>
              <Route path="/login" component={LoginPage}></Route>
              <Redirect to="/login" />
            </Switch>
          )}
        </main>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userId: state.signUpLoginReducer.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (token, userId) =>
      dispatch(actions.loginUserSuccess(token, userId)),
    logout: () => dispatch(signupActions.logout()),
    autoLogout: () => dispatch(signupActions.autoLogout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
