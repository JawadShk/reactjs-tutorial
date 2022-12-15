import React ,{useState} from 'react';

function UsestateHook() {

  const [name, setName] = useState("Jawad");  
  
  return (
    <div>
        <p>UsestateHook</p>
        <h1>{name}</h1>
        <button onClick={()=> setName("Hamza")}>Updtae</button>
    </div>
  )
}

export default UsestateHook;