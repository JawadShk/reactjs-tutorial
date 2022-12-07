import React, {useState} from 'react';

function GetInputBoxValue() {
   const [data, setData] = useState(null);

   const update = (e) => {
    setData(e.target.value);
   }

  return (
    <div>
        <h1>{data}</h1>
        <input type="text" onChange={update} />
    </div>
  )
}

export default GetInputBoxValue