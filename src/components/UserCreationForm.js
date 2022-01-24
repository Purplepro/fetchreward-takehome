import React, { useState } from "react";
import Axios from "axios";
import Options from "./FieldOptions";

function UserCreationForm() {
  const [state, setState] = useState({ // I felt it wasn't clean or effecient 
    //to create different states for each input field so I made one state containing keys that are states
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
        console.log(`${200} OK`); //letting the user know that we the error code is 200 which means its successful
        setIsSuccessful(true); //setting my successful state to true so when the user successfully 
        //creates their account a popup shows up to to give the user feedback on the success of their user creation
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="user-create-form-container">
      
      <form onSubmit={handleSubmit}  //this onSubmit allows us to submit form data to whichever api we wish to submit data to
      className="user-creation-form"
      >
        <label>Create user</label>
        {isSuccessful === true ? ( //I am using a tinary operator to say if the state of isSuccessful is true then we want our span tag to pop out if not the false
          <span id="user-creation-successful">user creation successful!</span>
        ) : (
          false
        )}
        <input
          type="text" //tells the input what type characters will inputted into this field
          name="fullName" //
          value={state.fullName} //assign our state.FullName to the inputs value
          onChange={handleChange} //this allows React to detect when the value of our input element changes
          placeholder="Full name" //telling the user name which information into into the field
          required //this a html attribute which makes it so that the user is requried to fill out this field
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
