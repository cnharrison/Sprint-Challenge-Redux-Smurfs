import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteSmurf } from "../actions";

class Smurf extends Component {
  handleDelete = smurfId => this.props.deleteSmurf(smurfId);

  render() {
    return (
      <div className="smurf">
        <p>name: {this.props.name}</p>
        <p>height: {this.props.height} cm</p>
        <p>{this.props.age} smurf years old</p>
        <button onClick={() => this.handleDelete(this.props.id)}>delete</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    deletingSmurf: state.deletingSmurf
})

export default connect(
  mapStateToProps,
  { deleteSmurf }
)(Smurf);
