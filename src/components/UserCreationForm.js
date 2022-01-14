import React, { useState, useEffect } from 'react'

function UserCreationForm() { 
    const [state, setState] = useState({
        fullName: "",
        email: "",
        password: "",
        occupation: "",
        state: ""
    })


    const handleChange = (e) => {
        const value = e.target.value //getting the value from the event.target

        setState({
            ...state, // because we are using a single state object that contains 
            //multiple key value pairs, we're spreading the existing state back into the new state value
            [e.target.name]: value // we then get the name from event.target
        });
    }


    const handleSubmit = () => {
        
    }


    return (
        <div>
            <form>
            <input value={state.fullName} onChange={handleChange}/>
            <input value={state.email} onChange={handleChange}/>
            <input value={state.password} onChange={handleChange}/>
            <input value={state.occupation} onChange={handleChange}/>
            <input value={state.state} onChange={handleChange}/>
            </form>
        </div>
    )
}

export default UserCreationForm

