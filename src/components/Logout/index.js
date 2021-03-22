import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../redux/actions/signupActions";

class logout extends React.Component {
  componentDidMount = () => {
    this.props.logout();
  };
  render() {
    return (
      <div>
        <Redirect to="login" />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};
export default connect(null, mapDispatchToProps)(logout);
