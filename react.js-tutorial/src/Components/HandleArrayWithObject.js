import React from 'react';

function HandleArrayWithObject() {

   const students = [
       { name: 'Luke',age: 48 , add: "Mumbai" },
       { name: 'John', age: 21, add: "Gujrat" },
       { name: 'Tom', age: 33, add: "Delhi" },
       { name: 'Jack', age: 36, add: "Kolkatta" }
   ] 

  return (
    <div>
        <h1>HandleArrayWithObject</h1>

        <table border="1">
            <tbody>
            <tr>
                <td>Name</td>
                <td>Age</td>
                <td>Address</td>
            </tr>
            {
                students.map((data,i)=>
                // <h2>{data.name}</h2>
                <tr key={i}>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>{data.add}</td>
                </tr>
                )
            }
            </tbody>
        </table>

    </div>
  )
}

export default HandleArrayWithObject;