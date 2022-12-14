import React, { Component } from 'react';

class ShouldComponentUpdateLIfeCycleMethod extends Component {

  constructor() {
    console.log("constructor");
    super();
  
    this.state = {
       count: 0
    }
  }

  shouldComponentUpdate() {
    console.log("ShouldComponentUpdate", this.state.count);
    
    if(this.state.count>=5 && this.state.count<=10){
        return true;
    }
    return false;
  }

//   componentDidUpdate(){
//     console.log("componentDidUpdate");
//   }

  render() {
    console.log("render");
    return (
      <div>
        ShouldComponentUpdateLIfeCycleMethod
        <h1>{this.state.count}</h1>
        <button onClick={()=>{this.setState({count:this.state.count + 1})}}>Update</button>
    </div>
    )
  }
}

export default ShouldComponentUpdateLIfeCycleMethod;