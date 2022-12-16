import React,{useState} from 'react';

function ConditionalRenderingElseIF() {
    const [user, setUser] = useState(1);
  return (
    <div>
        {
            user===1 ? <h1>Your are User 1</h1>
            : user === 2 ? <h1>Your are user 2</h1> 
            : <h1>You are user 3</h1>
        }

        <button onClick={()=>{setUser(1)}}>user1</button>
        <button onClick={()=>{setUser(2)}}>user2</button>
        <button onClick={()=>{setUser(3)}}>user3</button>
    </div>
  )
}

export default ConditionalRenderingElseIF;