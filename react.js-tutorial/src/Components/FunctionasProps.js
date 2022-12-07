import React from 'react';

function FunctionasProps(props) {
  return (
    <div>
        <h1>Functions As Props</h1>
        <button onClick={props.data}>Call</button>
    </div>
  )
}

export default FunctionasProps