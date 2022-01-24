import React, { useState, useEffect } from "react";
import Axios from "axios";

function FieldOptions(props) {
  //I start by creating two states, one for our occupation and one for out state option selection
  const [occs, setOccs] = useState([]); 
  const [stateOpts, setStateOpts] = useState([])

  useEffect(() => { //I put our axios call inside of our useEffect so we can tell react automatically render the data from the api
    const url = "https://frontend-take-home.fetchrewards.com/form"; //assigning the api url to a variable url

    Axios.get(url) //making our axios call
      .then((response) => {
        // console.log(response.data);
        
        //we then set our states to data that we get from the occupations and state arrays from the  fetch rewards api
        setOccs(response.data.occupations); 
        setStateOpts(response.data.states);
        console.log(occs); //console logging to make sure we are getting the data
      })
      .catch((error) => {
        console.log(error); 
      });
  }, []);

  return (
    <div className="option-select-container">
      <select className="form-select-option" id="occupation-option" required>
        <option value="" disabled selected> select your occupation</option>
        {occs.map((occ, id) => { //we map throug the data that we are getting through our get request in this case the occupations array
          return <option key={id} value={props.state.occupation}>{occ}</option>
        })}
      </select>

      <select className="form-select-option" id="state-option" required>
        <option value="" disabled selected> select your state</option>
        {stateOpts.map((states, id) => {
          return <option key={id} value={props.state.state}>{states.name}</option>
        })}
      </select>
    </div>
  );
}

export default FieldOptions;
