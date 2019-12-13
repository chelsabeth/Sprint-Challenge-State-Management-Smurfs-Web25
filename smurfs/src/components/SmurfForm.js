import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../actions";

const SmurfForm = () => {
  const [smurfName, setSmurfName] = useState();
  const [smurfAge, setSmurfAge] = useState();
  const [smurHeight, setSmurfHeight] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Smurfs Info:", smurfName, smurfAge, smurHeight);
    postSmurf(smurfName, smurfAge, smurHeight);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name Your Smurf"
          onChange={event => setSmurfName(event.target.value)}
          value={smurfName}
        />

        <input
          type="text"
          placeholder="Smurf Age"
          onChange={event => setSmurfAge(event.target.value)}
          value={smurfAge}
        />

        <input
          type="text"
          placeholder="Smurf Height"
          onChange={event => setSmurfHeight(event.target.value)}
          value={smurfHeight}
        />

        <button type="submit">Add Your Smurf!</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
    return {
        addingSmurf: state.addingSmurf
    };
};

export default connect(mapStateToProps, { postSmurf })(SmurfForm);
