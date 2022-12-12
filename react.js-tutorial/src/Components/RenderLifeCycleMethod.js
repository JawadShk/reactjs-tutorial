import React, { Component } from 'react';

class RenderLifeCycleMethod extends Component {
   constructor() {
   super();

   this.state = {
     name : "Jawad"
   }
  }

  render() {

    console.log("render");

    return (
      <div>
            <h1>{this.state.name}</h1>
            <button onClick={()=>{this.setState({ name: "Hamza"})}}>Update Name</button>
            <h1>{this.props.email}</h1>
      </div>
    )
  }
}

export default RenderLifeCycleMethod;
