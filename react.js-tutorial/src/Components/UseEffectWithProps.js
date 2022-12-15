import React,{useEffect} from 'react';

function UseEffectWithProps(props) {

  useEffect(()=>{
    console.log('useEffect');
  })

  return (
    <div>
        <p>UseEffectWithProps</p>
        <h1>Count Props : {props.count}</h1>
        <h1>Data Props : {props.data}</h1>
    </div>
  )
}

export default UseEffectWithProps;