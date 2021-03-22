import React, { Component } from "react";

import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";
import { connect } from "react-redux";

const INGREDIENT_NAMES = {
  bacon: "Гахайн мах",
  cheese: "Бяслаг",
  meat: "Үхрийн мах",
  salad: "Салад",
};

class BurgerPage extends Component {
  state = {
    confirmOrder: false,
  };

  // componentDidMount = () => {
  //   this.setState({ loading: true });
  //   axios
  //     .get("/orders.json")
  //     .then((response) => {
  //       console.log(response);
  //       const arr = Object.entries(response.data);
  //       let orts = arr[arr.length - 1];
  //       arr.forEach((el) => {
  //         console.log(el[1].hayag.name + "==>" + el[1].dun);
  //       });
  //       this.setState({
  //         ingredients: orts[1].orts,
  //         totalPrice: orts[1].dun,
  //       });
  //     })
  //     .finally(() => {
  //       this.setState({ loading: false });
  //     });
  // };

  continueOrder = () => {
    this.props.history.push("/shipping");
  };

  continueOrderback = () => {
    this.setState({ loading: true });
    const order = {
      orts: this.props.burgeriinOrts,
      dun: this.state.totalPrice,
      hayag: {
        name: "Ganaa",
        city: "UB",
        street: "10r  horoolol  32 bair 5 toot",
      },
    };

    axios
      .post("/orders.json", order)
      .then((response) => {
        alert("Amjiltai hadgallaa");
      })
      .finally(() => {
        this.setState({ loading: false });
      });
    console.log("continue daragdlaa...");
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };

  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  render() {
    return (
      <div>
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          {this.props.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              onCancel={this.closeConfirmModal}
              onContinue={this.continueOrder}
            />
          )}
        </Modal>
        {this.props.loading && <Spinner />}
        {!this.props.loading && <Burger orts={this.props.burgeriinOrts} />}

        <BuildControls showConfirmModal={this.showConfirmModal} />
      </div>
    );
  }
}

export default BurgerPage;
