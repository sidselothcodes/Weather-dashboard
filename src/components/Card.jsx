import React from "react";


function Card(props) {
  return (
    <div className="cards">
      <div className="top">
        <p>{props.id}</p>
        <p className="type">{props.type}</p>
        <props.icon className="card-icon"/>
      </div>
      <div className="bottom">
      <p className= "condition">{props.condition}</p>
      <img src={props.imgURL}  alt="" />
      </div>
    </div>
  );
}

export default Card;
