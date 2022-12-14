import React, { Component } from 'react';

class ComponentDidMountLifeCycleMethod extends Component {

  constructor() {
    console.log("constructor");
    super();
  
    this.state = {
       name: "Jawad"
    }
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("render");
    return (
      <div>
        ComponentDidMountLifeCycleMethod
        <h1>{this.state.name}</h1>
        <button onClick={()=>{this.setState({name:"Hamza"})}}>Update</button>
    </div>
    )
  }
}

export default ComponentDidMountLifeCycleMethod;