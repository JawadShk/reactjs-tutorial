import React from 'react';

function HandleArrayWithList() {
    const students = ["Jawad", "Faiz", "Hamza", "Shehzad"];

    for(let i = 0; i < students.length; i++) {
        console.log(students[i]);
    }

    students.map((students)=>{
        console.log(students);
    })

  return (
    
    <div>
        <h1>HandleArrayWithList</h1>
        {
            students.map((students)=>
                <h2>{students}</h2>
            )
        }

        {/* {
            for(let i = 0; i < students.length; i++) {
               <h2>{students[i]}</h2> 
            }
        } */}
    </div>
  )
}

export default HandleArrayWithList