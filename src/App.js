import React, { useState } from "react";
import "./styles.css";
import * as data from "./data";
import Menu from "./components/Menu/Menu";
import Orders from "./components/Orders/Orders";
import Cart from "./components/Cart/Cart";
delete data.default;
/**
 * Instructions
 *
 * Use JavaScript (or TypeScript), R
 *eact, and CSS to complete the following prompt.
 *
 * DO NOT use other libraries or packages. This includes state management (redux), styling, routing, etc.
 *   (Testing libraries are fine!!)
 * DO NOT use the codesandbox upload feature. Complete the entire exercise using codesandbox.
 *
 * Prompt
 *
 * You run a restaurant selling sandwiches and need some way of keeping track orders.
 * Create a React app that allows your employees to create new orders and show when they've been picked up.
 *
 * 1. Create a form where a user can create orders.
 * - A user should be able to see each sandwich and how much they cost.
 * - A user should be able to add sandwiches to the order using a button.
 * - A user should not be able to add a sandwich we don't have ingredients for (see data.json).
 * - A user should be able to see all items in an order.
 * - A user should be able to see the total cost of the order.
 * - A user should be able to complete the order using a button.
 *
 * 2. Create a component that display all active orders.
 * - A user should be able to see all "open" orders.
 * - A user should be able to uniquely identify orders from one another.
 * - A user should be able to see all items in an order.
 * - A user should be able to see the total cost of the order.
 * - A user should be able to mark the order as "picked-up" by clicking a button.
 * - A user should be able to clearly distinguish "open" and "picked-up" orders.
 */

export default function App() {
  const [state, setState] = useState({
    ...data,
    cart: {},
    orders: []
  });

  function updateOrder(item) {
    setState((prevState) => {
      const cart = { ...prevState.cart };
      if (cart[item.name]) {
        cart[item.name].qty += 1;
      } else {
        cart[item.name] = {
          qty: 1,
          price: item.price
        };
      }

      return {
        ...state,
        cart
      };
    });
  }
  return (
    <>
      <Menu update={updateOrder} menu={state.menu} />
      <Cart cart={state.cart} />
      <Orders />
    </>
  );
}
