import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {

  //The other render is becoming a bit dense. Compartmentalizing here.
  renderOrder = (key) => {
    const shoe = this.props.shoes[key];
    const count = this.props.order[key];
    const isAvailable = shoe.status === 'available';
    if (!isAvailable) {
      return <li key={key}>Sorry {shoe ? shoe.name : "shoe"} is no longer available.</li>;
    }
    /*This checks IF the shoe was placed into Order, and later the item is set to 'No longer Available', 
    it would adjust the name and price accordingly (in order)*/
    return (
      <li key={key}>
        {count} x {shoe.name}
        <p className="itemPrice">
          {formatPrice(shoe.price)}
        </p>
      </li>);
  };


  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const shoe = this.props.shoes[key];
      const count = this.props.order[key];
      const isAvailable = shoe && shoe.status === 'available';
      //Make sure shoe is available after in order.
      if (isAvailable) {
        return prevTotal + (count * shoe.price);
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">
          {/* Loop over order ids -> display */}
          {orderIds.map(this.renderOrder)}
        </ul>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    )
  }
}
export default Order;