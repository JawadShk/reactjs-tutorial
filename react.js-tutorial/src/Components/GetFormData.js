import React,{useState} from 'react';

function GetFormData() {
    const [name, setName] = useState(" ");
    const [tnc, setTnc] = useState(false);
    const [intrest, setIntrest] = useState(" ");
  return (
    <div>
        <h1>Handle Form in React</h1>

        <form onSubmit={(e)=>{console.log(name,tnc, intrest); e.preventDefault()}}>
            <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /> <br />
            <select onChange={(e)=>{setIntrest(e.target.value)}}>
                <option>Select Option</option>
                <option>Marvel</option>
                <option>Dc</option>
            </select> <br /> <br />
            <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span>Terms and Condition</span> <br /> <br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default GetFormData;