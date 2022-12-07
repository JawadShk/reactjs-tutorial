import React, {useState} from 'react';

function ConditionalRenderingIfElse() {
    const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
        {
            loggedIn ? <h1>Your are Logged In</h1> : <h1>Please LogIn</h1>
        }

        <button onClick={()=>{setLoggedIn(true)}}>Login</button>
        <button onClick={()=>{setLoggedIn(false)}}>Logout</button>
        
    </div>
  )
}

export default ConditionalRenderingIfElse;