import React from 'react'

function UseEffectHook() {

 const [count, setCount] = React.useState(0);

  React.useEffect(()=>{
    console.log('useEffect');
  })

  return (
    <div>
       <p>UseEffectHook</p> 
        <h1>{count}</h1>
        <button onClick={()=> setCount(count+1)}>Update</button>
    </div>
  )
}

export default UseEffectHook;