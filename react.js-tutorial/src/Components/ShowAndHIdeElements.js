import React from 'react';

function ShowAndHIdeElements() {
    
    const [status, setStatus] = React.useState(true);

  return (
    <div>
        {
           status ?<h1>Hii Guyx</h1>: null
        }
        <button onClick={()=>{setStatus(true)}}>Show</button>
        <button onClick={()=>{setStatus(false)}}>Hide</button>
        <button onClick={()=>{setStatus(!status)}}>Toggle</button>
    </div>
  )
}

export default ShowAndHIdeElements