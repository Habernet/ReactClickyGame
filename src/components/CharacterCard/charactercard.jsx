import React, { Component } from "react";

const CharacterCard = props => {
  console.log(props);
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

export default CharacterCard;
