import React, {useState} from 'react';
import UseEffectWithProps from './UseEffectWithProps';

function UseEffectWithProps1() {

  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);

  return (
    <div>
        < UseEffectWithProps count={count} data={data}/>
        <button onClick={()=> setCount(count+1)}>update Count</button> {" "}
        <button onClick={()=> setData(data+1)}>update Data</button>
    </div>
  )
}

export default UseEffectWithProps1;