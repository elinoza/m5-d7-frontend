import React from "react";
import { Badge } from "react-bootstrap";

const MyBadge = (props) => {
  return (
    <>
      {" "}
      <Badge variant={props.color} className="mb-3">
        {props.text}
      </Badge>{" "}
    </>
  );
};

export default MyBadge;
