import React from "react";

import css from "./style.module.css";

const Order = (props) => {
  return (
    <div className={css.Order}>
      <p>Орц: {JSON.stringify(props.order.orts, null, 2)}</p>
      <p>
        <strong>Нэр:</strong> {props.order.hayag.name} <strong>Хаяг:</strong>{" "}
        {props.order.hayag.street} <strong>Хот:</strong>{" "}
        {props.order.hayag.city}
      </p>
      <p>Үнийн дүн: {props.order.dun}</p>
    </div>
  );
};

export default Order;
