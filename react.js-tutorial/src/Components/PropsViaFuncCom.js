import React from 'react'

function PropsViaFuncCom(props) {
  return (
    <div>
        <h3>Hello my name is {props.name} and my age is {props.age}</h3>
        <h3>Email: {props.email}</h3>
        <h3>Mob: {props.other.mobile}</h3>
        <h3>Add: {props.other.address}</h3>
    </div>
  )
}

export default PropsViaFuncCom;