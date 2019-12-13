import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../actions";

const SmurfForm = props => {
  const [smurfName, setSmurfName] = useState();
  const [smurfAge, setSmurfAge] = useState();
  const [smurfHeight, setSmurfHeight] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Smurfs Info:", smurfName, smurfAge, smurfHeight);
    postSmurf(smurfName, smurfAge, smurfHeight);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name Your Smurf"
          onChange={e => setSmurfName(e.target.value)}
          value={undefined}
        />

        <input
          type="text"
          placeholder="Smurf Age"
          onChange={e => setSmurfAge(e.target.value)}
          value={undefined}
        />

        <input
          type="text"
          placeholder="Smurf Height"
          onChange={e => setSmurfHeight(e.target.value)}
          value={undefined}
        />

        <button type="submit" onClick={() => props.postSmurf()}>Add Your Smurf!</button>
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
