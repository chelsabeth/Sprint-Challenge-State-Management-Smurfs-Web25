import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../actions";

const SmurfForm = props => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: Date.now()
  });

  const changeHandler = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
      e.preventDefault();
    //   console.log("**SMURF**", newSmurf);
    const smurf = {
      name: newSmurf.name,
      age: newSmurf.age,
      height: newSmurf.height,
      id: newSmurf.id
    }
      postSmurf(newSmurf)
      console.log("Smurfs Info:", smurf);
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          name="name"
          id=""
          type="text"
          placeholder="Name Your Smurf"
          onChange={e => changeHandler(e)}
          value={newSmurf.name}
        />

        <input
          name="age"
          id=""
          type="text"
          placeholder="Smurf Age"
          onChange={e => changeHandler(e)}
          value={newSmurf.age}
        />

        <input
          name="height"
          id=""
          type="text"
          placeholder="Smurf Height"
          onChange={e => changeHandler(e)}
          value={newSmurf.height}
        />

        <button type="submit" onClick={() => props.postSmurf()}>
          Add Your Smurf!
        </button>
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
