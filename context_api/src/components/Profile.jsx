import React from 'react'
import UserContext from '../context/UserContext';

function Profile() {
    const { user } = React.useContext(UserContext);
    console.log(user);
  return (
    <div>
        <h2>Profile</h2>
        {user ? (
          <div>
            <p>Username: {user.username}</p>
            <p>Pass: {user.password}</p>
          </div>
        ) : (
          <p>No user logged in.</p>
        )}
    </div>
  )
}

export default Profile
