import React, { Component } from 'react'

export class ChildComponentcwulcm extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
  render() {
    return (
      <div>
        <h1>Component Will UnMount</h1>
      </div>
    )
  }
}

export default ChildComponentcwulcm;