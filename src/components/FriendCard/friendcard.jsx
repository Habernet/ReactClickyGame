import React, { Component } from "react";

const FriendCard = props => {
  return (
    <div
      className="card"
      value={props.id}
      onClick={() => props.handleClick(props.id)}
    >
      <div className="card-body">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
};

export default FriendCard;
