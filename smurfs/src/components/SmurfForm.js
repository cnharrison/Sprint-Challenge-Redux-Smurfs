import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class SmurfForm extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    let smurfToAdd = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props
    .addSmurf(smurfToAdd);
    this.props.history.push("/")
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          placeholder="name"
          value={this.state.name}
          name="name"
        />
        <input
          onChange={this.handleChange}
          placeholder="age"
          value={this.state.age}
          name="age"
        />
        <input
          onChange={this.handleChange}
          placeholder="height"
          value={this.state.height}
          name="height"
        />
        <button type="submit">submit</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
    addingSmurf: state.addingSmurf
});

export default connect(
  mapStateToProps,
  { addSmurf }
)(SmurfForm);
