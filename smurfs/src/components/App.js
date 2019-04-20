import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { getSmurfs } from "../actions";
import Nav from "../components/Nav";
import Smurf from "../components/Smurf";
import SmurfForm from "../components/SmurfForm";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Nav} />
          <Route
            exact
            path="/"
            render={props =>
              this.props.smurfs.map(smurf => {
                return (
                  <Smurf
                    {...props}
                    name={smurf.name}
                    id={smurf.id}
                    age={smurf.age}
                    height={smurf.height}
                    key={smurf.id}
                  />
                );
              })
            }
          />
          <Route
            path="/smurf-form"
            render={props => <SmurfForm {...props} />}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
