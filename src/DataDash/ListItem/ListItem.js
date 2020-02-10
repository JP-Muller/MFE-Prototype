import React from "react";
import "./ListItem.css";

function ListItem(props) {
  return (
  <div className="item-wrapper">
      <h5>{props.post.title.toUpperCase()}</h5>
  </div>
  )
}

export default ListItem;
