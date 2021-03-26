import React from "react";
import "./cart.css";

export default function Cart(props) {
  const { cart, placeOrder } = props;
  const cartItems = Object.entries({ ...cart });
  const total = cartItems.reduce((acc, [name, details]) => {
    const price = +details.price * +details.qty;
    acc += +price;
    return acc;
  }, 0);

  return (
    <div className="card">
      <h3>Cart</h3>
      <div>
        {cartItems.length > 0 ? (
          cartItems.map(([itemName, itemDetails], key) => (
            <p key={key} className="cart-item">
              <span>{itemDetails.qty}</span> <span>{itemName}</span>
              <span className="price">{itemDetails.price}</span>
            </p>
          ))
        ) : (
          <p className="italicized">No items in the cart</p>
        )}
      </div>
      <p className="cart-item">
        Total: <span className="price total">{total}</span>
      </p>
      <button className="button" onClick={() => placeOrder(total)}>
        Place order
      </button>
    </div>
  );
}
