import React from "react";
import "./orders.css";

export default function Orders(props) {
  const { orders } = props;
  console.log(orders);
  return (
    <div className="card">
      <h3>Orders</h3>
      <div>
        {orders && orders.length > 0 ? (
          orders.map((order, orderNumber) => (
            <div className="card">
              Order# {orderNumber + 1}
              <ul>
                {Object.entries(order.items).map(([name, details]) => (
                  <li className="order-content">
                    {details.qty} {name}
                  </li>
                ))}
              </ul>
              <p className="order-content">
                Total: <span className="price total">{order.total}</span>{" "}
              </p>
            </div>
          ))
        ) : (
          <p className="italicized">No Pending Orders</p>
        )}
      </div>
    </div>
  );
}
