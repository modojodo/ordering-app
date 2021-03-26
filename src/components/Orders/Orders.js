import React from "react";

export default function Orders(props) {
  const { orders } = props;
  return (
    <div className="card">
      <h3>Orders</h3>
      <div>
        {orders && orders.length > 0 ? (
          "Orders"
        ) : (
          <p className="italicized">No Pending Orders</p>
        )}
      </div>
    </div>
  );
}
