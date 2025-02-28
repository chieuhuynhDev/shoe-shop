import React, { Component } from "react";

export default class Cart extends Component {
  renderTable = () => {
    let { dataCart, handleDeleteCart } = this.props;
    return dataCart.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>
            <img width={100} src={item.image} alt="" />
          </td>
          <td>{item.price}</td>
          <td>
            <button
              onClick={() => {
                handleDeleteCart(item.id);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="row col-6">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
        {this.props.dataCart.length === 0 && (
          <h3 className="text-center">No items to display</h3>
        )}
      </div>
    );
  }
}
