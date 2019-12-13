import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

const Smurfs = props => {
  return (
    <div>
      <h1>Welcome to the Smurf Village!</h1>
      {props.smurfs &&
        props.smurfs.map(smurf => (
          <div key={smurf.id}>
            <h1>Name: {smurf.name}</h1>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, { getSmurfs })(Smurfs);
