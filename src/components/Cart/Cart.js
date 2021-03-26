import React from "react";
import "./cart.css";

export default function Cart(props) {
  const { cart } = props;
  const cartItems = Object.entries(cart);

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
      <button className="button">Place order</button>
    </div>
  );
}
