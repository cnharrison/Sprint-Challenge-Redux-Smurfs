import React, { Component } from "react";

import Smurf from "./Smurf";

class Smurfs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Smurfs">
        {this.props.smurfs.map(smurf => {
          return (
            <Smurf
              name={smurf.name}
              id={smurf.id}
              age={smurf.age}
              height={smurf.height}
              key={smurf.id}
              updateSmurfs={this.props.updateSmurfs}
            />
          );
        })}
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
