import React, {useState} from 'react';

// answer for why we use state rather than variable

// function FunctionComponent() {

//     let name = "jawad";

//     function updateName(){
//         name = "Hamza";
//         alert(name);
//     }
    
//     console.warn("warning");

//     return (
//     <div>
//         <h1>{name}</h1>
//         <button onClick={updateName}>Update Name</button>
//     </div>
//     )
// }

// updating state

function FunctionComponent() {

    const [data, setData] = useState("Jawad");

    function updateName(){
        setData("Hamza");
    }
    // console.warn("warning");
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={updateName}>Update Name</button>
    </div>
  )
}


export default FunctionComponent;
