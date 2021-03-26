import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./menu.css";

export default function Menu(props) {
  const { update, menu } = props;
  return (
    <div className="menu">
      {menu.map((item, key) => (
        <MenuItem key={key} item={item} onUpdate={update} />
      ))}
    </div>
  );
}
