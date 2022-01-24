import React from 'react'
import UserCreationForm from '../components/UserCreationForm'

//this is our user creation page
function UserCreatePage() {
    return (
        <div className='user-create-container'>
        {/* we want to bring in our form component so the user can see the form */}
            <UserCreationForm/>
        </div>
    )
}

export default UserCreatePage
