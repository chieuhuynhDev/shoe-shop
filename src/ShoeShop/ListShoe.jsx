import React, { Component } from "react";
import ItemShoe from "./ItemShoe";

export default class ListShoe extends Component {
  render() {
    let { shoeArr, handleAddToCart } = this.props;
    return (
      <div className="row col-6">
        {shoeArr.map((item, index) => {
          return (
            <ItemShoe
              key={index}
              data={item}
              handleAddToCart={handleAddToCart}
            />
          );
        })}
      </div>
    );
  }
}
