import React from "react";

const Smurf = props => {
  return (
    <div className="smurf">
      <p>name: {props.name}</p>
      <p>height: {props.height} cm</p>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

export default Smurf;
