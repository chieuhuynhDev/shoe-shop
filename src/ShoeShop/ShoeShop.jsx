import React, { Component } from "react";
import ListShoe from "./ListShoe";
import Cart from "./Cart";
import { dataShoe } from "./dataShoe";

export default class ShoeShop extends Component {
  state = {
    cart: [],
    listShoe: dataShoe,
  };

  // thêm cart
  handleAddToCart = (shoe) => {
    let newCart = [...this.state.cart];
    newCart.push(shoe);
    this.setState({
      cart: newCart,
    });
  };

  // delete cart
  handleDeleteCart = (idShoe) => {
    let { cart } = this.state;

    let newCart = cart.filter((shoe) => shoe.id !== idShoe);
    this.setState({
      cart: newCart,
    });
  };

  render() {
    let { listShoe, cart } = this.state;
    return (
      <div className="p-2 row  align-items-start">
        <ListShoe handleAddToCart={this.handleAddToCart} shoeArr={listShoe} />
        <Cart handleDeleteCart={this.handleDeleteCart} dataCart={cart} />
      </div>
    );
  }
}
