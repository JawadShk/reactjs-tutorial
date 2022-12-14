import React, { Component } from 'react'
import ChildComponentcwulcm from './ChildComponentcwulcm';

class ComponentWillUnmountLifeCycleMethod extends Component {
    constructor(props) {
        console.log("constructor");
      super(props)
    
      this.state = {
         value: true
      }
    }

  render() {
    console.log("render");
    return (
      <div>
        {
            this.state.value? < ChildComponentcwulcm />: <h1>Component Removed</h1>
        }
        <button onClick={()=> this.setState({value:!this.state.value })}>Toggle</button>
      </div>
    )
  }
}

export default ComponentWillUnmountLifeCycleMethod;