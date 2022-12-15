import React, {useEffect, useState} from 'react';

function UseEffectWIthState() {
    const [increment, setIncrement] = useState(0);
    const [decrement, setDecrement] = useState(0);

    // This will run for every state change
    useEffect(()=>{
        console.log("useEffect called");
    })

    // This will not run for any state change
    // useEffect(()=>{
    //     console.log("useEffect called");
    // },[])

    // This will run for increment
    // useEffect(()=>{
    //     console.log("useEffect called");
    // },[increment])
    
    // This will run for decrement
    // useEffect(()=>{
    //     console.log("useEffect called");
    // },[decrement])

    // This will while updating both Increment & Decrement
    // useEffect(()=>{
    //     console.log("useEffect called");
    // },[increment, decrement])



  return (
    <div>
        <p>UseEffectWIthState</p>
        <h1>Increment = {increment},Decrement = {decrement}</h1>
        <button onClick={()=> setIncrement(increment +1)}>Increment</button> {""}
        <button onClick={()=> setDecrement(decrement -1)}>Decrement</button>
    </div>
  )
}

export default UseEffectWIthState