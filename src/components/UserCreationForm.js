import React, { useState } from "react";
import Axios from "axios";
import Options from "./FieldOptions";

function UserCreationForm() {
  const [state, setState] = useState({
    fullName: "",
    email: "",
    password: "",
    occupation: "",
    state: "",
  });
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value; //getting the value from the event.target

    setState({
      ...state, // because we are using a single state object that contains
      //multiple key value pairs, we're spreading the existing states back into the new state value
      [e.target.name]: value, // we then get the name from event.target.name
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //tells the user agent that if the event doesn't get handled its default action
    //should not be taken as it usually would

    const url = "https://frontend-take-home.fetchrewards.com/form";

    Axios.post(
      url,
      {
        //below is where we match our keys with our values. the keys is whats defined
        //in the backend in order for us to post that data and the values are our states which are our inputs
        name: state.fullName,
        email: state.email,
        password: state.password,
        occupation: state.occupation,
        state: state.state,
      },
      {
        //we make a post request instead of a get request because unlike get post has rquest body which allows us to make more complex request and create out user
        headers: {
          "Content-Type": "application/json", //the application type we want to create
          Accept: "application/json", //saying "hey accept this request as json"
        },
      }
    )
      .then((response) => {
        console.log(response.data);
        console.log(`${200} OK`);
        setIsSuccessful(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="user-create-form-container">
      <form onSubmit={handleSubmit} className="user-creation-form">
        <label>Create user</label>
        {isSuccessful === true ? (
          <span id="user-creation-successful">user creation successful!</span>
        ) : (
          false
        )}
        <input
          type="text"
          name="fullName"
          value={state.fullName}
          onChange={handleChange}
          placeholder="Full name"
          required
        />
        <input
          type="text"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />

        <input
          type="text"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />

        <Options occupation={state.occupation} state={state.state} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default UserCreationForm;
