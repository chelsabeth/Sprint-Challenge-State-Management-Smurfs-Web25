import React from "react";
import "./App.css";
import Smurfs from "./Smurfs";
import SmurfForm from "./SmurfForm";

function App() {
    return (
      <div className="App">
         <h1>Welcome to the Smurf Village!</h1>
        <SmurfForm/>
        <Smurfs/>
      </div>
    );
}

export default App;
