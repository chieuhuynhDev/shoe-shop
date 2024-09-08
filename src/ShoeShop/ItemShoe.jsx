import React, { Component } from "react";

export default class ItemShoe extends Component {
  render() {
    let { data, handleAddToCart } = this.props;
    return (
      <div className="col-3 border border-secondary rounded">
        <img className="w-100 " src={data.image} alt="" />
        <button
          onClick={() => {
            handleAddToCart(data);
          }}
          className="btn btn-success"
        >
          Add
        </button>
      </div>
    );
  }
}
