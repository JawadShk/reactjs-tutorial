import React, { Component } from 'react';

class ComponentDidUpdateLifeCycleMethod extends Component {

  constructor() {
    console.log("constructor");
    super();
  
    this.state = {
       count: 0
    }
  }

  componentDidUpdate(preProps,preState) {
    console.warn("ComponentDidUpdate",preState);
    // this.setState({count: this.state.count+2}); this will b error because it will execute infinitely
    // we can setState in side ComponentDidUpdate but using condition as donr below
    if(this.state.count <10){
      this.setState({count: this.state.count+1});
    }
  }

  render() {
    console.log("render");
    return (
      <div>
        ComponentDidUpdateLifeCycleMethod
        <h1>{this.state.count}</h1>
        <button onClick={()=>{this.setState({count:this.state.count + 1})}}>Update</button>
    </div>
    )
  }
}

export default ComponentDidUpdateLifeCycleMethod;