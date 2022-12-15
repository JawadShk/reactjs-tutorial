import React from 'react';
import './StyleType.css';
import style from './StyleTypeCustom.module.css';

function StyleType() {
    return (
        <div>
        <h1 className='heading'>Hello My Name Is Jawad</h1>
        <h1 style={{backgroundColor: "black", color:"green"}}>Hello My Name Is Jawad</h1>
        <h1 style={{"background-color": "black", "color":"yellow"}}>Hello My Name Is Jawad</h1> {/* Not Recommended */}
        <h1 className={style.success}>Hello My Name Is Jawad</h1>
    </div>
  )
}

export default StyleType;