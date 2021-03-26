import React from "react";
import "./menu-item.css";

export default function MenuItem(props) {
  const { item, onUpdate } = props;
  return (
    <div className="card">
      <div>
        <h4>{item.name}</h4>
        <h6>Ingredients</h6>
        <ul className="italicized">
          {Object.entries(item.ingredients).map(([key, val]) => (
            <li key={key}>
              {key} : {val}
            </li>
          ))}
        </ul>
      </div>
      <div className="menu-bottom">
        <button className="button" onClick={() => onUpdate(item)}>
          Add
        </button>
        <div className="price">${item.price}</div>
      </div>
    </div>
  );
}
