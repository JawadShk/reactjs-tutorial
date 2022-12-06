import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor() {
      super();
    
      this.state = {
         name: "Jawad"
      }
    } 

    update(){
       this.setState({name: "hamza"}); 
    };

    render() { 
        return (
        <>
            <h1>{this.state.name}</h1>
            <button onClick={() =>this.update()}>update</button>
        </>);
    }
}
 
export default ClassComponent;