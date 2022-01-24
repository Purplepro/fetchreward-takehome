import React, { useState, useEffect } from "react";
import Axios from "axios";

function FieldOptions(props) {
  const [occs, setOccs] = useState([]);
  const [stateOpts, setStateOpts] = useState([])

  useEffect(() => {
    const url = "https://frontend-take-home.fetchrewards.com/form";

    Axios.get(url)
      .then((response) => {
        // console.log(response.data);

        setOccs(response.data.occupations);
        setStateOpts(response.data.states);
        console.log(occs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="option-select-container">
      <select className="form-select-option" id="occupation-option" required>
        <option value="" disabled selected> select your occupation</option>
        {occs.map((occ, id) => { //we map throug the data that we are getting through oru get request in this case the occupations 
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
