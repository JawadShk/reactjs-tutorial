import React, { Component } from 'react';

class ConstructorLifeCycleMethod extends Component {

  constructor(props) {
    console.log("constructor");
    super(props);
    
    this.state = {
      name : "Jawad"
    }
  }

  render() {
    console.log("Render Method");
    return (
      <div>
        <h1>
          {this.state.name}
        </h1>
      </div>
    )
  }
}

export default ConstructorLifeCycleMethod;